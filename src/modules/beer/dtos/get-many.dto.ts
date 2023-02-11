import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, Matches, Min } from 'class-validator';

import { RequestSchema } from '#/api/request-schema.js';

export class BeerGetManyDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  abv?: number;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @Matches(/^\d*\.?\d*,\d*\.?\d*$/)
  @IsOptional()
  coordinates?: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  ibu?: number;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  state?: string;

  @IsString()
  @IsOptional()
  website?: string;
}

export const BeerGetManySchema = new RequestSchema(undefined, BeerGetManyDto);
