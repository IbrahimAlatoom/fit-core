import { Entity, EntityProps } from 'src/lib/entity';

export type AccountProps = {
  userId: string;
  role?: string;
  organizationId?: string;
} & EntityProps;

export class Account extends Entity {
  userId: string;
  role?: string;
  organizationId?: string;

  setUserId(userId: string) {
    this.userId = userId;
  }

  setOrganizationId(organizationId: string) {
    this.organizationId = organizationId;
  }

  constructor(props: AccountProps) {
    super();
    Object.assign(this, props);
  }

  static create(props: AccountProps) {
    const account = new Account({ ...props });
    return account;
  }
}
