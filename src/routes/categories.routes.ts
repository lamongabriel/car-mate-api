import { Request, Response, Router } from "express";

import CategoriesRepository from "../repositories/CategoriesRepository";

const categoriesRepository = new CategoriesRepository();
const categoriesRoutes = Router();

categoriesRoutes.post("/", (req: Request, res: Response) => {
	const { name, description } = req.body;

	if (!name || !description) {
		return res.status(400).json({ message: "Missing NAME or DESCRIPTION" });
	}

	const categoryAlreadyExists = categoriesRepository.findByName(name);

	if (categoryAlreadyExists) {
		return res
			.status(400)
			.json({ message: `Category with name '${name}' already exists` });
	}

	const newCategory = categoriesRepository.create({ name, description });

	return res.status(201).send(newCategory);
});

categoriesRoutes.get("/", (req: Request, res: Response) => {
	const categoryList = categoriesRepository.list();

	return res.json({ data: categoryList });
});

export default categoriesRoutes;
