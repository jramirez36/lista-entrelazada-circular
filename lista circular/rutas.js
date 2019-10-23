//funciones nuevas push sirve para subir algo a una cadena , pop elimina el ultimo elemento de un array
class Administracion {
    constructor(tabla, llave) 
    {
        this._lista = 0;
        this._tabla = tabla;
        this._llave = llave;
        this._contador = 0;
        this._inicio;
        this._final;
    }
    agregar(llave, nombre, horaSalida, Tiempo, descripcion) 
    {   
                let aux = 0;
                this._llave = llave;
                if (llave === '' || llave === (this._contador + 1) || llave > this._contador) 
                {
                    aux = this._lista;
                    if(this._contador === 0)
                    {
                        this._lista = new Ruta(this._llave, nombre, horaSalida, Tiempo, descripcion);
                        this._inicio = this._lista;
                    }
                    else
                    {
                        while(aux._siguiente === this._inicio)
                            {
                                aux = aux._siguiente;
                            }
                            aux._siguiente = new Ruta(this._llave, nombre, horaSalida, Tiempo, descripcion);
                            aux._siguiente._anterior = aux;
                            aux._siguiente._siguiente = this._inicio;
                            this._final =  aux._siguiente;
                            this._inicio._anterior = this._final;
                    }
                    this._contador++;
                    this._llave++;
                    alert('articulo agregado');
                } 
                else if (Number(llave) > 0 && Number(llave) <= this._contador) 
                {
                    aux = this._lista;
                    let auxc = 1;
                    while(llave > auxc+1)
                    {
                        aux = aux._siguiente;
                        auxc++;
                    }
                    if(llave === 1)
                    {
                    let aux2 = new Ruta(this._llave, nombre, horaSalida, Tiempo, descripcion);
                    aux2._siguiente = aux;
                    aux2._siguiente._anterior = aux2;
                    aux = aux2;
                    this._inicio = aux;
                    this._inicio._anterior = this._final;
                    }
                    else if(llave < this._final._codigo)
                    {
                    let aux2 = new Ruta(this._llave, nombre, horaSalida, Tiempo, descripcion);
                    aux2._siguiente = aux._siguiente;
                    aux2._anterior = aux;
                    aux2._siguiente._anterior = aux2;
                    aux._siguiente = aux2;
                    }
                    else
                    {
                        aux = aux._siguiente;
                        aux._siguiente = new Ruta(this._llave, nombre, horaSalida, Tiempo, descripcion);
                        aux._siguiente._anterior = aux._siguiente;
                        aux._siguiente._siguiente = this._inicio;
                        this._final = aux._siguiente;
                    }
                    this._contador++;
                    this._llave++;
                    alert('articulo agregado correctamente');
                } 
                else
                {
                    alert('Posicion no válida');
                }
                this.impresion();
    }
    buscar(codigo) 
    {
        let buscador;
        codigo = Number(codigo);
        let aux = this._lista;
            if (aux._codigo === codigo) 
                {
                    buscador = this._lista;
                    alert('Articulo encontrado. ');
                }
            else
                {
                    while(aux._codigo != codigo)
                    {
                        aux = aux._siguiente;
                    }
                    if(aux._codigo === codigo)
                    {
                        buscador = aux.toString();
                        alert('Articulo encontrado. ');
                    }
                    else
                    {
                        alert('Articulo no encontrado. ');
                    }
                }
            return buscador;
    }
    eliminar(codigoEliminar) 
    {
        codigoEliminar = Number(codigoEliminar);
        if (this.revision(codigoEliminar) === 1) 
        {
            let aux = this._lista;
            if(aux._codigo === codigoEliminar)
            {
                this._lista = aux._siguiente;
            }
            else
            {
                while(aux._siguiente === this._inicio)
                {
                    if(aux._siguiente._codigo === codigoEliminar)
                        {
                            console.log("llegue a eliminar");
                            aux._siguiente = aux._siguiente._siguiente;
                            aux._siguiente._Tiempo += aux._siguiente._siguiente._Tiempo;
                        }
                        aux = aux._siguiente;
                }
            }
            alert('Se ha eliminado el articulo correctamente');
        } 
        else 
        {
            alert('El código ingresado no existe, por favor verifique de nuevo');
        }
        this.impresion();
    }
    revision(codigo) {
        codigo = Number(codigo);
        let revisor = -1;
        let aux = this._lista;
            if (aux._codigo === codigo) 
                {
                    revisor = 1;
                }
            else
                {
                    while(aux._codigo != codigo && aux.codigo != this._inicio)
                    {
                        aux = aux._siguiente;
                    }
                    if(aux._codigo === codigo)
                    {
                        revisor = 1;
                    }
                }
            return revisor;
    }
    impresion() {
        this._tabla.innerHTML = '';
        let etiquetaP = [];
        let aux = this._lista;
        let auxc = 0;
        for (let i = 0; i < this._contador; i++) 
        {
            etiquetaP[i] = document.createElement('p');
        }
        while(aux != this._inicio || auxc === 0 && auxc < this._contador)
            {
                etiquetaP[auxc].innerHTML = aux.toString();
                this._tabla.appendChild(etiquetaP[auxc]);
                auxc++;
                aux = aux._siguiente;
            }
    }
    selecionarInicio(inicio)
    {
        this._tabla.innerHTML = '';
        let etiquetaP = [];
        let aux = this._lista;
        while(aux._codigo != inicio)
        {
            aux = aux._siguiente;
        }
        this._inicio = aux;
        let auxc = 0;
        for (let i = 0; i < this._contador; i++) 
        {
            etiquetaP[i] = document.createElement('p');
        }
        while(auxc === 0 || aux != this._inicio && auxc < this._contador)
            {
                etiquetaP[auxc].innerHTML = aux.toString();
                this._tabla.appendChild(etiquetaP[auxc]);
                auxc++;
                aux = aux._anterior;
            }
    }

