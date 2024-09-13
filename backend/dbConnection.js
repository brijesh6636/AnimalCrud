
import mongoose from "mongoose";

export const mongoConnection = () =>{
    mongoose.connect(process.env.MONGODB_URL,{
        dbName:'travelPlannerProject'
    }).then(()=>{
        console.log('SucessFully Connected to database')
    }).catch((err)=>{
        console.log('failed to connect to db',err)
    })
}