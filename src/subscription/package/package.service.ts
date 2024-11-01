import { Injectable } from "@nestjs/common";
import { PackageRepository } from "./package.repository";
import { Package } from "./package.entity";

@Injectable()
export class PackageService {
    constructor(private packageRepository: PackageRepository) {}

    create(packages: Package) {
        return this.packageRepository.create(packages);
    }

    update(packages: Package) {
        return this.packageRepository.update(packages);
    }
}