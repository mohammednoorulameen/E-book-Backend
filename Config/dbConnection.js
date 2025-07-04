import mongoose from "mongoose";

const connectDB= async ()=>{
    mongoose.connection.on('connected',()=>{
            console.log('mongoDB connected successfully');
            
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/E-book_e_commerce`)
    // await mongoose.connect(`mongodb://localhost:27017/E-book_e_commerce`)

}

export default connectDB
