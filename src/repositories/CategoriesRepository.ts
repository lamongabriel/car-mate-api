import Category from "../model/Category";

interface ICreateCategoryDTO {
	name: string;
	description: string;
}

export default class CategoriesRepository {
	private categories: Category[];

	constructor() {
		this.categories = [] as Category[];
	}

	create({ name, description }: ICreateCategoryDTO): Category {
		const newCategory: Category = new Category();

		Object.assign(newCategory, {
			name,
			description,
			created_at: new Date(),
		});

		this.categories.push(newCategory);

		return newCategory;
	}

	list(): Category[] {
		return this.categories;
	}
}
