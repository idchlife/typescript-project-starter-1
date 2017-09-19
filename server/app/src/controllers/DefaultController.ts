import { Controller, Get } from "routing-controllers";

@Controller()
export default class DefaultController {
  @Get()
  index() {
    return "Index page";
  }
}