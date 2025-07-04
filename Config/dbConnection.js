import mongoose from "mongoose";
let MONGODB_URL = 'mongodb+srv://noorulameen8606:<nsOvrJRPGxqo9h5Q>@cluster0.vpqghcv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectDB= async ()=>{
    mongoose.connection.on('connected',()=>{
            console.log('mongoDB connected successfully');
            
    })
    // await mongoose.connect(`${process.env.MONGODB_URL}/E-book_e_commerce`)
    await mongoose.connect(`${MONGODB_URL}/E-book_e_commerce`)
    // await mongoose.connect(`mongodb://localhost:27017/E-book_e_commerce`)

}

export default connectDB
