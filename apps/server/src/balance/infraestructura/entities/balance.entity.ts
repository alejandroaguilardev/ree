import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Balance {
    @Field(() => Int, { description: 'Example field (placeholder)' })
    exampleField: number;
}
