"use strict";
const { cloudinaryClient } = require('./client');

function imageMapper(list, type, group) {
	return list.map((node) => {
		const str = node.public_id;
		const regex = '^.+\/(.+)$';
		const name = str.match(regex)[1];
		return { ...node, type, group, name};
	});
}

async function getImages(cloudinarySettings){
	const vector = (await getResources(cloudinarySettings, "vector")).resources;
	const color = (await getResources(cloudinarySettings, "color")).resources;
	const converter = (await getResources(cloudinarySettings, "converter")).resources;
	const inputs = (await getResources(cloudinarySettings, "inputs")).resources;
	const outputs = (await getResources(cloudinarySettings, "outputs")).resources;
	const shader = (await getResources(cloudinarySettings, "shader")).resources;
	const texture = (await getResources(cloudinarySettings, "texture")).resources;

	const shaderType = "shader";

	const allImages = [
		...imageMapper(vector, shaderType, "vector"),
		...imageMapper(color, shaderType, "color"),
		...imageMapper(converter, shaderType, "converter"),
		...imageMapper(inputs, shaderType, "inputs"),
		...imageMapper(outputs, shaderType, "outputs"),
		...imageMapper(shader, shaderType, "shader"),
		...imageMapper(texture, shaderType, "vector"),
	];
	
	return {
		nodes: allImages,
		count: allImages.length
	};
}

function getResources(cloudinarySettings, folderName) {
	const folder = {
		type: 'upload',
		prefix: `shader_nodes/${folderName}`,
		max_results: 100,
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
