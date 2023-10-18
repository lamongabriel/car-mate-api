import { Request, Response } from "express";

import ListCategoriesUseCase from "./ListCategoriesUseCase";

export default class ListCategoriesController {
	constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

	async handle(request: Request, response: Response) {
		const data = await this.listCategoriesUseCase.execute();

		response.json(data);
	}
}
