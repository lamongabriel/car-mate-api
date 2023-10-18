import Specification from "../../entities/Specification";
import ISpecificationsRepository, {
	ICreateSpecificationDTO,
} from "../ISpecificationsRepository";

export default class SpecificationsRepository
	implements ISpecificationsRepository
{
	private specifications: Specification[];

	private static INSTANCE: SpecificationsRepository;

	public static getInstance(): SpecificationsRepository {
		if (!this.INSTANCE) {
			this.INSTANCE = new SpecificationsRepository();
		}

		return this.INSTANCE;
	}

	private constructor() {
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

	list(): Specification[] {
		return this.specifications;
	}
}
