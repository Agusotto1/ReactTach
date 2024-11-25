import { Button } from "primereact/button";
import { useEffect, useState } from "react";

export const SimpleForm = () => {

    let variableNombre : string = '';
    let variableApellido : string = '';

    function guardarValores(){

        setPersistedValues({
            nombre : formState.nombre,
            apellido : formState.apellido
        })
       
    }

    function mostrarValores(){
        alert(persistedValues.nombre + ' ' + persistedValues.apellido);
    }

    function resetearValores() {
        // Actualizamos el estado a sus valores iniciales
        setFormState({
            nombre: "",
            apellido: "",
        });
        alert('resetear valores')
    }



    const [formState, setFormState] = useState({
        nombre: "",
        apellido: "",
    });

    const [persistedValues, setPersistedValues] = useState({
        nombre: "",
        apellido: "",
    });

    // Desestructuramos el useState
    const { nombre, apellido } = formState;

    // Función para manejar los cambios en los inputs
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    useEffect(() => {
        console.log('Ejecutando useEffect');
    }, []);
    // () => { console.log('Ejecutando useEffect'); }: Este es el callback que useEffect ejecutará. Al estar envuelto en una función de flecha, se ejecutará solo cuando useEffect se active.
    // [] (Dependencias): El segundo argumento es un array de dependencias. Cuando está vacío ([]), useEffect se ejecuta solo una vez, después del primer renderizado del componente.
    // Este es el patrón correcto para ejecutar useEffect una sola vez cuando el componente se monta.
    
    // function logEffect() {
    //     console.log('Ejecutando useEffect');
    // }
    
    // useEffect(logEffect, []);
    
    // logEffect: Es una función regular definida fuera de useEffect.  
    // useEffect(logEffect, []): Aquí, useEffect recibe la referencia a logEffect en lugar de una función de flecha.
    //SE PUEDE USAR EL USEEFFECT PARA LIMPIAR O RESETEAR VALORES 
    //   import React, { useState, useEffect } from 'react';

    //   function Temporizador() {
    //   const [segundos, setSegundos] = useState(0);

    //   useEffect(() => {
    //     // Iniciamos un temporizador que aumenta los segundos cada segundo
    //     const intervalo = setInterval(() => {
    //       setSegundos((prevSegundos) => prevSegundos + 1);
    //     }, 1000);

    //     // Devolvemos una función de cleanup para limpiar el intervalo cuando el componente se desmonte
    //     return () => {
    //       clearInterval(intervalo);  // Limpia el intervalo
    //       console.log('Componente desmontado y temporizador limpiado');
    //     };
    //   }, []);  // Dependencia vacía para que el efecto solo se ejecute al montar

    //   return (
    //     <div>
    //       <h1>Tiempo transcurrido: {segundos} segundos</h1>
    //     </div>
    //   );
    // }

    // export default Temporizador;

    return (
        <>
            <div className="row p-3 text-center justify-content-center align-items-center">
                <div className="col-2">
                    <h1>FORMULARIO SIMPLE</h1>
                    <input
                        type="text"
                        placeholder="Ingrese su nombre"
                        name="nombre"  // Asegúrate que el nombre coincida con la propiedad en el estado
                        className="form-control"
                        value={formState.nombre} 
                        onChange={handleInputChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Ingrese su apellido"
                        name="apellido"  // Asegúrate que el nombre coincida con la propiedad en el estado
                        className="form-control"
                        value={formState.apellido}
                        onChange={handleInputChange}
                    />
                    <br />
                    
                    <Button
                        label="Guardar Valores"
                        severity="success"
                        icon="pi pi-check"
                        raised
                        style={{ borderRadius: "5px" }}
                        onClick={guardarValores}
                    />
                    <br />
                    <br />
                     <Button
                        label="Mostrar Valores"
                        severity="secondary"
                        icon="pi pi-check"
                        raised
                        style={{ borderRadius: "5px" }}
                        onClick={mostrarValores}
                    />
                    <br /><br />
                    <Button
                        label="Resetear Valores"
                        severity="danger"
                        icon="pi pi-check"
                        raised
                        style={{ borderRadius: "5px" }}
                        onClick={resetearValores}
                    />


                </div>
            </div>
        </>
    );
};
