import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganizationModel, OrganizationSchema } from './organizatoin.model';
import { OrganizationService } from './organization.service';
import { OrganizationRepository } from './organization.repository';

@Module({
    imports:[
        MongooseModule.forFeature([{name: OrganizationModel.name, schema: OrganizationSchema}])
    ],
    providers:[OrganizationService, OrganizationRepository],
    exports:[OrganizationService],
})

export class OrganizationModule {}
