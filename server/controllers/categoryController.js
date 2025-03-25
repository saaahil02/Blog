import categoryModel from "../models/categoryModel.js";

class CategoryController{
    static getAllCategories=async(req,res)=>{
       try{
        
           
        }
       catch(error){
           return res.status(200).json(fetchAllCategories);
       }
    };
    static addNewCategory=async(req,res)=>{
        res.send("add new Categories");
    };

}
export default CategoryController;
