import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
class CacheControl {
    @Field()
    cache: string;
}

@ObjectType()
class Meta {
    @Field(() => CacheControl)
    cacheControl: CacheControl;
}

@ObjectType()
class Attributes {
    @Field()
    title: string;

    @Field()
    lastUpdate: string;

    @Field()
    description: string;
}

@ObjectType()
class Value {
    @Field()
    value: number;

    @Field()
    percentage: number;

    @Field()
    datetime: string;
}

@ObjectType()
export class RenewableContent {
    @Field()
    type: string;

    @Field()
    id: string;

    @Field()
    groupId: string;

    @Field(() => Attributes)
    attributes: Attributes;

    @Field()
    total: number;

    @Field()
    totalPercentage: number;
}

@ObjectType()
export class NonRenewableContent {
    @Field()
    type: string;

    @Field()
    id: string;

    @Field()
    groupId: string;

    @Field(() => Attributes)
    attributes: Attributes;

    @Field()
    total: number;

    @Field()
    totalPercentage: number;
}

@ObjectType()
export class StorageContent {
    @Field()
    type: string;

    @Field()
    id: string;

    @Field()
    groupId: string;

    @Field(() => Attributes)
    attributes: Attributes;

    @Field()
    total: number;

    @Field()
    totalPercentage: number;
}

@ObjectType()
export class DemandContent {
    @Field()
    type: string;

    @Field()
    id: string;

    @Field()
    groupId: string;

    @Field(() => Attributes)
    attributes: Attributes;

    @Field()
    total: number;

    @Field()
    totalPercentage: number;
}

@ObjectType()
export class Included {
    @Field()
    type: 'Renovable' | 'No-Renovable' | 'Almacenamiento' | 'Demanda';

    @Field()
    id: string;

    @Field(() => Attributes)
    attributes: Attributes;

    @Field(() => [RenewableContent], { nullable: true })
    content: (RenewableContent | NonRenewableContent | StorageContent | DemandContent)[];
}


@ObjectType()
class Data {
    @Field()
    type: string;

    @Field()
    id: string;

    @Field(() => Attributes)
    attributes: Attributes;

    @Field(() => Meta)
    meta: Meta;
}

@ObjectType()
export class EnergyBalanceExternalEntity {
    @Field(() => [Data])
    data: Data;

    @Field(() => [Included])
    included: Included[];
}


