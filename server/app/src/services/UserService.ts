import SecurityService from "./SecurityService";
import { Inject } from "typedi";
import User from "../entities/User";
import { OrmManager } from "typeorm-typedi-extensions";
import { EntityManager } from "typeorm";

export default class UserService {
  @OrmManager()
  private entityManager: EntityManager;

  @Inject()
  private securityService: SecurityService;

  public async findUserByEmail(email: string): Promise<User | undefined> {
    return await this.entityManager.findOne(User, {
      email
    });
  }

  private assignIfNotUndefined<T>(obj: T, field: keyof T, mergeFrom: { [key in keyof T]: any }) {
    const value = mergeFrom[field];

    if (!!value) {
      obj[field] = value;
    }
  }
}