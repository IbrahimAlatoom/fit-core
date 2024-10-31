import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRepository } from './user.repository';
import { User, UserProps } from './user.entity';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async findAll() {
    return await this.userRepository.findAllUsers();
  }

  async create(user: User): Promise<User> {
    return this.userRepository.createUser(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }

  async findById(id: string): Promise<User> {
    const user = await this.userRepository.findUserById(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: string, user: User): Promise<User> {
    const updatedUser = await this.userRepository.findByIdAndUpdate(id, user);
    if (!updatedUser) throw new NotFoundException('User not found');
    return updatedUser;
  }
}
