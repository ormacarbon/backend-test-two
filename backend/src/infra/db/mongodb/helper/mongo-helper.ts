import { MongoClient, Collection } from 'mongodb'

export const mongoHelper = {
	client: null as MongoClient | null,
	uri: null as any,
	async connect (uri: string): Promise<void> {
		this.uri = uri
		this.client = await MongoClient.connect(uri)
	},

	async disconnect () {
		await this.client?.close()
		this.client = null
	},

	async getCollection (name: string): Promise<Collection> {
		if (!this.client) {
			await this.connect(this.uri)
		}

		if (!this.client) {
			throw new Error('MongoClient is not connected')
		}
		return this.client.db().collection(name)
	},

	map: (data: any): any => {
		const { _id, ...collectionWithoutId } = data
		return Object.assign({}, collectionWithoutId, { id: _id })
	},

	mapCollection: (collection: any[]): any[] => {
		return collection.map(i => mongoHelper.map(i))
	}
}
