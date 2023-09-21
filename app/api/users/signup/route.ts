import {connect} from  "../../../../dbConfig/dbConfig"
import User from "../../../../models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from 'bcryptjs'

connect()

export async function POST(request: NextRequest){
    	try {
            const reqBody = await request.json()
            const {username, email, pass} = reqBody

            // check if email account is already in use
            const user = await User.findOne({email})
            if(user){
                return NextResponse.json({error: "account already exists"}, {status:400})
            }

            //hashing pass
            const salt = await bcrypt.genSalt(10)
            const hashedPass = await bcrypt.hash(pass, salt)

            //sending and saving user in database
            const newUser = new User({
                username,
                email,
                password: hashedPass
            })

            const savedUser = await newUser.save()
            console.log(savedUser)

            return NextResponse.json({
                message: "User created!",
                success: true,
                savedUser
            })

        } catch (error: any) {
            console.log("Caught err")
            return NextResponse.json({error: error.message}, {status: 500})
        }
}