import { Request, Response, Router } from "express";

import CategoriesRepository from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req: Request, res: Response) => {
	const { name, description } = req.body;

	const newCategory = categoriesRepository.create({ name, description });

	return res.status(201).send(newCategory);
});

export default categoriesRoutes;
