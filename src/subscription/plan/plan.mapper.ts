import { Plan } from "./plan.entity";
import { PlanModel } from "./plan.model";

export class PlanMapper {
    static toDto(plan: Plan) {
        return {
            id: plan.id,
            code: plan.code,
            name: plan.name,
            price: plan.price,
            currency: plan.currency
        }
    }

    static toEntity(PlanModel: PlanModel) {
        const plan = new Plan({
            id: PlanModel.id,
            code: PlanModel.code,
            name: PlanModel.name,
            price: PlanModel.price,
            currency: PlanModel.currency
        })
        return plan;
    }

    static toPersistence(plan: Plan) {
        return {
            id: plan.id,
            code: plan.code,
            name: plan.name,
            price: plan.price,
            currency: plan.currency
        }
    }
}