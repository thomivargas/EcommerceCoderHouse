'use client'

import { useAuthContext } from "@/components/context/AuthContext"

const AdminLaout = ({children, login} : { children: React.ReactNode, login : any}) => {

    const { user } = useAuthContext()

    return (
        <>
            { user.logged 
              ? children :
              login
            }
        </>
    )
}

export default AdminLaout