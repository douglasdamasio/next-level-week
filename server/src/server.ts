import express from "express"
import cors from 'cors'
import routes from "./routes"
import path from 'path'
import { errors } from "celebrate";

const PORT = 3334
const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors())

app.listen(PORT, () => {
  console.log(`Server is Running in port ${PORT} ...`)
})