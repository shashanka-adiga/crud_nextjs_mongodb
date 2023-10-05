"use client"

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

function DeleteBtn({id}) {
  const router = useRouter()

  const clickHandler = async () => {
    console.log(id)
      await fetch(`http://localhost:3000/api/notes?id=${id}`,{
      method:"DELETE"
    })
    router.refresh()
  }

  

  return (
    <>
      <button onClick={clickHandler}  className="text-red-500">
        <HiOutlineTrash />
      </button>
    </>
  );
}

export default DeleteBtn;
