import mongoose from "mongoose";

const CartSchema = mongoose.Schema(
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
        productId :{
            type : String,
            required : true,
        },

    },

    {timestamps : true}
)

const CartModal = mongoose.model("Cart",CartSchema);
export default CartModal