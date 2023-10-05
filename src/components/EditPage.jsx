"use client";
import { useState } from "react";
import {useRouter} from 'next/navigation'

export default function EditPage({id,title,description}) {

  const [newTitle, setNewTitle] = useState(title)
  const [newDescription,setNewDescription] = useState(description)
  const router = useRouter()

  const submitHandler = async (e) => {
    e.preventDefault()
    await fetch(`http://localhost:3000/api/notes/${id}`,{
      method:"PUT",
      body:JSON.stringify({newTitle,newDescription})
    })
    router.push('/')
    router.refresh()
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col container mx-auto mt-10 gap-2 ">
      <input
        className="border border-slate-900 p-2"
        type="text"
        placeholder="enter the new title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        className="border border-slate-900 p-2 "
        type="text"
        placeholder="enter the description"
        value = {newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button type="submit" className="border bg-green-600 p-2 w-fit font-bold text-white">
        Update
      </button>
    </form>
  );
}
