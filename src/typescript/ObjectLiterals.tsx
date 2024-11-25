
interface Person {
    name: string;
    age: number;
    address:string
};

const usuario1 : Person = {
    name: 'Juan',
    age: 25,
    address: 'una calle'
}


export function ObjectLiterals(){

    return(
        <>
        <h3>Object Literals</h3>
        {usuario1.name}
        <br />
        {usuario1.age}
        <br />
        </>
        
    )
}