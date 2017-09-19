import { JWT_SECRET } from "../security/security-tools";
import * as expressJWT from "express-jwt";

export default expressJWT({
  secret: JWT_SECRET
});