/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesModule } from './employees/employees.module';
import { WorkUnitsModule } from './work-units/work-units.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/opticore'),
    EmployeesModule,
    WorkUnitsModule,
    AuthModule,
    UserModule,
    AccountModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
