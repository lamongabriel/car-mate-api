import { Request, Response } from "express";

import ListCategoriesUseCase from "./ListCategoriesUseCase";

export default class ListCategoriesController {
	constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

	handle(request: Request, response: Response) {
		const data = this.listCategoriesUseCase.execute();

		response.json(data);
	}
}
