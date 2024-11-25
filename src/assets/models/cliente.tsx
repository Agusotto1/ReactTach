import { Provincia } from "./provincia";

export class Cliente {
    constructor(
    public nombre: string      ,        // Nombre del cliente
    public apellido: string    ,      // Apellido del cliente
    public telefono: string    ,      // Teléfono del cliente
    public mail: string        ,          // Email del cliente
    public domicilio: string   ,     // Domicilio del cliente
    public provincia: Provincia,){}  // Objeto tipo Provincia
}