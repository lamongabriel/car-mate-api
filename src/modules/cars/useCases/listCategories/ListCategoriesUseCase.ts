import Category from "../../entities/Category";
import CategoriesRepository from "../../repositories/implementations/CategoriesRepository";

export default class ListCategoriesUseCase {
	constructor(private categoriesRepository: CategoriesRepository) {}

	execute(): Category[] {
		const categories = this.categoriesRepository.list();

		return categories;
	}
}
