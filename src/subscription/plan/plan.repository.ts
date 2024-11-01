import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PlanModel } from "./plan.model";
import { Model } from "mongoose";
import { Plan } from "./plan.entity";
import { PlanMapper } from "./plan.mapper";

@Injectable()
export class PlanRepository {
    constructor(@InjectModel(PlanModel.name) private planModel: Model<PlanModel>) {}

    async create(plan: Plan) {
        const raw = PlanMapper.toPersistence(plan);
        await this.planModel.create(raw);
        return plan;
    }

    async update(plan: Plan) {
        const raw = PlanMapper.toPersistence(plan);
        return await this.planModel.updateOne({ id: plan.id }, raw);
    }
}