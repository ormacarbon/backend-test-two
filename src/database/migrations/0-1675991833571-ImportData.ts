import { BeerEntity } from '@entity';
import { MigrationInterface, QueryRunner } from '@types';

import db from '../data/db.json';

export class ImportData1675991833571 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    for (const beer of db as any[]) {
      const newBeer = new BeerEntity();
      const { coordinates, ...beerDTO } = beer;

      if (coordinates) {
        beerDTO.lat = coordinates[0];
        beerDTO.long = coordinates[1];
      }

      Object.assign(newBeer, beerDTO);

      await queryRunner.manager.save(BeerEntity, newBeer);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.manager.clear(BeerEntity);
    } catch (err) {
      console.error(err);
    }

    process.exit(0);
  }
}
