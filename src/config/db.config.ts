import dotenv from "dotenv";

export const loadDbConfigAsync = async () => {
    dotenv.config();

	const config = {
		database: {
			url: process.env.MONGO_URL ?? 'mongodb://127.0.0.1',
			port: process.env.MONGO_PORT ?? '27017',
			app: process.env.MONGO_APP ?? 'tech_task',
		}
	};

    return config;
}