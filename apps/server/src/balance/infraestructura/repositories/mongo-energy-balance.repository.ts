import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { EnergyBalanceRepository } from "../../domain/energy-balance.repository";
import { Model } from "mongoose";
import { EnergyBalanceModel } from "../schema/energy-balance.schema";
import { EnergyBalanceExternal } from "../../domain/response/external.balance";

@Injectable()
export class MongoEnergyBalanceRepository implements EnergyBalanceRepository {
    constructor(
        @InjectModel(EnergyBalanceModel.name)
        private readonly energyBalanceModel: Model<EnergyBalanceModel>
    ) { }

    async upsert(startDate: Date, endDate: Date, record: EnergyBalanceExternal) {
        const startOfDay = new Date(startDate.setHours(0, 0, 0, 0));
        const endOfDay = new Date(endDate.setHours(23, 59, 59, 999));

        await this.energyBalanceModel.updateOne(
            {
                startDate: startOfDay,
                endDate: endOfDay,
            },
            {
                $set: {
                    lastUpdate: new Date(),
                    data: { ...record }
                },
                $setOnInsert: {
                    createdAt: new Date(),
                },
            },
            { upsert: true }
        );
    }

    async findByStartAndEndDate<EnergyBalanceModel>(startDate: Date, endDate: Date): Promise<EnergyBalanceModel> {
        const startOfDay = new Date(startDate.setHours(0, 0, 0, 0));
        const endOfDay = new Date(endDate.setHours(23, 59, 59, 999));
        return this.energyBalanceModel.findOne({
            startDate: startOfDay,
            endDate: endOfDay,
        }).exec() as EnergyBalanceModel;


    }
}

