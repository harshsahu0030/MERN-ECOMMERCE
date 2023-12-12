import app from "./app.js";
import connectDatabase from "./database/database.js";
import { v2 as cloudinary } from "cloudinary";

//database connection
connectDatabase();

//cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

//server listening
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} successfully`);
});
