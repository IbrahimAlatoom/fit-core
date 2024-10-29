/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/schemas/User.Schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ) { }

  // Find a user by their username
  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username }).exec();
  }

  // Find a user by their email
  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email }).exec();
  }

  // Find a user by their ID
  async findOneById(id: string): Promise<User | undefined> {
    return this.userModel.findById(id).exec();
  }

  // Create a new user (used in sign-up)
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  // Update user information
  async updateUser(id: string, updateData: Partial<User>): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }

  // Delete a user (optional)
  async deleteUser(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id).exec();
  }
}
