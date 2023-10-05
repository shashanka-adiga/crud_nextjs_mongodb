import Link from "next/link"
import {HiPencilAlt} from 'react-icons/hi'
import DeleteBtn from "./DeleteBtn"

function NotesList() {
  return (
    <main>
        <div className="border border-black container mx-auto mt-2 flex justify-between p-2">
            <div>
                <h2>title</h2>
                <p>description</p>
            </div>
            <div>
                <DeleteBtn />
                <Link href={'/editPage/123'}>
                    <HiPencilAlt />
                </Link>
            </div>
        </div>
    </main>
  )
}

export default NotesList