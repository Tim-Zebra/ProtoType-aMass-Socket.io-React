import 'dotenv/config.js'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import formData from 'express-form-data'

import { router as profilesRouter } from './routes/profiles.js'
import { router as authRouter } from './routes/auth.js'
import * as dotenv from 'dotenv'

import './config/database.js'

const app = express()

const corsOptions = {
  origin: 'https://amassmgmt.com/',
  optionsSuccessStatus: 200
}

app.options('*', cors())
app.use('*', cors())
app.use(logger('dev'))
app.use(express.json())
app.use(formData.parse())

app.use('/api/profiles', profilesRouter)
app.use('/api/auth', authRouter)

// Allows access from everyone
  // Access-Control-Allow-Origin: *
// Allows access from a specific URL
//   // Access-Control-Allow-Origin: https://example.com
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*")
// })

app.use(function (req, res, next) {
  res.status(404).json({ err: 'Not found' })
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

export { app }
