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
    }
});
const accountCollection = mongoose.model('accounts', accountSchema);
export default accountCollection;