import ProductModals from "../Modals/Product.modals.js";
import UserModals from "../Modals/User.modals.js";

export const addCart = async (req, res) => {
    try {
        const { productId, userId } = req.body;

        if (!productId || !userId) return res.status(404).json({ success: false, message: "User and Product ID are Mandatory" })

        await UserModals.findByIdAndUpdate({ _id: userId }, { $push: { cart: productId }})

        return res.status(201).json({ success: true, message: "Product Added to Cart Successfully" })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: error })
    }
}

export const allCartProducts = async (req, res) => {
    try {
        const {id} = req.body
        // console.log(id)
        if(!id) return res.status(404).json({success : false , message : "Id not found"})
        
        const productIds = await UserModals.findById(id).select("cart -_id")
        console.log(productIds.cart[0]) 
        if(productIds){ 
            const products = await ProductModals.findById(productIds.cart[2])
            console.log(products)
            return res.status(200).json({success : true , message : "Products Found." , products});
        }
        return res.status(404).json({ sucess: false, message: "Product Not found" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: error })
    }
}
