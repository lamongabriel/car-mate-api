import SpecificationsRepository from "../../repositories/implementations/SpecificationsRepository";

export default class ListSpecificationsUseCase {
	constructor(private specificationsRepository: SpecificationsRepository) {}

	execute() {
		const specifications = this.specificationsRepository.list();

		return specifications;
	}
}
