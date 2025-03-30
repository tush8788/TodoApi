import 'dotenv/config'
export default  {
    cloudinary:{
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    },
    mongoDBUrl:process.env.MONGODB_URL,
    PORT:process.env.PORT,
    googleClientId: process.env.GOOGLE_CLIENT_ID
}