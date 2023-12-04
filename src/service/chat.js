"use strict";

const { openAIClient } = require("../openAI/client");
const { getMockContent, setSpeaker } = require("../openAI/helperFunctions");

async function chatCompletion(prompt, openAISettings) {
	const { debug } = openAISettings;
	const { body, request } = await openAIClient(prompt, openAISettings);
	const { messages } = body;

	let response;
	if (debug) {
		response = await getMockContent();
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

module.exports = {
	chatCompletion,
};
