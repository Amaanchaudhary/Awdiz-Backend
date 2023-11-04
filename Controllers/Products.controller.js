import ProductModals from "../Modals/Product.modals.js"

export const getllProducts = (req, res) => {
    res.send("All products..")
}

export const getSingleProducts = (req, res) => {
    res.send("Single products..")
}

export const addProduct = async (req, res) => {
    try {
        const { name, price, category, image , id} = req.body

        if (!name || !price || !category, !image) return res.status(404).json({ success: false, message: "All Field are required." })

        const product = new ProductModals({
            name , price , category , image : image , userId : id
        })

        // console.log(product , "products here");
        
        const resss = await product.save();
        
        // console.log(resss , "Response from mongodb");

        return res.status(201).json({success : true , message : "Product added successfully."})

    } catch (error) {
        return res.status(500).json({ message: error, success: false });
    }
}
