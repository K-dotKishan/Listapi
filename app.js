import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { connectDb } from './config/db.js'

const app = express()

connectDb()
app.use(express.json())

app.get('/', (req, res) => {
    console.log(`Server running on port ${process.env.PORT}`)
    res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
