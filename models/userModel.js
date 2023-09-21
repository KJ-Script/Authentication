import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username not provided"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "email not provided"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "password not provided"],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordExpire: Date,
    verifyToken: String,
    verifyTokenExpire: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema)
export default User