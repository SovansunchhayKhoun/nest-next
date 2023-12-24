import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Auth middleware...');
    next();
  }
}
