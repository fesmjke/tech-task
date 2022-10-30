import dotenv from 'dotenv';

export const loadServerConfigAsync = async () => {
	dotenv.config();

	const config = {
		server: {
			port: process.env.PORT ?? '3000',
		},
	};

	return config;
};
