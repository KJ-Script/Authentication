import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.mongo_url!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log("connected to mongo sucessfully")
        })

        connection.on('error', (err) => {
            console.log("Encountered Error here", err)
        })
    } catch(error) {
        console.log("Caught Error", error)
    }
}