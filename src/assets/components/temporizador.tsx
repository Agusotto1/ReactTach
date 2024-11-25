import { useEffect, useState } from "react"

export function Temporizador(){

    const[segundos, setSegundos]=useState(0);

    useEffect(()=>{ 
        const intervalo = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos + 1);
      }, 1000);
      return () => {
        clearInterval(intervalo);  // Limpia el intervalo
        console.log('Componente desmontado y temporizador limpiado');
      };
    }, []);

    return(
        <>
        <div className="row p-3 aligh-items-center justify-content">
            <div className="col-12">
                <h1>Contando...</h1>
                <h2>{segundos}</h2>
            </div>
        </div>
        </>
    )
}