import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BalanceService } from './services/balance.service';
import { Balance } from './infraestructura/entities/balance.entity';

@Resolver(() => Balance)
export class BalanceResolver {
  constructor(private readonly balanceService: BalanceService) { }

}
