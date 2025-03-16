const Product = require(`../models/product.model`);

//get all products
const getAllProducts = async (req, res) => {
    try {
        const getProducts = await Product.find(); // Fetch all products
        res.status(200).json(getProducts);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
}
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const getProduct = await Product.findById(id);
        res.status(200).json(getProduct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
const createProduct = async (req, res) => {
    try {
        const body = await Product.create(req.body);
        res.status(200).json(body);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

}
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body,{new:true});
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deltedProduct = await Product.findByIdAndDelete(id);
        res.status(200).json({ message: "product deleted sucessfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}