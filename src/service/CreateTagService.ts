import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepository";

class CreateTagService {
  async execute(name: string) {
    const tagsRepository = getCustomRepository(TagsRepository);

    if (!name) {
      throw new Error("Incorrect name!");
    }

    const tagAlreayExists = await tagsRepository.findOne({
      name,
    });

    if (tagAlreayExists) {
      throw new Error("Tag already exists");
    }

    const tag = tagsRepository.create({
      name,
    });

    await tagsRepository.save(tag);
    return tag;
  }
}

export { CreateTagService };
