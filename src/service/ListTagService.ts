import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepository";
import { classToPlain } from "class-transformer";

class ListTagService {
  async execute() {
    const tagsRepository = getCustomRepository(TagsRepository);

    const tags = await tagsRepository.find();

    return classToPlain(tags);
  }
}

export { ListTagService };
