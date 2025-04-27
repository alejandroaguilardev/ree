import { Test, TestingModule } from '@nestjs/testing';
import { ExternalBalanceApi } from '../../../src/balance/infraestructura/external-balance.api';
import { HttpModule } from '@nestjs/axios';
import { ExternalBalanceMother } from '../domain/external-balance.mother';


describe('ProductsQueueService', () => {
    let externalBalanceApi: ExternalBalanceApi;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [HttpModule],
            providers: [ExternalBalanceApi],
        }).compile();

        externalBalanceApi = moduleFixture.get<ExternalBalanceApi>(ExternalBalanceApi);
    });

    it('should_successfully ', async () => {
        const { startDate, endDate } = ExternalBalanceMother.generateQueryString();
        const getBalanceByDateRangeSpy = jest.spyOn(externalBalanceApi, 'getBalanceByDateRange');
        const records = await externalBalanceApi.getBalanceByDateRange(startDate, endDate);

        expect(getBalanceByDateRangeSpy).toHaveBeenCalledTimes(1);
        expect(records.data.id).toBeTruthy()
    });
});
