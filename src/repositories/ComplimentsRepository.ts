import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../entities/Compliments";

@EntityRepository()
class ComplimentsRepository extends Repository<Compliment> {}
export { ComplimentsRepository };
