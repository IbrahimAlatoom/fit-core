import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { OrganizationModel } from "./organizatoin.model";
import { Model } from "mongoose";
import { Organization } from "./organization.entity";
import { OrganizationMapper } from "./organization.mapper";

@Injectable()
export class OrganizationRepository{
    constructor(@InjectModel(OrganizationModel.name) private organizationModel: Model<OrganizationModel>){}

    async createOrganization(organizations: Organization){
        const raw = OrganizationMapper.toPersistence(organizations);
        await this.organizationModel.create(raw);
        return organizations;
    }

    updateOrganization(organizations: Organization){
        const raw = OrganizationMapper.toPersistence(organizations);
        return this.organizationModel.updateOne({id: organizations.id}, raw);
    }

}