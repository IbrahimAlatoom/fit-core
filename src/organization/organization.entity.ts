import { Entity, EntityProps } from 'src/lib/entity';

export type OrganizationProps = {
  accountId: string;
  name: string;
  phone: string;
  address?: string;
} & EntityProps;

export class Organization extends Entity {
  accountId: string;
  name: string;
  phone: string;
  address?: string;

  constructor(props: OrganizationProps) {
    super();
    Object.assign(this, props);
  }

  static create(props: OrganizationProps) {
    const organization = new Organization({ ...props });
    return organization;
  }
}
