import ProductModal from "../Models/ProductModal.js"


export const ProductCreate =async(req,res)=>{
    const product = new ProductModal(req.body)

    try {

        const create = await ProductModal.create(product)
        res.status(200).json({ create })
    } catch (error) {
        console.log(error,"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
        res.status(500).json({ error })
    }
    
}

export const getAllProduct=async(req,res)=>{
    try {
        const data = await ProductModal.find()
        res.status(200).json({data})
    } catch (error) {
        console.log(error)
    }
}