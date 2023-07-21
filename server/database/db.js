import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
 const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.s93xvmb.mongodb.net/?retryWrites=true&w=majority`;

const Connection = async() => {
// console.log('DB_USERNAME:', process.env.DB_USERNAME);
// console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
try{
        await mongoose.connect(MONGODB_URI,{
            useNewUrlParser:true
         })
         console.log("database connected succesfully");
    }
    catch(err){
        console.log("error while connection database",err.message)
    }
}

export default Connection;