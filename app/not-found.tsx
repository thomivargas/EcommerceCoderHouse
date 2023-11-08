"use client"
import { useRouter } from "next/navigation"

const NotFound = () => {

    const router = useRouter()

  return (
    <div>
      <button onClick={() => router.back()}>{'<-'} volver</button>
      <h1 className="text-7xl m-10 text-">
        Pagina no encontrada - 404
      </h1>
    </div>
  )
}

export default NotFound
