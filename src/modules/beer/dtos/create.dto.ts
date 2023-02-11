import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { RequestSchema } from '#/api/request-schema.js';

export class BeerCreateDto {
  @IsNumber()
  abv!: number;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @ArrayMaxSize(2)
  @ArrayMinSize(2)
  @IsArray()
  @IsNumber({}, { each: true })
  @IsOptional()
  coordinates?: number[];

  @IsString()
  @IsOptional()
  country?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  ibu!: number;

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

export const BeerCreateSchema = new RequestSchema(BeerCreateDto);
