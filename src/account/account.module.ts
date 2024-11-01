import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModel, AccountSchema } from './account.model';
import { AccountRepository } from './account.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AccountModel.name, schema: AccountSchema },
    ]),
  ],
  controllers: [],
  providers: [AccountService, AccountRepository],
  exports: [AccountRepository, AccountService],
})
export class AccountModule {}
