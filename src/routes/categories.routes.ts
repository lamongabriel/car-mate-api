import { Request, Response, Router } from "express";
import { v4 as uuidV4 } from "uuid";

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/", (req: Request, res: Response) => {
	const { name, description } = req.body;

	const newCategory = {
		id: uuidV4(),
		name,
		description,
	};

	categories.push(newCategory);

	return res.status(201).send(newCategory);
});

export default categoriesRoutes;
