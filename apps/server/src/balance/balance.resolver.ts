import { Resolver, Query, Args } from '@nestjs/graphql';
import { BalanceService } from './services/balance.service';
import { Balance } from './infraestructura/entities/balance.entity';
import { GetBalanceDto } from './infraestructura/dto/get-balance.dto';

@Resolver(() => Balance)
export class BalanceResolver {
  constructor(private readonly balanceService: BalanceService) {}

  @Query(() => Balance, { name: 'getEnergyBalanceByDateRange' })
  async getBalanceByDateRange(@Args() balanceDto: GetBalanceDto) {
    return this.balanceService.findByDateRange(
      balanceDto.startDate,
      balanceDto.endDate,
    );
  }
}