    get articulo() 
    {
        return this._lista;
    }
    get llave() 
    {
        return this._llave;
    }
}
//impreciones
class Ruta{
    constructor(codigo, nombre, horaSalida, Tiempo, descripcion)
    {
        this._codigo = codigo;
        this._nombre = nombre;
        this._horaSalida = horaSalida;
        this._Tiempo = Tiempo;
        this._descripcion = descripcion;
        this._siguiente;
        this._anterior;
    }
    get codigo()
    {
        return this._codigo;
    }
    toString()
    {
        return 'Código: ' + this._codigo + ' Nombre: ' + this._nombre + ' Hora de salida: ' + this._horaSalida + ' Llegada: ' + (this._horaSalida + this._Tiempo) + ' Descripción: ' + this._descripcion ;
    }
}
//botones
var almacen = new Administracion(document.querySelector('#tablaRutas'), Number(document.querySelector('#codigo').value));
document.querySelector('#agregar').addEventListener('click', () => {
    let llave = Number(document.querySelector('#codigo').value);
    let nombre = document.querySelector('#nombre').value;
    let horaSalida = document.querySelector('#precio').value;
    let Tiempo = document.querySelector('#cantidad').value;
    let descripcion = document.querySelector('#descripcion').value;

    almacen.agregar(llave, nombre, horaSalida, Tiempo, descripcion);
    document.querySelector('#codigo').value = almacen.llave;
});
document.querySelector('#buscar').addEventListener('click', () => {
    let buscarRuta = almacen.buscar(document.querySelector('#buscarCodigo').value);
    document.querySelector('#tablaBuscar').innerHTML = buscarRuta;
});
document.querySelector('#eliminar').addEventListener('click', () => {
    almacen.eliminar(document.querySelector('#eliminarCodigo').value);
    document.querySelector('#codigo').value = almacen.llave;
});
document.querySelector('#selecionarInicio').addEventListener('click', () => {
    let inicio = Number(document.querySelector('#Inicio').value);
    almacen.selecionarInicio(inicio);
});