import 'module-alias/register'
import { mongoHelper } from '../infra/db/mongodb/helper/mongo-helper'
import * as dotenv from 'dotenv'
dotenv.config()

mongoHelper.connect(`${process.env.MONGO_URL as string}`)
	.then(async () => {
		const app = (await import('./config/app')).default
		app.listen(process.env.PORT, () => {
			console.log('Server Running !')
		})
	}).catch(err => {
		console.log(err)
	})
