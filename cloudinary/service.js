"use strict";
const { cloudinaryClient } = require('./client');


async function getImages(cloudinarySettings){
	const vector = await getResources(cloudinarySettings, "vector");
	const allImages = [...vector];
	return allImages;
}

function getResources(cloudinarySettings, folderName) {
	const folder = {
		type: upload,
		prefix: `shader_nodes/${folderName}`
	}

	return new Promise((resolve, reject) => {
		cloudinaryClient(cloudinarySettings).api.resources(folder, (error, result) => {
			if (error) {
				reject(error);
			} else {
				resolve(result);
			}
		});
	});
}

module.exports = {
	getImages
};
