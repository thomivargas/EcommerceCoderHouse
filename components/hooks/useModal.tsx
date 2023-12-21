import { useState } from "react";


export const useModal = (initialValue = false) => {
    const [IsopenModal, setIsopenModal] = useState(initialValue)

    const HandleOpen = () => {
        setIsopenModal(true)
    }
    const HandleClose = () => {
        setIsopenModal(false)
    }

    return [IsopenModal, HandleClose, HandleOpen];
}