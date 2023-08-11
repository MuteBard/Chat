"use strict";

const ENV = process.env;

function selectModel(type) {
	switch (type) {
		case 1:
			return "gpt-3.5-turbo";
		case 2:
			return "text-davinci-002";
		case 2:
			return "text-davinci-003";
		default:
			throw new Error("Unknown model requested");
	}
}

exports.openAI = {
	token: ENV["DEV_OPEN_AI_TOKEN"] || ENV["PROD_OPEN_AI_TOKEN"] || undefined,
	organization: ENV["OPEN_AI_ORG"] || undefined,
	model: ENV["MODEL_TYPE"] ? selectModel(Number(ENV["MODEL_TYPE"])) : undefined,
	debug: ENV["DEBUG"] === "true",
};
