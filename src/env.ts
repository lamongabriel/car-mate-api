import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

const env = {
	DATABASE_HOST:
		process.env.NODE_ENV === "production"
			? process.env.DATABASE_HOST
			: "localhost",
	DATABASE_PORT: Number(process.env.DATABASE_PORT),
	DATABASE_USER: process.env.DATABASE_USER,
	DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
	DATABASE_DB: process.env.DATABASE_DB,
};

Object.values(env).forEach((env) => {
	if (env === null || env === undefined || Number.isNaN(env)) {
		throw new Error("Missing required environment variables");
	}
});

export default env;
