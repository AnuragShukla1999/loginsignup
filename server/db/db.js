import mongoose from "mongoose";

const dbConnection = () => {
    try {
        mongoose.connect(process.env.MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Database is connected.");
        })
        .catch((e) => {
            console.log(e)
        })
    } catch (error) {
        console.log(error)
    }
};

export default dbConnection;