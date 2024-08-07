import mongoose from 'mongoose'


const DB_NAME = 'my-app'
const MONGO_URI = `mongodb://localhost:27017/${DB_NAME}`

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected ....');
    } catch (err) {
        console.log(err.message);
    }
};

export default connectDB;
