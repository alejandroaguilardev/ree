import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { EnergyBalanceExternalEntity } from '../entities/external.entity';
import { EnergyBalanceExternal } from '../../domain/response/external.balance';

export type EnergyBalanceDocument = EnergyBalanceModel & Document;

@Schema()
export class EnergyBalanceModel {
  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  lastUpdate: Date;

  @Prop({ type: EnergyBalanceExternalEntity, required: true })
  data: EnergyBalanceExternal;
}

export const EnergyBalanceSchema =
  SchemaFactory.createForClass(EnergyBalanceModel);
