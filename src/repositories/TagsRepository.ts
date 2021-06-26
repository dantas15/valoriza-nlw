import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entities/Tag";

@EntityRepository(Tag)
class TagsRepository extends Repository<Tag> {}

export { TagsRepository };
