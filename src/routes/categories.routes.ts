import { Request, Response, Router } from "express";

import Category from "../model/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (req: Request, res: Response) => {
	const { name, description } = req.body;

	const newCategory: Category = new Category();

	Object.assign(newCategory, {
		name,
		description,
		created_at: new Date(),
	});

	categories.push(newCategory);

	return res.status(201).send(newCategory);
});

export default categoriesRoutes;
