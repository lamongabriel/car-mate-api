// Modules
import express from "express";

// Routes
import categoriesRoutes from "./routes/categories.routes";

const app = express();
app.use(express.json());

// Categories routes
app.use("/categories", categoriesRoutes);

app.listen(3000, () => {
	console.log("EXPRESS Server initialized");
});
