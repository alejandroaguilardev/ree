import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
class Value {
    @Field(() => String)
    value: string;

    @Field(() => String)
    percentage: string;

    @Field(() => String)
    datetime: string;
}

@ObjectType()
class CacheControl {
    @Field(() => String, { nullable: true })
    cache: string;

    @Field(() => String, { nullable: true })
    expireAt: String;
}

@ObjectType()
class ContentAttributes {
    @Field(() => String)
    title: string;

    @Field(() => String, { nullable: true })
    description: string | null;

    @Field(() => String)
    color: string;

    @Field(() => String, { nullable: true })
    icon: string | null;

    @Field(() => String, { nullable: true })
    type: string | null;

    @Field(() => String, { nullable: true })
    magnitude: string | null;

    @Field(() => Boolean)
    composite: boolean;


    @Field(() => String, { nullable: true })
    lastUpdate: String;

    @Field(() => [Value])
    values: Value[];

    @Field(() => String)
    total: String;

    @Field(() => String, { nullable: true })
    totalPercentage: String;
}

@ObjectType()
class Content {
    @Field(() => String)
    type: string;

    @Field(() => String)
    id: string;

    @Field(() => String)
    groupId: string;

    @Field(() => ContentAttributes)
    attributes: ContentAttributes;
}

@ObjectType()
class IncludedAttributes {
    @Field(() => String)
    title: string;

    @Field(() => String, { nullable: true })
    lastUpdate: String;

    @Field(() => String, { nullable: true })
    description: string | null;

    @Field(() => String, { nullable: true })
    magnitude: string | null;

    @Field(() => [Content])
    content: Content[];
}

@ObjectType()
class Included {
    @Field(() => String)
    type: string;

    @Field(() => String)
    id: string;

    @Field(() => IncludedAttributes)
    attributes: IncludedAttributes;
}

@ObjectType()
class Meta {
    @Field(() => CacheControl, { nullable: true })
    cacheControl: CacheControl;
}

@ObjectType()
class DataAttributes {
    @Field(() => String)
    title: string;

    @Field(() => String, { nullable: true })
    lastUpdate: String;

    @Field(() => String)
    description: string;
}

@ObjectType()
class Data {
    @Field(() => String)
    type: string;

    @Field(() => String)
    id: string;

    @Field(() => DataAttributes)
    attributes: DataAttributes;

    @Field(() => Meta)
    meta: Meta;
}


@ObjectType()
export class EnergyBalanceExternalEntity {
    @Field(() => Data)
    data: Data;

    @Field(() => [Included])
    included: Included[];
}