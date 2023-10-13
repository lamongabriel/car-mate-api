import { DataSource } from "typeorm";

import env from "../env";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: env.DATABASE_HOST,
	port: env.DATABASE_PORT,
	username: env.DATABASE_USER,
	password: env.DATABASE_PASSWORD,
	database: env.DATABASE_DB,
	synchronize: true,
	logging: true,
	entities: [],
	subscribers: [],
	migrations: [],
});

AppDataSource.initialize()
	.then(() => {
		console.log("Established connection with DB");
	})
	.catch((err) => {
		throw new Error(`Could not connect to DB - ${err}`);
	});
