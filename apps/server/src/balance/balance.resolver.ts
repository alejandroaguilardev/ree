import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BalanceService } from './balance.service';
import { Balance } from './entities/balance.entity';

@Resolver(() => Balance)
export class BalanceResolver {
  constructor(private readonly balanceService: BalanceService) { }

}
