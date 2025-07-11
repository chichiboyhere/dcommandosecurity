import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
//import mongoose from "mongoose";

const storage = new GridFsStorage({
  url: process.env.MONGODB_URI, // Your MongoDB connection string
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return {
      filename: file.originalname,
      bucketName: "uploads", // Collection name
    };
  },
});

const upload = multer({ storage });

export default upload;
