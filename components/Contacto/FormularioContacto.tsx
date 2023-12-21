"use client"
import { useState } from "react";

const FormularioContacto = () => {
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await fetch(`http://${process.env.VERCEL_URL}/api/contacto`, {
            method: "POST",
            body: JSON.stringify(values)
        })
        setValues({
            nombre: '',
            email: '',
            mensaje: '',
        })
    }

    return (
        <form onSubmit={handleSubmit} className="w-[380px] flex flex-col gap-10">
            <div className="flex flex-col gap-2 w-full">
                <label>Tu nombre</label>
                <input
                    type="text"
                    placeholder="Abc"
                    name="nombre"
                    value={values.nombre}
                    className="border border-[#ccc] p-2 rounded-md"
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label>Tu email</label>
                <input
                    type="email"
                    placeholder="@Abc"
                    name="email"
                    value={values.email}
                    className="border border-[#ccc] p-2 rounded-md"
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <label>Mensaje</label>
                <textarea
                    placeholder="¡Hola! me gustaría preguntar sobre"
                    className="border border-[#ccc] p-2 rounded-md max-h-44"
                    name="mensaje"
                    value={values.mensaje}
                    onChange={handleChange}
                />
            </div>
            <button className="bg-[#B88E2F] text-white rounded-md py-1.5 hover:bg-[#B88E2F]/90 active:scale-95">
                Enviar
            </button>
        </form>
    )
}

export default FormularioContacto
