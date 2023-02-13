import { BeerRepository } from '@modules/Beer/beer.repository';

import { BaseEntity, ObjectId } from '@types';
import { BaseService } from '@interfaces';

export class BeerService extends BaseService<typeof BeerRepository> {
  async list(limit: number, offset: number) {
    const items = await this.repository.find({ take: limit, skip: offset });

    const total = await this.repository.count();
    const hasMore = total > offset + limit;
    const nextPage = hasMore ? offset + limit : null;
    const prevPage = offset > 0 ? offset - limit : null;
    const currentPage = Math.ceil(offset / limit) + 1;
    const totalPages = Math.ceil(total / limit);

    return {
      items,
      _opt: { total, hasMore, nextPage, prevPage, currentPage, totalPages },
    };
  }

  async findById(_id: string) {
    return await this.repository.findOneBy({ _id: new ObjectId(_id) as any });
  }

  async create(beer: any) {
    return await this.repository.save(beer);
  }

  async update(id: string, beer: BaseEntity) {
    await this.repository.update({ _id: new ObjectId(id) as any }, beer);

    return await this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ _id: new ObjectId(id) as any });
  }
}
