export class persona{
    nombre : string
    apellidos: string
    cedula: number
    est_Civil: string

    constructor (nombre:string, apellidos: string, cedula: number, est_Civil: string){
        this.nombre= nombre;
        this.apellidos= apellidos;
        this.cedula= cedula;
        this.est_Civil= est_Civil;
    }
    cambiarEstadoCivil(newEstado: string){

    }
}
export class Employee extends persona{
    nombre : string
    apellidos: string
    cedula: number
    est_Civil: string
    anoIncorporacion: number
    numDespacho: number
    constructor(nombre: string, apellidos: string, cedula: number, est_Civil: string, anoIncorporacion: number, numDespacho: number){
    {
        super(nombre, apellidos, cedula, est_Civil);
    }
    } 
    removerDespacho(newDespacho: number){
        this.numDespacho =this.numDespacho;
    }
}
export class Student extends persona {
    nombre: string
    apellidos: string;
    cedula: number;
    est_Civil: string;
    curso: string

    constructor(nombre: string, apellidos: string, cedula: number, est_Civil: string, curso: string){
        {
            super(nombre, apellidos, cedula, est_Civil)
        }
    }
    matricularCurso(newCurso: string){
        this.curso= newCurso;
    }
}
export class Teacher extends Employee{
    nombre: string
    apellidos: string
    cedula: number
    est_Civil: string
    anoIncorporacion: number
    numeroDespacho: number
    departamento: string

    constructor(nombre: string, apellidos: string, cedula: number, est_Civil: string,anoIncorporacion: number,
        numDespacho: number, departamento: string)
            {
            super(nombre, apellidos, cedula, est_Civil, anoIncorporacion, numDespacho);
            }
         
        cambiarDepartamento(newDepartamento: string){
            this.departamento= newDepartamento;
        }
} 
export class PersonServicio extends Employee{
    nombre: string
    apellidos: string
    cedula: number
    est_Civil: string
    anoIncorporacion: number
    numDespacho: number
    section: string

    constructor(nombre: string, apellidos: string, cedula: number, est_Civil: string, anoIncorporacion: number,
        numDespacho: number, seccion: string)
        {
            super(nombre, apellidos, cedula, est_Civil, anoIncorporacion, numDespacho);
        }
        moverASeccion(newSection: string){
            this.section= newSection;
        }
} 
