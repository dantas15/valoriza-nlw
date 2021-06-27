import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receive token
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    // Validate token
    const { sub } = verify(
      token,
      "54e4f9e0f4e06d57a874645cf4e8d955"
    ) as IPayload;

    // Get user information
    request.user_id = sub;
    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
