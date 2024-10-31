import { v4 as uuidv4 } from 'uuid';

export class Entity {
  public id: string = uuidv4();
}

export type EntityProps = {
  id?: string;
};
