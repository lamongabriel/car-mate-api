import { Request, Response, Router } from "express";

import CategoriesRepository from "../modules/cars/repositories/CategoriesRepository";
import createCategoryController from "../modules/cars/useCases/createCategory";

const categoriesRepository = new CategoriesRepository();
const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
	return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (req: Request, res: Response) => {
	const categoryList = categoriesRepository.list();

	return res.json({ data: categoryList });
});

export default categoriesRoutes;
