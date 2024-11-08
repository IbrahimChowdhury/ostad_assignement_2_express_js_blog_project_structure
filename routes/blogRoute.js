import express from "express";
const router=express.Router()

import * as blogController from "../app/controllers/blog_controller.js"

//create blog
router.post("/create-blog",blogController.createBlog)


// read blog
router.get("/read-blog",blogController.readBlog);


// Update Route
router.put("/update-blog",blogController.updateBlog);



// Delete Route
router.delete("/delete-blog",blogController.deleteBlog);

export default router