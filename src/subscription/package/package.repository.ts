import { Injectable } from "@nestjs/common";
import { PackageModel } from "./package.model";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Package } from "./package.entity";
import { PackageMapper } from "./package.mapper";

@Injectable()
export class PackageRepository {
    constructor(@InjectModel(PackageModel.name) private packageModel: Model<PackageModel>){}

    async create(packages: Package) {
        const raw = PackageMapper.toPersistence(packages);
        await this.packageModel.create(raw);
        return packages;
    }

    async update(packages: Package) {
        const raw = PackageMapper.toPersistence(packages);
        return await this.packageModel.updateOne({ id: packages.id }, raw);
    }
}