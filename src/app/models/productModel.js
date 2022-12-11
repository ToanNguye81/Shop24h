// Khai báo thư viện mongo
const mongoose = require("mongoose")

//Khai báo class Schema
const Schema = mongoose.Schema

//Khởi tạo instance productSchema 
const productSchema = new Schema({
    _id: {
        // type: mongoose.Types.ObjectId,
        type: Number,
        unique: true,
        require:true
    },
    name: {
        type: String,
        unique: true,
    },
    type: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    },
    buyPrice: {
        type: Number,
        require:true
    },
    promotionPrice: {
       type: Number,
       require:true
    },
    description: {
        type: String,
        required: true
    }
}, {
    //Lưu dấu bảng ghi được cập nhật vào thời gian nào
    timestamps: true
})

// Biên dịch một Book Model từ bookscheme
module.exports = mongoose.model("Product", productSchema)