import { Module } from '@nestjs/common';
import { BalanceService } from './services/balance.service';
import { BalanceResolver } from './balance.resolver';
import { ExternalBalanceApi } from './infraestructura/external-balance.api';
import { MongoEnergyBalanceRepository } from './infraestructura/repositories/mongo-energy-balance.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { EnergyBalanceModel, EnergyBalanceSchema } from './infraestructura/schema/energy-balance.schema';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { BalanceScheduleService } from './services/balance-schedule.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    HttpModule,
    ScheduleModule.forRoot(),
    MongooseModule.forFeature([{ name: EnergyBalanceModel.name, schema: EnergyBalanceSchema }]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  providers: [
    BalanceResolver,
    BalanceService,
    ExternalBalanceApi,
    MongoEnergyBalanceRepository,
    BalanceScheduleService,
    {
      provide: APP_PIPE,
      useValue: [],
    },
  ],
})
export class BalanceModule { }
