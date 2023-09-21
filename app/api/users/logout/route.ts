import { NextResponse } from "next/server";


export async function GET() {
    try {
        const response = await NextResponse.json({
            message: "Successfully Logged out",
            success: true,
        })
        console.log(response)
        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0)
        })
        return response
    } catch (error: any) {
        console.log("Error here")
        return NextResponse.json({error: error.message}, {status: 500})
    }
    
}