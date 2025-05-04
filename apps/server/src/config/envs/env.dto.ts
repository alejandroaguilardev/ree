import { IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class EnvVars {
  @Type(() => Number)
  @IsNumber()
  PORT: number;

  @IsString()
  DATABASE_MONGO_URL: string;

  @IsString()
  EXTERNAL_API_REE: string;
}
