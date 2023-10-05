function addPage() {
  return (
    <form className="flex flex-col container mx-auto mt-10 gap-2 ">
      <input
        className="border border-slate-900 p-2"
        type="text"
        placeholder="enter the title"
      />
      <input
        className="border border-slate-900 p-2 "
        type="text"
        placeholder="enter the description"
      />
      <button className="border bg-green-600 p-2 w-fit font-bold text-white">
        Add Note
      </button>
    </form>
  );
}

export default addPage;
