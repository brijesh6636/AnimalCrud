import { v2 as cloudinary } from "cloudinary";
import { config } from 'dotenv';
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
config({ path: './config.env' })
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
export default cloudinary;


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'animalCrud',
        allowed_formats: ['jpg', 'png', 'heic', 'jpeg']
    }
})

export const uploadAnimalCrudCloudinary = multer({ storage })