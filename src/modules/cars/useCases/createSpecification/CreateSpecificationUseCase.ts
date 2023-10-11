import SpecificationsRepository from "../../repositories/implementations/SpecificationsRepository";

interface IRequest {
	name: string;
	description: string;
}

export default class CreateSpecificationUseCase {
	constructor(private specificationsRepository: SpecificationsRepository) {}

	execute({ name, description }: IRequest) {
		if (!name || !description) {
			throw new Error("Missing required data");
		}

		const speficiationAlreadyExists =
			this.specificationsRepository.findByName(name);

		if (speficiationAlreadyExists) {
			throw new Error(`Specification with name '${name}' already exists`);
		}

		this.specificationsRepository.create({ name, description });
	}
}
