import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    name: {
      type:String  
    },
    amount: {
        type: Number
    },
    massage: {
        type: String
    },
    date: {
        type: String
    },
    type:{
        type:String
    }
});
const transactionCollection = mongoose.model('transactions', transactionSchema);
export default transactionCollection;