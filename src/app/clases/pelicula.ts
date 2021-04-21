export class Pelicula{
    id: number;
    nombre: string;
    tipo: string;
    fechaDeEstreno: string;
    cantidadDePublico: string;
    fotoDeLaPelicula: string;

    public constructor(id:number,nombre:string,tipo:string,fde:string, cdp: string, fdp:string)
    {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaDeEstreno = fde;
        this.cantidadDePublico = cdp;
        this.fotoDeLaPelicula = fdp;
    }
}