import { useState } from "react";
import { useCounter } from "../../hooks/useCounter";

export function Hooksapp (){

    const [contador, setContador] =useState({
        contador1: 10,
        contador2: 20,
        contador3: 30
    })
    //estoy desestructurando el objeto que definí en el hook
    const { counter, setCounter }  = useCounter();


    return(
        <>
        <div className="card justify-content-center align-items-center m-3" >
            <h1>Hooks App</h1>
            <p>Contador: {contador.contador1}</p>
            <p>Probando el hook useCounter {counter}</p>
            {/* <button className="btn btn-primary"  onClick={() => setContador(
                //como solo quiero actualizar los cambios del contador1 tengo que mantener los valores de las otras dos propiedades del contador
                // si no establezco los valores de las otras propiedades me va a arrojar error
                {...contador,
                contador1 : contador.contador1 +1}
                )}>Incrementar</button>
            <button className="btn btn-danger" onClick={() => setContador({
                ...contador,
                contador1 : contador.contador1 - 1})}> Decrementar</button>
                <button className="btn btn-secondary" onClick={()=> setContador({ ...contador, contador1: 10 })}>Reset</button> */}

                <button onClick={()=>{setCounter(counter + 1)}}>
                    Incrementando con hook
                </button>
        </div>
        
        </>
    ) 
}