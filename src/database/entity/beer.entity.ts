import { Validator, ObjectIdColumn, Column, Entity } from '@utils';
import { BaseEntity, ObjectId } from '@types';

const { IsString, IsUrl, IsNumber } = Validator;

@Entity()
export class Beer extends BaseEntity {
  @ObjectIdColumn({ type: 'uuid' })
  _id: ObjectId;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  category: string;

  @Column()
  @IsString()
  description: string;

  @Column()
  @IsUrl()
  website: string;

  @Column()
  @IsNumber()
  abv: number;

  @Column()
  @IsNumber()
  ibu: number;

  @Column()
  @IsString()
  address: string;

  @Column()
  @IsString()
  city: string;

  @Column()
  @IsString()
  state: string;

  @Column()
  @IsNumber()
  lat: number;

  @Column()
  @IsNumber()
  long: number;

  @Column()
  @IsString()
  country: string;
}
