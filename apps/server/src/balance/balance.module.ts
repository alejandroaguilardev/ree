import { Module } from '@nestjs/common';
import { BalanceService } from './services/balance.service';
import { BalanceResolver } from './balance.resolver';
import { ExternalBalanceApi } from './infraestructura/external-balance.api';
import { MongoEnergyBalanceRepository } from './infraestructura/repositories/mongo-energy-balance.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { EnergyBalanceModel, EnergyBalanceSchema } from './infraestructura/schema/energy-balance.schema';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    HttpModule,
    ScheduleModule.forRoot(),
    MongooseModule.forFeature([{ name: EnergyBalanceModel.name, schema: EnergyBalanceSchema }]),
  ],
  providers: [BalanceResolver, BalanceService, ExternalBalanceApi, MongoEnergyBalanceRepository],
})
export class BalanceModule { }
