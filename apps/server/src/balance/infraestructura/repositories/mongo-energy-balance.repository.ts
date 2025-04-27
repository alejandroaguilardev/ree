import { InjectModel } from "@nestjs/mongoose";
import { EnergyBalanceRepository } from "../../domain/energy-balance.repository";
import { Model } from "mongoose";
import { EnergyBalanceDocument, EnergyBalanceModel } from "../schema/energy-balance.schema";
import { EnergyBalanceExternal } from "../../domain/response/external.balance";

export class MongoEnergyBalanceRepository implements EnergyBalanceRepository {
    constructor(
        @InjectModel(EnergyBalanceModel.name) private readonly balanceModel: Model<EnergyBalanceDocument>,
    ) { }

    async upsert(record: EnergyBalanceExternal) {
        console.log(record)
    }
}