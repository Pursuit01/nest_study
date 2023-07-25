import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class Logging implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    console.log(123);
    next()
    // throw new Error("Method not implemented.");
  }
}