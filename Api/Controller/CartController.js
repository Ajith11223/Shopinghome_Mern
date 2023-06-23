import CartModal from "../Models/CartModal.js"
import ProductModal from "../Models/ProductModal.js"

export const CartCreate =async(req,res)=>{
    // console.log(req.body.qty)
    const {qty,_id,productName,price,imgLink}=req.body

    if(qty == 0){
        res.status(400).json({message:"item out of Stock"})
    }else{
        const balance = qty - 1
        req.body.qty =balance
        try {
            const cartData={
                qty,productName,price,imgLink,"productId":_id
            }
            
            const updateData = await ProductModal.findByIdAndUpdate(_id, req.body, { new: true })
            const createCart =await CartModal.create(cartData) 
            res.status(200).json({updateData})
        } catch (error) {
            
        }
        
    }

    

}

export const getAllCart =async(req,res)=>{

   try {
    const data = await CartModal.find()
    res.status(201).json({data})
   } catch (error) {
    res.status(500).json({message:"Not get"})
   }
    
}

// delete cart deleteCart

export const deleteCart =async(req,res)=>{
    
    const {_id,productId}=req.body
    try {
        const product =await ProductModal.findOne({_id:productId})
        
        if(product){
            product.qty =  product.qty +1
            const updateProduct = await ProductModal.findByIdAndUpdate({_id:productId},product,{ new: true })
        }
        const deleteCart =await CartModal.findByIdAndDelete({_id})

        res.status(204).json({deleteCart})
        
    } catch (error) {
        
    }

}
