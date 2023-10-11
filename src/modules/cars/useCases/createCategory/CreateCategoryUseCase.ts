import ICategoriesRepository from "../../repositories/ICategoriesRepository";

interface IRequest {
	name: string;
	description: string;
}

export default class CreateCategoryUseCase {
	constructor(private categoriesRepository: ICategoriesRepository) {}

	execute({ name, description }: IRequest): void {
		if (!name || !description) {
			throw new Error("Missing required data");
		}

		const categoryAlreadyExists = this.categoriesRepository.findByName(name);

		if (categoryAlreadyExists) {
			throw new Error(`Category with name '${name}' already exists`);
		}

		this.categoriesRepository.create({ name, description });
	}
}
