export class Impuestos {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    getMontoBrutoAnual() {
        if(typeof this._montoBrutoAnual === 'number'){
            return this._montoBrutoAnual;
        }
    }

    setMontoBrutoAnual(nuevo_montoBrutoAnual) {
        if (typeof nuevo_montoBrutoAnual === 'number') {
          this._montoBrutoAnual = nuevo_montoBrutoAnual;
        }
    }

    getDeducciones() {
        if(typeof this._deducciones === 'number') {
            return this._deducciones;
        }
    }

    setDeducciones(nueva_deducciones) {
        if (typeof nueva_deducciones === 'number') {
          this._deducciones = nueva_deducciones;
        }
    }
}