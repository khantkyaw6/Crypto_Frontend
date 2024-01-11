import axios from 'axios';

export const httpService = axios.create({
	baseURL: 'https:/api.coincap.io',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

export const openHttpService = axios.create({
	baseURL: 'https:/api.coincap.io',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});
