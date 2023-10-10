import Specification from "../model/Specification";
import ISpecificationsRepository, {
	ICreateSpecificationDTO,
} from "./ISpecificationsRepository";

export default class SpecificationsRepository
	implements ISpecificationsRepository
{
	private specifications: Specification[];

	constructor() {
		this.specifications = [];
	}

	create({ name, description }: ICreateSpecificationDTO) {
		const newSpecification: Specification = new Specification();

		Object.assign(newSpecification, {
			name,
			description,
			created_at: new Date(),
		});

		this.specifications.push(newSpecification);
	}

	findByName(name: string): Specification {
		const specificationWithName = this.specifications.find(
			(spec) => spec.name === name,
		);

		if (specificationWithName) return specificationWithName;

		return null;
	}
}
