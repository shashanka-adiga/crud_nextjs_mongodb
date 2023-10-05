import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import DeleteBtn from "./DeleteBtn";

async function getNotes() {
  const res = await fetch("http://localhost:3000/api/notes",
    { cache: 'no-store' }
  );
  if (!res.ok) {
    throw new Error("there was an error while fetching data");
  }

  return res.json();
}

async function NotesList() {
  const {notes} = await getNotes();
  
  return (
    <main>
      {notes.map((note) => (
        <div key={note._id} className="border border-black container mx-auto mt-2 flex justify-between p-2">
          <div>
            <h2 className="text-xl font-bold">{note.title}</h2>
            <p className="text-sm">{note.description}</p>
          </div>
          <div>
            <DeleteBtn />
            <Link href={"/editPage/123"}>
              <HiPencilAlt />
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
}

export default NotesList;
