import { Teacher } from "./persona";
import { Student } from "./persona";
import { PersonServicio } from "./persona";
const estudiante1 = new Student ("José", "Ruiz", 123, "Soltero", "Software" );
const teacher1 = new Teacher ("Manuel", "Rivas", 456, "Casado", 2014, 103, "Contabilidad" );
const personServicio1 = new PersonServicio ("Abel", "Velez", 123, "Soltero", 2004, 28, "Matematicas", );
 estudiante1.cambiarEstadoCivil("Casado");
 teacher1.removerDespacho(233);
 estudiante1.matricularCurso("Biologia");
 teacher1.cambiarDepartamento("Literatura");
 personServicio1.moverASeccion("Secretaria");

 console.log("Información del estudiante:");
 console.log(estudiante1);

 console.log("Información del profesor:");
 console.log(teacher1);

 console.log("Información del personal de servicio:");
 console.log(personServicio1);