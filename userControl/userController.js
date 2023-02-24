import accountCollection from "../schema/accountSchema.js";
import transactionCollection from "../schema/transactionSchema.js";

//add account
export const account = async (req, res) => {
    const data = req.body;
    data.availableBalance = 0 ;
    data.income = 0 ;
    data.expenses = 0 ;
    console.log(data)
    const validData = accountCollection(data);
    try {
         await validData.save();
        res.status(201).json({message:'account created'});
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
//sign in
export const signIn = async (req, res) => {
    const data = req.body;
    console.log(data)
    try {
        const result = await accountCollection.findOne(data);
        if (result) {
            res.send(result); 
        } else {
            res.status(204).json({message:"user not found"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
// add transaction 
export const makeTransaction = async(req, res) => {
    const data = req.body;
    let searchRes = await accountCollection.find({ name: data.name });
    searchRes = searchRes[0];
    console.log(JSON.stringify(data));
    
    console.log(searchRes);
    var availableBalance = searchRes.availableBalance;    
    var income = searchRes.income;    
    var expenses = searchRes.expenses;   
    
    console.log(typeof (expenses));
    console.log(typeof (availableBalance));

    console.log("upcomming data:"+typeof (data.amount));


        //condition 
    if (data.type == 'income') {
        availableBalance += parseInt(data.amount);
        income += parseInt(data.amount);
    } else if (data.type == 'expenses') {
        availableBalance -= parseInt(data.amount);
        expenses+=parseInt(data.amount);
    }
    const value = {
        availableBalance: availableBalance,
        income: income,
        expenses:expenses
    }
    const filter = {
        name:data.name
    }
    await accountCollection.findOneAndUpdate(filter,value)
   
    const validData = transactionCollection(data);
    try {
        await validData.save();
        res.status(201).json({ message: 'transaction saved' });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
//fetch all transaction 
export const transaction = async (req, res) => {
    const data = req.body;
    try {
        const result = await transactionCollection.find({ name: data.name });
        res.send(result);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
//fetch accoutn details
export const accountDetails = async (req, res) => {
    const data = req.body;
    try {
        const result = await accountCollection.findOne(data);
        res.send(result);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}