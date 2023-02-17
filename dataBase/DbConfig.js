import mongoose from "mongoose";
mongoose.set('strictQuery', false);
const URL = 'mongodb+srv://jayanta:XJVmf9XXSkjHBaHF@myprojects.3f4y60y.mongodb.net/myProjects';
const dbConnection = () => {
    try {
        mongoose.connect(URL);
        console.log("DataBase connected Successfully")
    } catch (error) {
        console.log("connection Failed"+ error)
    }

} 
export default dbConnection;