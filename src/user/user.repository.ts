import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { UserModel } from './user.model';
import { Model } from 'mongoose';
import { UserMapper } from './user.mapper';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(UserModel.name) private userModel: Model<UserModel>,
  ) {}

  async createUser(user: User) {
    const raw = UserMapper.toPersistence(user);
    await this.userModel.create(raw);
    return user;
  }

  async findByIdAndUpdate(id: string, user: User) {
    const raw = UserMapper.toPersistence(user);
    await this.userModel.findByIdAndUpdate(id, raw);
    return user;
  }

  async findUserById(id: string) {
    const model = await this.userModel.findOne({ id: id });
    if (!model) return null;
    return UserMapper.toEntity(model);
  }

  async findByEmail(email: string) {
    const model = await this.userModel.findOne({ email: email });
    if (!model) return null;
    return UserMapper.toEntity(model);
  }

  async findAllUsers() {
    const models = await this.userModel.find();
    return models.map(UserMapper.toEntity);
  }
}
