const { Configuration, OpenAIApi } = require("openai");

function setSpeaker(role, message) {
	switch (role) {
		case "system":
			return { role: "system", content: message }; //context setting AI role
		case "user":
			return { role: "user", content: message }; //user role
		default:
			return { role: role, content: message }; //AI role
	}
}

function getBody(prompt, { model }) {
	const { context, question, response, history, role } = prompt;
	let messages = [];
	if (!history) {
		messages = [setSpeaker("system", context), setSpeaker("user", question)];
	} else {
		messages = [...history, setSpeaker("user", question)];
	}

	return {
		model,
		messages,
	};
}

function getOptions({ token, organization }) {
	const options = new Configuration({
		organization: organization,
		apiKey: token,
	});
	return options;
}

async function OpenApiSettings(prompt, openAI) {
	const options = getOptions(openAI);
	const body = getBody(prompt, openAI);
	const request = new OpenAIApi(options);
	const obj = { body, request };
	return obj;
}

async function chatCompletion(prompt, openAI) {
	const { body, request } = await OpenApiSettings(prompt, openAI);
	const { messages } = body;

	let response;
	if (openAI.debug) {
		response = await getRandomContent();
	} else {
		response = await request.createChatCompletion(body);
		if (!!response?.data?.choices[0].length) {
			throw new Error("Message data could not be found");
		}
	}

	const AIRole = response.data.choices[0].message.role;
	const AIResponse = response.data.choices[0].message.content;

	const newPrompt = {
		...prompt,
		response: AIResponse,
		history: [...messages, setSpeaker(AIRole, AIResponse)],
	};
	return newPrompt;
}

function getUserResponses(prompt) {
	const result = prompt.history.filter((prompt) => prompt.role === "user");
	return result;
}

function getAIResponses(prompt) {
	const result = prompt.history.filter(
		(prompt) => prompt.role != "user" && prompt.role != "system"
	);
	return result;
}

function getRandomContent() {
	const characters = "abcdefghijklmnopqrstuvwxyz     ?!.";
	const charList = characters.split("");

	let min = 0;
	let max = charList.length;

	const paragraphSize = Math.floor(Math.random() * (100 - 10) + 10);
	const sentences = new Array(paragraphSize).fill().map((_) => {
		return charList[Math.floor(Math.random() * (max - min) + min)];
	});

	const response = {
		data: {
			choices: [
				{
					message: { content: sentences.join("").trim(), role: "assistant" },
				},
			],
		},
	};

	return response;
}

module.exports = {
	chatCompletion,
	getAIResponses,
	getUserResponses,
};
