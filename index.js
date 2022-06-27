const express = require('express');
const connectDb = require('./utils/db');
require('dotenv').config();
const cors = require('cors');
const PORT = 5005;
connectDb();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/message', require('./routes/messageRoutes'));
app.use('/api/score', require('./routes/scoreRoutes'));
app.use('/api/map', require('./routes/mapRoutes'));
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
