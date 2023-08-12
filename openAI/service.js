"use strict";

const { openAIClient } = require('./client');
const { getMockContent, setSpeaker } = require('./util');


async function chatCompletion(prompt, openAISettings) {
	const { debug } = openAISettings
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

module.exports = {
	chatCompletion,
	getAIResponses,
	getUserResponses,
};
