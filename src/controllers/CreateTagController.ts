import { Request, Response } from "express";
import { CreateTagService } from "../service/CreateTagService";

class CreateTagController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createTagService = new CreateTagService();

    const tag = await createTagService.execute(name);

    return response.json(tag);
  }
}

export { CreateTagController };
