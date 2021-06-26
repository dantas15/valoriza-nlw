import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({
      email,
    });

    // Verify if email exists
    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    // Verify if password is correct
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect!");
    }

    // Generate new token
    const token = sign(
      {
        email: user.email,
      },
      "54e4f9e0f4e06d57a874645cf4e8d955",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}
export { AuthenticateUserService };
