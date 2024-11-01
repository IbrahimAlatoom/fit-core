import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PlanModel, PlanSchema } from "./plan.model";
import { PlanRepository } from "./plan.repository";
import { PlanService } from "./plan.service";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: PlanModel.name, schema: PlanSchema }])
    ],
    providers:[PlanRepository,PlanService],
    exports:[PlanRepository,PlanService],
})
export class PlanModule {}