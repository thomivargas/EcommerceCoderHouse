"use client"
import { useRouter } from "next/navigation"

const NotFound = () => {

    const router = useRouter()

  return (
    <div>
      <button className="p-5" onClick={() => router.back()}>{'<-'} volver</button>
      <div className="h-[50vh] w-full grid place-items-center">
        <h1 className="text-7xl m-10">
          Pagina no encontrada - <span className="text-[#B88E2F]">404</span>
        </h1>
      </div>
    </div>
  )
}

export default NotFound
