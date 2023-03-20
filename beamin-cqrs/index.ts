import cors from 'cors'
import dotenv from 'dotenv'
import express, { Application } from 'express'

dotenv.config()
// couchbase index.ts
// mysql index.ts
// route

// express config
const app: Application = express()
const port: number = Number(process.env.PORT) || 3000
const base: string = process.env.base_url ?? '/api/v1'

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routing

// Start Server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`)
})

process
  .on('unhandledRejection', (err) => {
    console.error(err)
  })
  .on('uncaughtException', (err) => {
    console.error(err)
  })
