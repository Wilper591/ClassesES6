import { Impuestos } from './impuestos.js';
import { Cliente } from './cliente.js';


let impuestos = new Impuestos(10000, 900);
let clienteNuevo = new Cliente("Jorge", impuestos);
console.log(clienteNuevo);
console.log(impuestos);

clienteNuevo.calcularImpuesto();
console.log(clienteNuevo.calcularImpuesto());

impuestos.montoBrutoAnual = 20000;
impuestos.deducciones = 3500;
console.log(clienteNuevo.calcularImpuesto());

clienteNuevo.nombre = "Alberto";
console.log(clienteNuevo)
