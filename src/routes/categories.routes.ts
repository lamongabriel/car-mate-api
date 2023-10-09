import { Request, Response, Router } from "express";

import CategoriesRepository from "../repositories/CategoriesRepository";

const categoriesRepository = new CategoriesRepository();
const categoriesRoutes = Router();

categoriesRoutes.post("/", (req: Request, res: Response) => {
	const { name, description } = req.body;

	const newCategory = categoriesRepository.create({ name, description });

	return res.status(201).send(newCategory);
});

categoriesRoutes.get("/", (req: Request, res: Response) => {
	const categoryList = categoriesRepository.list();

	return res.json({ data: categoryList });
});

export default categoriesRoutes;
