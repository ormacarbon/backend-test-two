import express from 'express'
import cors from 'cors'
import config from 'config'
import db from './config/db'
import router from './routes'


const app = express()
const PORT = config.get('PORT') || 6000
app.use(cors())
app.use(express.json())

app.use('/api', router)


app.listen(PORT, async()=>{
    await db()
    console.log(`Server running on Port ${PORT}`)
})