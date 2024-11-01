import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidPasswordException extends HttpException {
  constructor() {
    super('Invalid Password', HttpStatus.BAD_REQUEST);
  }
}
