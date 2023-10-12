import express from "express";
import swaggerUI from "swagger-ui-express";

import appRoutes from "./routes/app.routes";
import swaggerConfig from "./swagger.json";

const app = express();
app.use(express.json());

// Swagger
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerConfig));

// Routes
app.use(appRoutes);

app.listen(3333, () => {
	console.log("EXPRESS Server initialized");
});
