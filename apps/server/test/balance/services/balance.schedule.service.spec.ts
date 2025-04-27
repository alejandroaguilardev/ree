import { Test, TestingModule } from '@nestjs/testing';
import { ExternalBalanceApi } from '../../../src/balance/infraestructura/external-balance.api';
import { MongoEnergyBalanceRepository } from '../../../src/balance/infraestructura/repositories/mongo-energy-balance.repository';
import { BalanceScheduleService } from '../../../src/balance/services/balance-schedule.service';

describe('BalanceScheduleService', () => {
    let service: BalanceScheduleService;
    let externalBalanceApiMock: Partial<ExternalBalanceApi>;
    let balanceRepositoryMock: Partial<MongoEnergyBalanceRepository>;

    beforeEach(async () => {
        externalBalanceApiMock = {
            getBalanceByDateRange: jest.fn().mockResolvedValue([]),
        };

        balanceRepositoryMock = {
            upsert: jest.fn().mockResolvedValue(true),
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                BalanceScheduleService,
                { provide: ExternalBalanceApi, useValue: externalBalanceApiMock },
                { provide: MongoEnergyBalanceRepository, useValue: balanceRepositoryMock },
            ],
        }).compile();

        service = module.get<BalanceScheduleService>(BalanceScheduleService);
    });

    it('should call repository.upsert with correct dates when fetchBalanceData is called', async () => {
        const spyUpsert = jest.spyOn(balanceRepositoryMock, 'upsert');

        const endDate = new Date();
        const startDate = new Date(endDate);
        startDate.setDate(endDate.getDate() - 1);
        await service.fetchBalanceData();

        expect(spyUpsert).toHaveBeenCalledWith(
            startDate,
            endDate,
            [] as any[],
        );
    });

    it('should call getBalanceByDateRange with the correct date strings', async () => {
        const sampleRecords = [{ foo: 'bar' }];
        (externalBalanceApiMock.getBalanceByDateRange as jest.Mock).mockResolvedValue(sampleRecords);

        const spyGetBalance = jest.spyOn(externalBalanceApiMock, 'getBalanceByDateRange');

        const endDate = new Date();
        const startDate = new Date(endDate);
        startDate.setDate(endDate.getDate() - 1);

        await service.fetchBalanceData();

        expect(spyGetBalance).toHaveBeenCalledWith(
            startDate.toISOString().slice(0, 16),
            endDate.toISOString().slice(0, 16),
        );
    });

    it('should call upsert with the returned records', async () => {
        const sampleRecords = [{ foo: 'bar' }];
        (externalBalanceApiMock.getBalanceByDateRange as jest.Mock).mockResolvedValue(sampleRecords);

        const spyUpsert = jest.spyOn(balanceRepositoryMock, 'upsert');

        const endDate = new Date();
        const startDate = new Date(endDate);
        startDate.setDate(endDate.getDate() - 1);

        await service.fetchBalanceData();

        expect(spyUpsert).toHaveBeenCalledWith(
            startDate,
            endDate,
            sampleRecords,
        );
    });

});
