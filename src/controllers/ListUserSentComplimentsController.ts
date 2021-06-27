import { Request, Response } from "express";
import { ListUserSenderComplimentsService } from "../service/ListUserSentComplimentsService";

class ListUserSentComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserSentComplimentsService =
      new ListUserSenderComplimentsService();

    const compliments = await listUserSentComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserSentComplimentsController };
