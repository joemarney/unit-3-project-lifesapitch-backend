const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const cors = require('cors')


const app = express();
const port = 3000


mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});



//! ==================== Middleware ========================= ! //

app.use(express.json());
app.use(morgan('dev'))
app.use(cors({ origin: 'http://localhost:5173' }))



//! ==================== Controllers ========================= ! //

const authRouters = require('./controllers/auth')
const campsitesRouters = require('./controllers/campsites')





//! ==================== Routers ========================= ! //

app.use('/auth', authRouters)
app.use('/campsites', campsitesRouters)





app.listen(port, () => {
    console.log('The express app is ready!');
});