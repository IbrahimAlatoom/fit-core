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
    const user = new User();
    user.id = userModel.id;
    user.email = userModel.email;
    user.password = userModel.password;
    user.accountsIds = userModel.accountsIds;
    return user;
  }

  static toModel(user: User) {
    const userModel = new UserModel();
    userModel.id = user.id;
    userModel.email = user.email;
    userModel.password = user.password;
    userModel.accountsIds = user.accountsIds;
    return userModel;
  }
}
