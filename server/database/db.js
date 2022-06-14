import mongoose from "mongoose";

export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ecommerce-web-shard-00-00.2t97x.mongodb.net:27017,ecommerce-web-shard-00-01.2t97x.mongodb.net:27017,ecommerce-web-shard-00-02.2t97x.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-138hr2-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch(error){
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;