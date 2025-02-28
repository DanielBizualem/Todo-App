import mongoose from "mongoose"

export const ConnectDB = async() => {
    await mongoose.connect('mongodb+srv://daniel4:daniel123@cluster0.zpxo7.mongodb.net/todo-app')
    console.log("DB Connected")
}