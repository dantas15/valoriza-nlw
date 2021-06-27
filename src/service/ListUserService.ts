import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { classToPlain } from "class-transformer";

class ListUserService {
  async execute() {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = await usersRepository.find();

    return classToPlain(users);
  }
}

export { ListUserService };
