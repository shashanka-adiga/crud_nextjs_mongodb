import Link from "next/link"

function NavBar() {
  return (
    <nav>
        <div className="bg-slate-800 flex justify-between items-center text-white p-2 w-full container mx-auto">
            <div className="font-bold text-2xl px-4 py-2">
                <Link href={'/'}>Logo</Link>
            </div>
            <div className="border px-4 py-2">
                <Link href={'/addPage'}>add note</Link>
            </div>
        </div>
    </nav>
  )
}

export default NavBar