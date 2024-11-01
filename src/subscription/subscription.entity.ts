import { Entity, EntityProps } from "src/lib/entity";

export type SubscriptionProps = {
    accountId:string,
    planId: string;
    packagesId: string[];
    startDate: Date;
    endDate: Date;
} & EntityProps;

export class Subscription extends Entity {

    accountId: string;
    planId: string;
    packagesId: string[];
    startDate: Date;
    endDate: Date;

    constructor(props: SubscriptionProps) {
        super();
        Object.assign(this, props);
    }

    static create(props: SubscriptionProps) {
        const subscription = new Subscription({ ...props });
        return subscription;
    }
}