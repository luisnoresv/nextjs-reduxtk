import axios from 'axios';

const http = axios.create({
	baseURL: process.env.ORIGIN_API,
	headers: { 'be-api-key': process.env.BE_API_KEY },
});

const breakingBadInstance = axios.create({
	baseURL: process.env.BREAKING_BAD_API,
});

const responseBody = (response) => response.data;

export const baseApi = {
	get: (url) => http.get(url).then(responseBody),
};

export const breakingBadApi = {
	get: (url) => breakingBadInstance.get(url).then(responseBody),
};
