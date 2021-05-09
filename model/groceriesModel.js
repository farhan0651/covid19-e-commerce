const mongoose=require('mongoose');
const groceriesSchema=mongoose.Schema({
    productCode:
    {
        type: Number,
        required: true,
        unique:true
    },
    productName:
    {
        type: String,
        required: true
    },
    quantity:
    {
        type: Number
    },
    imageSRC:
    {
        type: String,
        required: true
    },
    description:
    {
        type: String,
        requried: true
    },
    price:
    {
        type: Number,
        required: true
    }
});
module.exports=mongoose.model('Groceries',groceriesSchema);