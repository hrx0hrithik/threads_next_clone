import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async (): Promise<void> => {
    mongoose.set('strictQuery', true);

    if (!process.env.MONGODB_URL) {
        console.log('MONGODB_URL not found');
        return;
    }

    if (isConnected) {
        console.log('Already connected to MongoDB');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL);

        isConnected = true;

        console.log('Connected to MongoDB');
    } catch (error: any) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};
