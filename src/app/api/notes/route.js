import Note from "@/models/notes"
import connectToMongoDb from "@/utils/database"
import { NextResponse } from "next/server"

export async function POST(request){
    try {
        const {title,description} = await request.json()
        await connectToMongoDb()
        await Note.create({title,description})
        console.log("post worked succesfully")
        return NextResponse.json({message:"post request was succesful!"},{status:200})
    } catch (error) {
        console.log("post request was not succesfull and failed at route.js")
        return NextResponse.json({message:"post request was not succesful!"},{status:500})
    }

} 


export async function GET(){
    try {
        await connectToMongoDb()
        const notes = await Note.find()
        console.log("get worked succesfully")
        return NextResponse.json({notes})
    } catch (error) {
        console.log("get request was not succesfull and failed at route.js")
        return NextResponse.json({message:"get request was not succesful!"},{status:500})
    }
}