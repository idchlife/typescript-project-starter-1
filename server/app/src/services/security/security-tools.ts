import User from "../../entities/User";
import SecurityService from "../SecurityService";
import UserService from "../UserService";
import { Container } from "typedi";

export type ROLES = "MASTER" | "ADMIN";
export const ROLE_MASTER: ROLES = "MASTER";
export const ROLE_ADMIN: ROLES = "ADMIN";

export const JWT_SECRET = "besties are for someting33192";

export async function PassportLocalStrategyFunction(
  email: string,
  password: string,
  done: (error: any, user?: object | boolean, options?: { message: string }) => void
) {
  const userService = Container.get(UserService);

  try {
    const user = await userService.findUserByEmail(email);

    if (!user) {
      return done(undefined, false, { message: "Invalid username" });
    }

    const securityService = Container.get(SecurityService);

    const passwordValid = await securityService.isUserPasswordValid(user, password);

    if (!passwordValid) {
      return done(undefined, false, { message: "Invalid password" });
    }

    return done(undefined, user);
  } catch (error) {
    return done(error);
  }
}