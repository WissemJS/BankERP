const express = require('express') 
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log(`Connected to MongoDB`);
    }
  )

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/account', require('./routes/accountRoutes'))
app.use('/api/transaction', require('./routes/transactionRoutes'))
app.use('/api/agent', require('./routes/agentRoutes'))

app.use(errorHandler)

app.listen(port , ()=> console.log(`server started on port ${port} `))