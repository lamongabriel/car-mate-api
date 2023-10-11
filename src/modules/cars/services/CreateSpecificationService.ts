import SpecificationsRepository from "../repositories/implementations/SpecificationsRepository";

interface IRequest {
	name: string;
	description: string;
}

export default class CreateSpecificationService {
	constructor(private specificationRepository: SpecificationsRepository) {}

	execute({ name, description }: IRequest) {
		if (!name || !description) {
			throw new Error("Missing required data");
		}

		const speficiationAlreadyExists =
			this.specificationRepository.findByName(name);

		if (speficiationAlreadyExists) {
			throw new Error(`Specification with name '${name}' already exists`);
		}

		this.specificationRepository.create({ name, description });
	}
}
