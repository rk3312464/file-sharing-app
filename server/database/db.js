
import mongoose from 'mongoose';
const DBConnection = async () => {
    const MONODB_URL =`mongodb+srv://rk3312464:mfvtTKRbfUfxsOR2@file-sharing.twlw5gn.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONODB_URL, {useNewUrlParser:true});
        console.log('Database connected successfully');
    }
    catch (error){
        console.error('Error while connecting with the database',error.message);
    }
}

export default DBConnection;

// mfvtTKRbfUfxsOR2