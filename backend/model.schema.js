import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
    placeName : {
        type : String,
        required : true
    },
    imageUrl :{
        type : String , 
        required : true
    },
    placeDetails:{
        type:String,
        required : true,
    }
},{timestamps:true})

export const Place = mongoose.model('Place',placeSchema)


const animalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String,  },
  age: { type: Number },
  imageUrl : { type: String}
});

export const Animal = new mongoose.model('Animal',animalSchema)

