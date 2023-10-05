"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";


function addPage() {

  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
 
  const router = useRouter()
  const submitHandler = async (e) => {
    e.preventDefault()
    await fetch('http://localhost:3000/api/notes',{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title,description})
    })
    router.push('/')
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col container mx-auto mt-10 gap-2 ">
      <input
        className="border border-slate-900 p-2"
        type="text"
        placeholder="enter the title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border border-slate-900 p-2 "
        type="text"
        placeholder="enter the description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="border bg-green-600 p-2 w-fit font-bold text-white">
        Add Note
      </button>
    </form>
  );
}

export default addPage;
