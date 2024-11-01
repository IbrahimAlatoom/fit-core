import { features } from "process";
import { Package } from "./package.entity";
import { PackageModel } from "./package.model";

export class PackageMapper {
    static toDto(packages: Package) {
        return {
            id: packages.id,
            code: packages.code,
            name: packages.name,
            price: packages.price,
            currency: packages.currency,
            features: packages.features
        }
    }

    static toEntity(PackageModel: PackageModel) {
        const packages = new Package({
            id: PackageModel.id,
            code: PackageModel.code,
            name: PackageModel.name,
            price: PackageModel.price,
            currency: PackageModel.currency,
            features: PackageModel.features
        })
        return packages;
    }

    static toPersistence(packages: Package) {
        return {
            id: packages.id,
            code: packages.code,
            name: packages.name,
            price: packages.price,
            currency: packages.currency,
            features: packages.features
        }
    }
}