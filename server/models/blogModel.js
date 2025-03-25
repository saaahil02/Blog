import mongoose from "mongoose";

const blogSchema =new mongoose.Schema({
    title:{
        type:String,
    },
    category:{
        type:String,
    },
    description:{
        type:String,
    },
    thumbnail:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        refer:"users",
    }
});

const blogModel =mongoose.model("blog",blogSchema);
export default blogModel;