import { ObjectId } from 'mongodb'
import { AddBeerRepository } from '../../../../data/protocols/db/add-beer-repository'
import { DeleteBeerByIdRepository } from '../../../../data/protocols/db/delete-beer-by-id-repository'
import { LoadBeerByIdRepository } from '../../../../data/protocols/db/load-beer-by-id-repository'
import { LoadBeersRepository } from '../../../../data/protocols/db/load-beers-repository'
import { UpdateBeerByIdRepository } from '../../../../data/protocols/db/update-beer-by-id-repository'
import { BeerModel } from '../../../../domain/model/beer'
import { AddBeerParams } from '../../../../domain/use-cases/add-beer'
import { UpdateBeerParams } from '../../../../domain/use-cases/update-beer-by-id'
import { mongoHelper } from '../helper/mongo-helper'

export class BeerMongoRepository implements AddBeerRepository, LoadBeersRepository, LoadBeerByIdRepository, UpdateBeerByIdRepository, DeleteBeerByIdRepository {
	async add (beerData: AddBeerParams): Promise<BeerModel> {
		const beerCollection = await mongoHelper.getCollection('beer')
		const beer = await beerCollection.insertOne(beerData)
		return beer && mongoHelper.map(beer)
	}

	async loadAll (): Promise<BeerModel[]> {
		const beerCollection = await mongoHelper.getCollection('beer')
		const beers = await beerCollection.find().toArray()
		return mongoHelper.mapCollection(beers)
	}

	async loadById (id: string): Promise<BeerModel> {
		const beerCollection = await mongoHelper.getCollection('beer')
		const beer = await beerCollection.findOne({ _id: new ObjectId(id) })
		return beer && mongoHelper.map(beer)
	}

	async update (id: string, beerData: UpdateBeerParams): Promise<void> {
		const beerCollection = await mongoHelper.getCollection('beer')
		await beerCollection.updateOne({ _id: new ObjectId(id) }, { beerData })
	}

	async deleteById (id: string): Promise<void> {
		const beerCollection = await mongoHelper.getCollection('beer')
		await beerCollection.deleteOne({ _id: new ObjectId(id) })
	}
}
