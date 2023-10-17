import { PrimaryColumn, Entity, Column } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity()
export default class Category {
	@PrimaryColumn()
	id?: string;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	created_at: Date;

	constructor() {
		if (!this.id) {
			this.id = uuidV4();
		}
	}
}
