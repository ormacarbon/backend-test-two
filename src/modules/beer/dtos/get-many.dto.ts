import { IsNumberString, IsOptional, IsString, Matches, Min } from 'class-validator';

import { RequestSchema } from '#/api/request-schema.js';

export class BeerGetManyDto {
  @IsNumberString()
  @Min(1)
  @IsOptional()
  page?: number;

  @IsNumberString()
  @IsOptional()
  abv?: number;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @Matches(/^\d*\.?\d*,\d*\.?\d*$/)
  @IsOptional()
  coordinates?: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumberString()
  @IsOptional()
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
