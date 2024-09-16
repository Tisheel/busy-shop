import express from 'express'
import { Express } from 'express'
import 'dotenv/config'

const app: Express = express()

// config
const PORT: string = process.env.PORT as string
const HOST: string = process.env.HOST as string



app.listen(PORT, () => {
    console.log(`Server on http://${HOST}:${PORT}`)
})