import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log("test middleware")
    const {authorization}=req.headers
if(!authorization){
  throw new HttpException("No Authorization Token",HttpStatus.FORBIDDEN)

}else if(authorization==="Bearer a"){
next()
}else{

  throw new HttpException("Invalid Token",HttpStatus.FORBIDDEN)

}
  }
}
