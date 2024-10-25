
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin: true
};

// Database connection.
mongoose.set('strictQuery', false)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB database connected successfully');
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
    }
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('API is working');
});

app.listen(port, async () => {
    try {
        await connectDB();
        console.log('Server is running on port ' + port);
    } catch (err) {
        console.error('Error starting server:', err.message);
    }
});
