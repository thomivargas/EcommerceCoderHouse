'use client'

import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"

const LoginForm = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const { user, setUser, registerUser, loginUser } = useAuthContext()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className='mt-5 flex flex-col gap-5 p-5 items-center input-perfil'>
            <input 
                onChange={handleChange} 
                type="email" 
                required
                value={values.email}
                name="email"
                placeholder='Email de usuario' 
            />
            <input 
                onChange={handleChange} 
                type="password" 
                required
                value={values.password}
                name="password"
                placeholder='Contraseña' 
            />
            <div className="flex gap-5">
                <button
                    onClick={() => 
                        loginUser({ email: values.email, password: values.password, setUser})
                    } 
                    className='bg-[#b88f2f] text-white placeholder:text-white cursor-pointer px-4 py-3 border border-[#b88f2f] rounded-3xl hover:bg-[#b88f2fdc] transition duration-300 ease-in-out'
                >
                    login
                </button>
                <button
                    onClick={() => 
                        registerUser({ email: values.email, password: values.password, setUser })
                    }
                    className='bg-[#b88f2f] text-white placeholder:text-white cursor-pointer px-4 py-3 border border-[#b88f2f] rounded-3xl hover:bg-[#b88f2fdc] transition duration-300 ease-in-out'
                >
                    register
                </button>
            </div>
        </form>
    )
}

export default LoginForm