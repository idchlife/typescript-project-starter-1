import { ExpressMiddlewareInterface } from "routing-controllers";

export class UserAuthenticated implements ExpressMiddlewareInterface {
  use(request: any, response: any, next?: (err?: any) => any): any {
    
  }
}