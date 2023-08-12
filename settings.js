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
	token: ENV["DEV_OPEN_AI_TOKEN"] || ENV["PROD_OPEN_AI_TOKEN"],
	organization: ENV["OPEN_AI_ORG"],
	model: ENV["MODEL_TYPE"] && selectModel(Number(ENV["MODEL_TYPE"])),
	debug: ENV["DEBUG"] === "true",
};

exports.cloudinary = {
	api_secret: ENV["DEV_CLOUD_API_TOKEN"] || ENV["PROD_CLOUD_API_TOKEN"],
	cloud_name: ENV["CLOUD_NAME"],
	api_key: ENV["CLOUD_API_KEY"] 
}
