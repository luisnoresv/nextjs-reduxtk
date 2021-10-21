module.exports = {
	reactStrictMode: true,
	env: {
		PORT: process.env.PORT,
		REDESIGN_BACKEND_API: process.env.REDESIGN_BACKEND_API,
		BE_API_KEY: process.env.BE_API_KEY,
		BREAKING_BAD_API: process.env.BREAKING_BAD_API,
		ORIGIN_API: process.env.ORIGIN_API,
		DOG_API_BASE_URL: process.env.DOG_API_BASE_URL,
		DOG_API_KEY: process.env.DOG_API_KEY,
	},
	images: {
		domains: ['cdn2.thedogapi.com'],
	},
};
