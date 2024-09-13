import { config } from 'dotenv';
import cors from 'cors'
import express from 'express'
import { mongoConnection } from './dbConnection.js';
import placeRouter from './router.js'
import animalRoutes from './animal.router.js';

const app = express()
config({ path: './config.env' })
app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use(express.static('uploads'));
app.use(express.json());

// app.use('/api/places',placeRouter)
app.use('/api/animals', animalRoutes);


mongoConnection()

export default app;