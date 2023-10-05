
import EditPage from '@/components/EditPage'

const getDetailsById = async (id) => {
    const res = await fetch(`http://localhost:3000/api/notes/${id}`,{
      cache:"no-store"
    })
    if(!res.ok){
      throw new Error("failed to fetch note")
    }
    return res.json()
}

async function PageToEdit({params}) {
  const {id} = params

  const {note} = await getDetailsById(id)
  const {title,description} = note

  return (
    <>
      <EditPage  id={id} title={title} description={description}/>
    </>
  )
}

export default PageToEdit