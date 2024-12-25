// import express from "express";
// import { createBlog, getAllBlogs } from "../controllers/blogcontroller.js";

// const router = express.Router();

// // Route to create a new blog post
// router.post("/", createBlog);

// // Route to get all blog posts
// router.get("/", getAllBlogs);

// export default router;


import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { createBlog, getAllBlogs } from "../controllers/blogcontroller.js";

const router = express.Router();

// Configure Cloudinary
cloudinary.config({
  cloud_name: "dd5d13l0p",
  api_key: "394887866187762",
  api_secret: "3R9vwK-zY0twfi-stE3xZtpVzME",
});

// Configure Multer Storage with Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "blog_media", // Folder name in Cloudinary
    allowed_formats: ["jpg", "png", "jpeg", "mp4"], // Supported file formats
  },
});

const upload = multer({ storage });

// Route to create a blog with media upload
router.post("/", upload.single("media"), createBlog);

// Route to get all blogs
router.get("/", getAllBlogs);

export default router;
