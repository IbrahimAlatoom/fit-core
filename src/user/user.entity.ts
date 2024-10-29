import { Entity } from 'src/lib/entity';

export class User extends Entity {
  email: string;
  password: string;
  accountsIds: string;
}
