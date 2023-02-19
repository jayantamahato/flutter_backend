import mongoose from "mongoose";
const accountSchema = new mongoose.Schema({
    name: {
        type: String
    },
    password: {
       type: String
    },
    availableBalance: {
        type: Number
    },
    income:{
    type:Number
    },
    expenses:{
        type:Number
    }
});
const accountCollection = mongoose.model('accounts', accountSchema);
export default accountCollection;