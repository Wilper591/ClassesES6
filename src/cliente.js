export class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    getNombre() {
        if(typeof this._nombre === 'string') {
            return this._nombre;
        }
    }

    setNombre(nuevo_nombre) {
        if(typeof nuevo_nombre === 'string') {
            this._nombre = nuevo_nombre;
        }
    }

    calcularImpuesto() {
      // Acceder a las propiedades del objeto impuesto
      const montoBrutoAnual = this._impuesto._montoBrutoAnual;
      const deducciones = this._impuesto._deducciones;

      // Calcular el impuesto
      const impuestoCalculado = (montoBrutoAnual - deducciones) * 0.21;

      // Devolver el impuesto calculado
      return console.log(impuestoCalculado);
      
    }

}
