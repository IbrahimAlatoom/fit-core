import { Organization } from "./organization.entity";
import { OrganizationModel } from "./organizatoin.model";

export class OrganizationMapper{
    static toDto(organization: Organization){
        return{
            id: organization.id,
            name: organization.name,
            phone: organization.phone,
            address: organization.address,
            accountId: organization.accountId,
        }
    }

    static toEntity(organizationModel: OrganizationModel){
        const organization = Organization.create({
            id: organizationModel.id,
            accountId: organizationModel.accountId,
            name: organizationModel.name,
            phone: organizationModel.phone,
        });
        return organization;
    }

    static toPersistence(organization: Organization){
        return{
            id: organization.id,
            accountId: organization.accountId,
            name: organization.name,
            phone: organization.phone
        }
    }
}