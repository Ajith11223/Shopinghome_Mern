import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
    {
        productName : {
            type : String,
            required : true,
        },

        price :{
            type : Number,
            required : true,
        } ,

        qty :{
            type : Number,
            required : true,
        },
        imgLink :{
            type : String,
            required : true,
        },

    },

    {timestamps : true}
)

const ProductModal = mongoose.model("Product",ProductSchema);
export default ProductModal