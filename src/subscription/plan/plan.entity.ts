import { Entity, EntityProps } from "src/lib/entity";

export type PlanProps = {
    code: string;
    name: string;
    price: number;
    currency: string;
} & EntityProps;

export class Plan extends Entity {
    code: string;
    name: string;
    price: number;
    currency: string;

    constructor(props: PlanProps) {
        super();
        Object.assign(this, props);
    }

    static create(props: PlanProps) {
        const plan = new Plan({ ...props });
        return plan;
    }
}