import Note from "@/models/notes"
import connectToMongoDb from "@/utils/database"
import { NextResponse } from "next/server"


export async function PUT(request,{params}){
    const {id} = params
    const {newTitle:title,newDescription:description} = await request.json()
    await connectToMongoDb()
    await Note.findByIdAndUpdate(id,{title,description})
    return NextResponse.json({message:"update was succesful!"},{status:200})
}


export async function GET(request,{params}){
    const {id} = params
    await connectToMongoDb()
    const note = await Note.findOne({_id:id})
    return NextResponse.json({note},{status:200})
}