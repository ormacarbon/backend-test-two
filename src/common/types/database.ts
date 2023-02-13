import {
  Repository as SQLRepository,
  MigrationInterface,
  MongoRepository,
  QueryRunner,
  BaseEntity,
} from 'typeorm';

export { MigrationInterface, QueryRunner };

export type Repository<E extends BaseEntity> =
  | SQLRepository<E>
  | MongoRepository<E>;

export type DataSource<E extends BaseEntity> = {
  getRepository: (entity: E) => Repository<E>;
  getMongoRepository: (entity: E) => Repository<E>;
};
