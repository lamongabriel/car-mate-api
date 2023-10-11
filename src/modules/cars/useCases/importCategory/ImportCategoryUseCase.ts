import { parse } from "csv-parse";
import fs from "fs";

import CategoriesRepository from "../../repositories/implementations/CategoriesRepository";

interface IImportCategory {
	name: string;
	description: string;
}

export default class ImportCategoryUseCase {
	constructor(private categoriesRepository: CategoriesRepository) {}

	loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
		return new Promise((resolve, reject) => {
			const categories: IImportCategory[] = [];

			const stream = fs.createReadStream(file.path);
			const parseFile = parse({ bom: true, delimiter: "," });

			stream.pipe(parseFile);

			parseFile
				.on("data", async (stream: string[]) => {
					const [name, description] = stream;

					categories.push({ name, description });
				})
				.on("end", () => {
					resolve(categories);
				})
				.on("error", (err) => {
					reject(err);
				});
		});
	}

	async execute(file: Express.Multer.File): Promise<void> {
		const categories = await this.loadCategories(file);

		categories.map(async (category) => {
			const { name, description } = category;

			const categoryAlreadyExists = this.categoriesRepository.findByName(name);

			if (!categoryAlreadyExists) {
				this.categoriesRepository.create({
					name,
					description,
				});
			}
		});

		console.log(categories);
	}
}
