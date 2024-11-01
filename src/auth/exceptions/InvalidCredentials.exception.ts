import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidCredentialsException extends HttpException {
  constructor() {
    super('Invalid Credentials', HttpStatus.BAD_REQUEST);
  }
}
