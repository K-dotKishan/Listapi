import express from 'express'
import dotenv from 'dotenv'

import connectDb from './config/db.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})

connectDb()