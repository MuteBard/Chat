"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const openAI = require("./src/service/chat");
const settings = require("./settings");
const jwt = require("jsonwebtoken");
const redis = require("./src/redis/client");
const tokenSecret = settings.openAI.token_secret;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const verifyToken = (req, res, next) => {
	const token = req.headers["authorization"];

	if (!token) {
		return res.status(403).send("A token is required for authentication");
	}

	try {
		const decoded = jwt.verify(token.split(" ")[1].trim(), tokenSecret);
		req.user = decoded;
	} catch (err) {
		return res.status(401).send("Invalid Token");
	}
	return next();
};

app.post("/ai/chat", verifyToken, async (req, res) => {
	const prompt = req.body;
	const processedPrompt = await addPrompt(prompt);
	res.send(processedPrompt);
});

app.get("/ai/clear", verifyToken, async (req, res) => {
	const { key } = req.user;
	const clearedPrompt = {
		history: null,
		context: null,
		response: null,
		history: [],
		key,
	};

	redis.set(key, clearedPrompt);
	res.send(clearedPrompt);
});

async function addPrompt(prompt) {
	const { key } = prompt;
	let updatedPrompt = null;
	const lastPrompt = (await redis.get(key)) || {
		history: null,
		context: null,
		response: null,
	};

	if (lastPrompt?.history.length >= settings.openAI.chat_history_size) {
		lastPrompt?.history.shift();
	}

	if (lastPrompt?.context !== prompt?.context) {
		updatedPrompt = prompt;
	} else if (lastPrompt) {
		updatedPrompt = {
			...lastPrompt,
			question: prompt.question,
		};
	} else {
		updatedPrompt = prompt;
	}

	const processedPrompt = await openAI.chatCompletion(
		updatedPrompt,
		settings.openAI
	);

	redis.set(key, processedPrompt);
	return processedPrompt;
}

const PORT = 4000;

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
