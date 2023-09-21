import { NextRequest, NextResponse } from "next/server";
import {connect} from  "../../../../dbConfig/dbConfig"
import User from "../../../../models/userModel"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {email, pass} = reqBody

        //checking if user exists

        const user = await User.findOne({email})

        if(!user){
            return NextResponse.json({error: "User doesnt exist"}, {status: 400})   
        }
        //checking pass
        const validatePass = await bcrypt.compare(pass, user.password)
        if(!validatePass) {
            return NextResponse.json({error: "Incorrect pass"}, {status: 400})  
        }
        //create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        //create token
        const token = await jwt.sign(tokenData, process.env.SECRET_TOKEN!, {expiresIn: "1d"})

        const response  = NextResponse.json({
            message: "Login successful",
            success: true,
        })

        response.cookies.set("token", token, {
            httpOnly: true,
        })

        return response
    } catch (error) {
        
    }
    
}