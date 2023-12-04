"use strict";

const { Configuration, OpenAIApi } = require("openai");
const { setSpeaker } = require("./helperFunctions");

function getBody(prompt, openAISettings) {
	const { model } = openAISettings;
	const { context, question, history } = prompt;
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

function getOptions(openAISettings) {
	const { token, organization } = openAISettings;
	const options = new Configuration({
		organization: organization,
		apiKey: token,
	});
	return options;
}

async function openAIClient(prompt, openAISettings) {
	const options = getOptions(openAISettings);
	const body = getBody(prompt, openAISettings);
	const request = new OpenAIApi(options);
	const obj = { body, request };
	return obj;
}

module.exports = {
	openAIClient,
};
