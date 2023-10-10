import Category from "../model/Category";

export interface ICreateCategoryDTO {
	name: string;
	description: string;
}

export default interface ICategoriesRepository {
	findByName: (name: string) => Category | null;
	list: () => Category[];
	create: ({ name, description }: ICreateCategoryDTO) => void;
}
