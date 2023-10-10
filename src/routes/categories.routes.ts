import { Request, Response, Router } from "express";

import CategoriesRepository from "../modules/cars/repositories/CategoriesRepository";
import CreateCategoryService from "../modules/cars/services/CreateCategoryService";

const categoriesRepository = new CategoriesRepository();
const categoriesRoutes = Router();

categoriesRoutes.post("/", (req: Request, res: Response) => {
	const { name, description } = req.body;

	const createCategoryService = new CreateCategoryService(categoriesRepository);
	createCategoryService.execute({ name, description });

	return res.sendStatus(201);
});

categoriesRoutes.get("/", (req: Request, res: Response) => {
	const categoryList = categoriesRepository.list();

	return res.json({ data: categoryList });
});

export default categoriesRoutes;
