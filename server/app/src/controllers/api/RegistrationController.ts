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

  @Post()
  public async registerMaster(@Body({ validate: true, required: true }) body: RegisterMasterBody) {
    await this.userService.registerMaster(body.email, body.password);

    
  }

  public async updateMaster(@Body() body: keyof Master) {
    // await this.userService.updateMaster()
  }
}