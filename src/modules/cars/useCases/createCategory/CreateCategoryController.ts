import { Request, Response } from "express";

import CreateCategoryUseCase from "./CreateCategoryUseCase";

export default class CreateCategoryController {
	constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

	async handle(request: Request, response: Response): Promise<Response> {
		const { name, description } = request.body;

		await this.createCategoryUseCase.execute({ name, description });

		return response.sendStatus(201);
	}
}
