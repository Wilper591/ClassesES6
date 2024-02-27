import { Impuestos } from './impuestos.js';
import { Cliente } from './cliente.js';


let impuestosCliente = new Impuestos(10000, 900);
let clienteNuevo = new Cliente("Jorge", impuestosCliente);

console.log(impuestosCliente);
console.log(clienteNuevo)
clienteNuevo.calcularImpuesto();

impuestosCliente.setMontoBrutoAnual(30000);
impuestosCliente.setDeducciones(2000);
console.log(impuestosCliente);
clienteNuevo.calcularImpuesto();

console.log(clienteNuevo.getNombre());
clienteNuevo.setNombre("Alberto");
console.log(clienteNuevo.getNombre());
