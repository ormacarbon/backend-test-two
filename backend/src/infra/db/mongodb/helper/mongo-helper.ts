import { MongoClient, Db, Collection } from 'mongodb'

export const mongoHelper = {
	client: null as MongoClient,
	db: null as Db,
	uri: null as string,
	async connect (uri: string): Promise<void> {
		this.uri = uri
		this.client = await MongoClient.connect(uri, {
			useUnifiedTopology: true,
			useNewUrlParser: true
		})
		this.db = this.client.db()
	},

	async disconnect () {
		await this.client.close()
		this.client = null
		this.db = null
	},

	async getCollection (name: string): Promise<Collection> {
		if (!this.client?.isConnected()) {
			await this.connect(this.uri)
		}
		return this.db.collection(name)
	},

	map: (data: any): any => {
		const { _id, ...collectionWithoutId } = data
		return Object.assign({}, collectionWithoutId, { id: _id })
	},

	mapCollection: (collection: any[]): any[] => {
		return collection.map(i => mongoHelper.map(i))
	}
}
