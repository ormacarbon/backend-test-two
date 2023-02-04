import express from 'express'
import cors from 'cors'
import config from 'config'
import db from './config/db'
import router from './routes'


const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', router)


app.listen(config.get('PORT'), async()=>{
    await db()
    console.log(`Server running on Port ${config.get('PORT')}`)
})