"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const openAI = require("./openAI/service");
const cloudinary = require("./cloudinary/service");
const settings = require("./settings");
const session = require("express-session");

const app = express();

// Middleware to parse the incoming request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	session({
		secret: "abc", // used to sign the session ID cookie (choose a strong, unique value)
		resave: false, // forces the session to be saved back to the session store
		saveUninitialized: false, // forces a session that is "uninitialized" to be saved to the store
		cookie: { secure: false }, // if using HTTPS, set this option to 'true'
	})
);

app.get('/image/list', async (req, res) => {
	const response = await cloudinary.getImages(settings.cloudinary);
	res.send(response)

});

app.get("/ai/responses/user", (req, res) => {
	const prompt = req.session.lastPrompt;
	if (!prompt) {
		throw new Error("Message history is empty");
	}
	const responses = openAI.getUserResponses(prompt);
	res.send(responses);
});

app.get("/ai/responses/assistant", (req, res) => {
	const prompt = req.session.lastPrompt;
	if (!prompt) {
		throw new Error("Message history is empty");
	}
	const responses = openAI.getAIResponses(prompt);
	res.send(responses);
});

app.post("/ai/chat", async (req, res) => {
	const prompt = req.body;
	const lastPrompt = req.session.lastPrompt;
	let updatedPrompt = null;

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
	req.session.lastPrompt = processedPrompt;

	res.send(processedPrompt);
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
