import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { ErrorDomain } from "../../common/domain/error-domain";
import { EnergyBalanceExternal } from "../domain/response/external.balance";
import { firstValueFrom } from "rxjs";


@Injectable()
export class ExternalBalanceApi {
    private readonly logger = new Logger(ExternalBalanceApi.name);
    private readonly apiUrl = process.env.EXTENAL_API_REE;

    constructor(
        private readonly httpService: HttpService,
    ) { }

    async getBalanceByDateRange(startDate: string, endDate: string, timeTrunc: string = 'day'): Promise<EnergyBalanceExternal> {
        const queryParams = new URLSearchParams({
            start_date: startDate,
            end_date: endDate,
            time_trunc: timeTrunc,
        });
        const url = `${this.apiUrl}/es/datos/balance/balance-electrico?${queryParams.toString()}`;
        try {
            const response = await firstValueFrom(this.httpService.get(url));
            return response.data;
        } catch (error) {
            this.logger.error('Error fetching REE data', error);
            throw new ErrorDomain(`Failed to fetch`, 400, error);
        }
    }
}