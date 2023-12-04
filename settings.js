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
	token_secret: ENV["CHAT_SECRET"],
	chat_history_size: ENV["CHAT_HISTORY_SIZE"]
};

exports.cloudinary = {
	api_secret: ENV["DEV_CLOUD_API_TOKEN"] || ENV["PROD_CLOUD_API_TOKEN"],
	cloud_name: ENV["CLOUD_NAME"],
	api_key: ENV["CLOUD_API_KEY"] 
};

exports.redis = {
    password: ENV["REDIS_PASSWORD"],
    token: ENV["REDIS_TOKEN"],
    port: ENV["REDIS_PORT"] && Number(ENV["REDIS_PORT"]) ,
    endpoint: ENV["REDIS_ENDPOINT"],
    region: ENV['REDIS_REGION']
}