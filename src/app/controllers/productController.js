// Import thư viện Mongoose
const mongoose = require("mongoose");

// Import Module Product Model
const productModel = require("../models/productModel");

const getAllProduct = (request, response) => {
    // B1: Chuẩn bị dữ liệu
    // B2: Validate dữ liệu
    // B3: Gọi Model tạo dữ liệu
    productModel.find((error, data) => {
        if (error) {
            return response.status(500).json({
                status: "Internal server error",
                message: error.message
            })
        }

        return response.status(200).json({
            status: "Get all Product successfully",
            data: data
        })
    })
}

const createProduct = (request, response) => {
    // B1: Chuẩn bị dữ liệu
    const body = request.body;
 
    // B2: Validate dữ liệu
    // Kiểm tra name có hợp lệ hay không
    if (!body.name) {
        return response.status(400).json({
            status: "Bad Request",
            message: "name không hợp lệ"
        })
    }

    // Kiểm tra type có hợp lệ hay không
    if (!body.type) {
        return response.status(400).json({
            status: "Bad Request",
            message: "type không hợp lệ"
        })
    }

    // Kiểm tra imageUrl có hợp lệ hay không
    if (!body.imageUrl) {
        return response.status(400).json({
            status: "Bad Request",
            message: "imageUrl không hợp lệ"
        })
    }

    // Kiểm tra buyPrice có hợp lệ hay không
    if (!body.buyPrice) {
        return response.status(400).json({
            status: "Bad Request",
            message: "buyPrice không hợp lệ"
        })
    }

    // Kiểm tra promotionPrice có hợp lệ hay không
    if (!body.promotionPrice) {
        return response.status(400).json({
            status: "Bad Request",
            message: "promotionPrice không hợp lệ"
        })
    }

    // Kiểm tra status có hợp lệ hay không
    if (!body.description) {
        return response.status(400).json({
            status: "Bad Request",
            message: "name không hợp lệ"
        })
    }
    // B3: Gọi Model tạo dữ liệu
    const newProduct = {
        _id: mongoose.Types.ObjectId(),
        name: body.name,
        type: body.type,
        imageUrl: body.imageUrl,
        buyPrice: body.buyPrice,
        promotionPrice: body.promotionPrice,
        description: body.description
    }

    productModel.create(newProduct, (error, data) => {
        if (error) {
            return response.status(500).json({
                status: "Internal server error",
                message: error.message
            })
        }

        return response.status(201).json({
            status: "Create Product successfully",
            data: data
        })
    })
}

const getProductById = (request, response) => {
    // B1: Chuẩn bị dữ liệu
    const productId = request.params.productId;

    // B2: Validate dữ liệu
    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return response.status(400).json({
            status: "Bad Request",
            message: "productID không hợp lệ"
        })
    }

    // B3: Gọi Model tạo dữ liệu
    productModel.findById(productId, (error, data) => {
        if (error) {
            return response.status(500).json({
                status: "Internal server error",
                message: error.message
            })
        }

        return response.status(200).json({
            status: "Get detail Product successfully",
            data: data
        })
    })
}

const updateProductById = (request, response) => {
    // B1: Chuẩn bị dữ liệu
    const productId = request.params.productId;
    const body = request.body;

    // B2: Validate dữ liệu
    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return response.status(400).json({
            status: "Bad Request",
            message: "productID không hợp lệ"
        })
    }


    if (body.name !== undefined && body.name.trim() === "") {
        return response.status(400).json({
            status: "Bad Request",
            message: "name không hợp lệ"
        })
    }

    if (body.type !== undefined && body.type.trim() === "") {
        return response.status(400).json({
            status: "Bad Request",
            message: "type không hợp lệ"
        })
    }

    if (body.buyPrice !== undefined && body.buyPrice.trim() === "") {
        return response.status(400).json({
            status: "Bad Request",
            message: "buyPrice không hợp lệ"
        })
    }

    if (body.promotionPrice !== undefined && body.promotionPrice.trim() === "") {
        return response.status(400).json({
            status: "Bad Request",
            message: "name không hợp lệ"
        })
    }

    if (body.status !== undefined && body.status.trim() === "") {
        return response.status(400).json({
            status: "Bad Request",
            message: "name không hợp lệ"
        })
    }

    // B3: Gọi Model tạo dữ liệu
    const updateProduct = {}

    if (body.name !== undefined) {
        updateProduct.name = body.name
    }
    if (body.type !== undefined) {
        updateProduct.type = body.type
    }
    if (body.imageUrl !== undefined) {
        updateProduct.imageUrl = body.imageUrl
    }
    if (body.buyPrice !== undefined) {
        updateProduct.buyPrice = body.buyPrice
    }
    if (body.promotionPrice !== undefined) {
        updateProduct.promotionPrice = body.promotionPrice
    }
    if (body.description !== undefined) {
        updateProduct.description = body.description
    }

    productModel.findByIdAndUpdate(productId, updateProduct, (error, data) => {
        if (error) {
            return response.status(500).json({
                status: "Internal server error",
                message: error.message
            })
        }

        return response.status(200).json({
            status: "Update Product successfully",
            data: data
        })
    })
}

const deleteProductById = (request, response) => {
    // B1: Chuẩn bị dữ liệu
    const productId = request.params.productId;

    // B2: Validate dữ liệu
    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return response.status(400).json({
            status: "Bad Request",
            message: "productID không hợp lệ"
        })
    }

    // B3: Gọi Model tạo dữ liệu
    productModel.findByIdAndDelete(productId, (error, data) => {
        if (error) {
            return response.status(500).json({
                status: "Internal server error",
                message: error.message
            })
        }

        return response.status(200).json({
            status: "Delete Product successfully"
        })
    })
}

module.exports = {
    getAllProduct,
    createProduct,
    getProductById,
    updateProductById,
    deleteProductById
}