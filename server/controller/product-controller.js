import Product from '../model/product-schema.js';

export const getProducts = async (request, response) =>{
    try {
        // empty object means it gives us all the data
        const products = await Product.find({});
        response.status(200).json(products);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}