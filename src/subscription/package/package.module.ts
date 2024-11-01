import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PackageModel, PackageSchema } from "./package.model";
import { PackageService } from "./package.service";
import { PackageRepository } from "./package.repository";

@Module({
    imports:[MongooseModule.forFeature([{ name: PackageModel.name, schema:PackageSchema }])],
    providers: [PackageRepository, PackageService],
    exports: [PackageRepository, PackageService]
})
export class PackageModule {}