import User from "../entities/User";
import * as bcrypt from "bcrypt";

export default class SecurityService {
  public async cryptUserPassword(plain: string): Promise<string> {
    return await bcrypt.hash(plain, 8);
  }

  public async isUserPasswordValid(user: User, plain: string) {
    return await bcrypt.compare(plain, user.password);
  }
}