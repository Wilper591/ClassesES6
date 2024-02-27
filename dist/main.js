"use strict";

var _impuestos = require("./impuestos.js");
var _cliente = require("./cliente.js");
var impuestosCliente = new _impuestos.Impuestos(10000, 900);
var clienteNuevo = new _cliente.Cliente("Jorge", impuestosCliente);
console.log(impuestosCliente);
console.log(clienteNuevo);
clienteNuevo.calcularImpuesto();
impuestosCliente.setMontoBrutoAnual(30000);
impuestosCliente.setDeducciones(2000);
console.log(impuestosCliente);
clienteNuevo.calcularImpuesto();
console.log(clienteNuevo.getNombre());
clienteNuevo.setNombre("Alberto");
console.log(clienteNuevo.getNombre());