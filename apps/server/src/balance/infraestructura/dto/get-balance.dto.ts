import { Field, ArgsType } from '@nestjs/graphql';
import { Transform } from 'class-transformer';

@ArgsType()
export class GetBalanceDto {
  @Field(() => String)
  @Transform(({ value }: { value: string }) => new Date(value))
  startDate: Date;

  @Field(() => String)
  @Transform(({ value }: { value: string }) => new Date(value))
  endDate: Date;
}
