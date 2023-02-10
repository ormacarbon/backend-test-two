import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { RequestSchema } from '#/api/request-schema.js';

export class BeerUpdateDto {
  @IsNumber()
  @IsOptional()
  abv?: number;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  category?: string;

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

export const BeerUpdateSchema = new RequestSchema(BeerUpdateDto);
