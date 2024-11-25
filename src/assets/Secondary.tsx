
type FirstAppProps = {
    nombre: string;
    apellido: string; 
    edad: number// Aquí es number porque estás pasando 1234
}


const nombreUsuario : FirstAppProps = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30
}


export function Secondary(){
    return (
        <main>
        
            <div className="col-6">
                <h1>Holaaaaa + {nombreUsuario.nombre}</h1>
            </div>
            <div className="col-6">
                <h1>Adiosss</h1>
            </div>
        
        </main>
    )
}