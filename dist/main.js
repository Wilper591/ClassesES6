"use strict";

var _impuestos = require("./impuestos.js");
var _cliente = require("./cliente.js");
var impuestos = new _impuestos.Impuestos(10000, 900);
var clienteNuevo = new _cliente.Cliente("Jorge", impuestos);
console.log(clienteNuevo);
console.log(impuestos);
clienteNuevo.calcularImpuesto();
console.log(clienteNuevo.calcularImpuesto());
impuestos.montoBrutoAnual = 20000;
impuestos.deducciones = 3500;
console.log(clienteNuevo.calcularImpuesto());
clienteNuevo.nombre = "Alberto";
console.log(clienteNuevo);