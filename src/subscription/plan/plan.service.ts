import { Injectable } from "@nestjs/common";
import { PlanRepository } from "./plan.repository";
import { Plan } from "./plan.entity";

@Injectable()
export class PlanService {
    constructor(private planRepository: PlanRepository) {}

    create(plan: Plan) {
        return this.planRepository.create(plan);
    }
    
    update(plan: Plan) {
        return this.planRepository.update(plan);
    }
}