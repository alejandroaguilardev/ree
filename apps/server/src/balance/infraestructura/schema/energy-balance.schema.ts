import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Value {
    @Prop({ required: true })
    value: number;

    @Prop({ required: true })
    percentage: number;

    @Prop({ required: true })
    datetime: Date;
}

@Schema()
export class Renewable {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop()
    color: string;

    @Prop()
    values: Value[];

    @Prop({ required: true })
    total: number;

    @Prop({ required: true })
    totalPercentage: number;
}

@Schema()
export class NonRenewable {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop()
    color: string;

    @Prop()
    values: Value[];

    @Prop({ required: true })
    total: number;

    @Prop({ required: true })
    totalPercentage: number;
}

@Schema()
export class Storage {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop()
    values: Value[];

    @Prop({ required: true })
    total: number;

    @Prop({ required: true })
    totalPercentage: number;
}

@Schema()
export class Demand {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop()
    values: Value[];

    @Prop({ required: true })
    total: number;

    @Prop({ required: true })
    totalPercentage: number;
}



@Schema()
export class EnergyBalanceApi {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    lastUpdate: Date;

    @Prop()
    description: string;

    @Prop({ type: [Renewable] })
    renewable: Renewable[];

    @Prop({ type: [NonRenewable] })
    nonRenewable: NonRenewable[];

    @Prop({ type: [Storage] })
    storage: Storage[];

    @Prop({ type: [Demand] })
    demand: Demand[];
}

export type EnergyBalanceDocument = EnergyBalanceModel & Document;

@Schema()
export class EnergyBalanceModel {
    @Prop()
    startDate: Date;

    @Prop()
    endDate: Date;

    @Prop()
    lastUpdate: Date;

    @Prop()
    data: EnergyBalanceApi;
}

export const EnergyBalanceSchema = SchemaFactory.createForClass(EnergyBalanceModel);