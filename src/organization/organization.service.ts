import { Injectable } from '@nestjs/common';
import { OrganizationRepository } from './organization.repository';
import { Organization } from './organization.entity';

@Injectable()
export class OrganizationService {

    constructor(private organizationRepository: OrganizationRepository) {}

    async create(organizations: Organization) {
        return await this.organizationRepository.createOrganization(organizations);
    }

    async update(organizations: Organization) {
        return await this.organizationRepository.updateOrganization(organizations);
    }

}
