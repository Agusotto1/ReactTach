//es un standart definir el nombre del hook con la palabra adelante "use"
// los hooks se utilizan para separar la logica de negocio del componente, para que no quede "sucio".

import { useState } from "react"

export const useCounter = (initialValue= 10) => {
    const [counter, setCounter] = useState(initialValue)

    return{
        counter, setCounter
    } 
}