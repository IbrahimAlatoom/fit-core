import { Entity, EntityProps } from 'src/lib/entity';

export type UserProps = {
  email: string;
  password: string;
  accountsIds: string[];
} & EntityProps;

export class User extends Entity {
  email: string;
  password: string;
  accountsIds: string[];

  private constructor(props: UserProps) {
    super();
    Object.assign(this, props);
  }

  static create(props: UserProps) {
    const user = new User({ ...props });
    return user;
  }
}
