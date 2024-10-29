/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { User, UserSchema } from 'src/schemas/User.Schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [UserService],
  exports: [UserService],  // Make sure to export UserService
})
export class UserModule { }
