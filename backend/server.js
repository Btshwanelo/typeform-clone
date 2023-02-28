require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

// ConnectDB
const connectDB = require('./db/connect');

// router
const questionsRoute = require('./routes/question');

app.use(express.json());

// extra security packages
const cors = require('cors');

app.use(cors())

// routes
app.use('/api/v1', questionsRoute);

// Create port
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();