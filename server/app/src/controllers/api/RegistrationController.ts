import UserService from "../../services/UserService";
import { Inject } from "typedi";
import { Body, JsonController, Post } from "routing-controllers";

class RegisterMasterBody {
  email: string;

  password: string;
}

JsonController("/api")
export default class RegistrationController {
  @Inject()
  private userService: UserService;
}