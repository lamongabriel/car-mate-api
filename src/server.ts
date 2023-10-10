// Modules
import express from "express";

// Routes
import categoriesRoutes from "./routes/categories.routes";
import specificationsRoutes from "./routes/specification.routes";

const app = express();
app.use(express.json());

// Categories routes
app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(3000, () => {
	console.log("EXPRESS Server initialized");
});
