import { ObjectType, Field } from '@nestjs/graphql';
import { EnergyBalanceExternal } from '../../domain/response/external.balance';
import { EnergyBalanceExternalEntity } from './external.entity';

@ObjectType()
export class Balance {
  @Field(() => Date)
  startDate: Date;

  @Field(() => Date)
  endDate: Date;

  @Field(() => Date)
  lastUpdate: Date;

  @Field(() => EnergyBalanceExternalEntity)
  data: EnergyBalanceExternal;
}
