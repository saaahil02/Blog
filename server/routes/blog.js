import express, { application } from "express";
import AuthController from "../controllers/authController.js";
import BlogController  from "../controllers/blogController.js";
import CategoryController from "../controllers/categoryController.js";
const router = express.Router();


router.post("/user/register",AuthController.userRegistration);
router.post("/user/login",AuthController.userLogin);

//protected Routes
router.get("/get/allblogs",BlogController.getAllBlogs);
router.post("/add/blogs",BlogController.addNewBlog);
router.get("/get/blog/:id", BlogController.getSingleBlog);

router.get("/get/categories",CategoryController.getAllCategories);
router.post("/add/category",CategoryController.addNewCategory);


export default router;