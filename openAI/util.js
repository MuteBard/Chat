"use strict";

function getMockContent() {
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

function setSpeaker(role, message) {
	return { role: role, content: message };
}

module.exports = {
	getMockContent,
    setSpeaker
};
