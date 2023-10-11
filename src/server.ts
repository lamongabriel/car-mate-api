// Modules
import express from "express";

import appRoutes from "./routes/app.routes";

const app = express();
app.use(express.json());

app.use(appRoutes);

app.listen(3000, () => {
	console.log("EXPRESS Server initialized");
});
