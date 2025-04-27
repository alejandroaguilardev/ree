import { Module } from '@nestjs/common';
import { BalanceModule } from './balance/balance.module';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { GlobalPipes } from './config/validation-pipes';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from './config/envs/env.validation';
import { MongooseModule } from '@nestjs/mongoose';
import { GlobalExceptionFilter } from './config/global-error';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
    }),
    MongooseModule.forRoot(process.env.DATABASE_MONGO_URL!),

    BalanceModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useValue: GlobalPipes.getGlobal(),
    },
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule { }
