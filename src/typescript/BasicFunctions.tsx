
export function BasicFunctions (){
    
    function Sumar(a: number, b: number){
        return a + b
    }

    return(
        <>
        <h3>Basic Functions</h3> 
        <span>
            el resultado de sumar: {Sumar(2,8)}
        </span>
        </>
    )
}