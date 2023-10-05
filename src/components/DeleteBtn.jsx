"use client"

import { HiOutlineTrash } from "react-icons/hi";

function DeleteBtn() {
  return (
    <>
      <button className="text-red-500">
        <HiOutlineTrash />
      </button>
    </>
  );
}

export default DeleteBtn;
