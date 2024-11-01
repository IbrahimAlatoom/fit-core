import { Entity, EntityProps } from "src/lib/entity";

export type PackageProps = {
    code: string;
    name: string;
    price: number;
    currency: string;
    features: string[];
} & EntityProps;
export class Package extends Entity {
    code: string;
    name: string;
    price: number;
    currency: string;
    features: string[] = [];
    constructor(props: PackageProps) {
        super();
        Object.assign(this, props);
    }
    static create(props: PackageProps) {
        const packageEntity = new Package({ ...props });
        return packageEntity;
    }
}