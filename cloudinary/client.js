"use strict";

const cloudinary = require("cloudinary").v2;

function cloudinaryClient(cloudinarySettings) {
    const { api_secret, cloud_name, api_key } = cloudinarySettings
	cloudinary.config({
		cloud_name,
		api_key,
		api_secret,
	});

	return cloudinary;
}

module.exports = {
    cloudinaryClient
}