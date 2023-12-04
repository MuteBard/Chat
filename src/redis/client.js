const { Redis } = require("@upstash/redis");
const settings = require("../../settings");

const redis = new Redis({
	url: `https://${settings.redis.endpoint}`,
	token: settings.redis.token,
});

module.exports = redis;
