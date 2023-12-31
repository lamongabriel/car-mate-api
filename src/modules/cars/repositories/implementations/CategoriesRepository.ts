import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database";
import Category from "../../entities/Category";
import ICategoriesRepository, {
	ICreateCategoryDTO,
} from "../ICategoriesRepository";

export default class CategoriesRepository implements ICategoriesRepository {
	private repository: Repository<Category>;

	constructor() {
		this.repository = AppDataSource.getRepository("categories");
	}

	async create({ name, description }: ICreateCategoryDTO): Promise<void> {
		const category = this.repository.create({
			description,
			name,
		});

		await this.repository.save(category);
	}

	async list(): Promise<Category[]> {
		const categories = await this.repository.find();

		return categories;
	}

	async findByName(name: string): Promise<Category | null> {
		const categoryWithName = await this.repository.findOne({
			where: {
				name,
			},
		});

		if (!categoryWithName) return null;

		return categoryWithName;
	}
}
