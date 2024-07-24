import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';


async function connect() {
    c

    const db = await mongoose.connect(getUri);

    console.log("Database Connected");
    return db;
}

export default connect;
