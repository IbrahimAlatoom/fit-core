import { User } from './user.entity';
import { UserModel } from './user.model';

export class UserMapper {
  static toDto(user: User) {
    return {
      id: user.id,
      email: user.email,
      accountsIds: user.accountsIds,
    };
  }

  static toEntity(userModel: UserModel) {
    const user = User.create({
      id: userModel.id,
      email: userModel.email,
      password: userModel.password,
      accountsIds: userModel.accountsIds,
    });
    return user;
  }

  static toPersistence(user: User) {
    return {
      id: user.id,
      email: user.email,
      password: user.password,
      accountsIds: user.accountsIds,
    };
  }
}
