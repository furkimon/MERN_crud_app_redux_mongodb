import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js' // posts import

const app = express();

app.use(bodyParser.json({ limit : "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit : "30mb", extended: true }))
app.use(cors())

app.use('/posts', postRoutes)  //everyroute in postRoutes will start with /posts
//MONGODB

const CONNECTION_URL = 'mongodb+srv://administrator:administrator123@cluster0.jmuod.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology : true}) // not mandatory but avoids console probs
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)
