import Category from "../model/Category";
import ICategoriesRepository, {
	ICreateCategoryDTO,
} from "./ICategoriesRepository";

export default class CategoriesRepository implements ICategoriesRepository {
	private categories: Category[];

	private static INSTANCE: CategoriesRepository;

	public static getInstance(): CategoriesRepository {
		if (!this.INSTANCE) {
			this.INSTANCE = new CategoriesRepository();
		}

		return this.INSTANCE;
	}

	private constructor() {
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

	findByName(name: string): Category | null {
		const categoryWithName = this.categories.find((cat) => cat.name === name);

		if (categoryWithName) return categoryWithName;

		return null;
	}
}
