import React, { useState, useEffect } from 'react';
import '../css/components.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";


function Orden () {
// Estas constantes tiene como funcion ofrecer un valor a los fonos de la empresa y contactos para
// realizar la funcion del copiar el numero de telefono dentro de los inputs
// haciendo click en el icono de portapapeles (Motivo: testeo de la funcion de la copia).
  const [value,setValue] =   useState("+65959584534")
  const [value2,setValue2] = useState("+89437534124")
  const [value3,setValu3] =  useState("+65959584578")
  const [value4,setValue4] = useState("+89437534656")

  return (
<>
  {/*En este div "container" contiene la caja con orden y el supuesto numero de orden*/}
    <div className="container d-flex justify-content-end">
      <div className= "box">
        <p>Orden:</p>
      </div>
    </div>
  {/*En este div "tipificacion" contiene la estructura de la tipifacion de los telefonos de la empresa y del contacto*/}
    <div className="tipificacion">
    {/*En este  div "container-table" contiene el fono 1 y 2 con su tipificacion y comentario*/}
      <div className="container-table text-nowrap"> 
        <table className="content-table-fono" >
          <tbody>
            <tr>
              <th>Fono empresa 1</th>
              <td className='td-fono'>{value}</td>
              <td><CopyToClipboard text={value}>
                    <button className="btn btn-outline-light" id="button-addon2"><HiOutlineClipboardDocumentList style={{height: "25px",width: "25px"}}></HiOutlineClipboardDocumentList></button>
              </CopyToClipboard></td>
              <th>tipificación</th>
              <td ><select className= "select" style={{width:"190px"}}>
                <option value=""></option>
                <option value="sin_contacto">Sin contacto</option>
                <option value="numero_incorrecto">Número incorrecto</option>
                <option value="volver_llamar">Volver a llamar</option>
                <option value="rechazo_inmediato">Rechazo inmediato</option>
                <option value="no_interesa">No le interesa</option>
                <option value="no_requisitos">No cumple requisitos</option>
                <option value="agenda">Agenda</option>
                <option value="lista_negra">Lista negra</option>
                <option value="sin_datos">Sin datos</option>
            </select></td>
            </tr>
            <tr>
              <th>Comentario</th>
              <td className='td-fono' colSpan={4}></td>
            </tr>
          </tbody>
        </table>
        <table className="content-table-fono">
          <tbody>
            <tr>
              <th>Fono empresa 2</th>
              <td className='td-fono' >{value2}</td>
              <td><CopyToClipboard text={value2}>
                    <button className="btn btn-outline-light" id="button-addon2"><HiOutlineClipboardDocumentList style={{height: "25px",width: "25px"}}></HiOutlineClipboardDocumentList></button>
              </CopyToClipboard></td>
              <th>tipificación</th>
              <td ><select className= "select" style={{width:"190px"}}>
                <option value=""></option>
                <option value="sin_contacto">Sin contacto</option>
                <option value="numero_incorrecto">Número incorrecto</option>
                <option value="volver_llamar">Volver a llamar</option>
                <option value="rechazo_inmediato">Rechazo inmediato</option>
                <option value="no_interesa">No le interesa</option>
                <option value="no_requisitos">No cumple requisitos</option>
                <option value="agenda">Agenda</option>
                <option value="lista_negra">Lista negra</option>
                <option value="sin_datos">Sin datos</option>
            </select></td>
            </tr>
            <tr>
              <th>Comentario</th>
              <td className='td-fono' colSpan={4}></td>
            </tr>
          </tbody>
        </table>
      </div>
      {/*En este div "container-fluid" contiene la informacion del contacto a tipificar en una tabla*/}
      <div className= "container-fluid mt-5">
        <table className="table table-responsive table-bordered">
        {/*En este thead se ubica los nombres de la informacion del contacto a tipificar*/}
        <thead className="table-warning">
            <tr>
              <th>Contacto</th>
              <th>Nivel de decisión</th>
              <th>Area de decisión</th>
              <th>Email</th>
              <th>Fono</th>
              <th>Fono 2</th> 
              <th>Tipificar</th>
              <th>Comentario</th>
            </tr>
        </thead>
        {/*En este tbody contiene los espacios de datos para cada nombre que esta ubicado en el thead*/}
        <tbody className=" table-group-divider ">
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
              {value3} 
              <CopyToClipboard text={value3}>
                    <button className="btn btn-outline-light" id="button-addon2"><HiOutlineClipboardDocumentList style={{height: "25px",width: "25px"}}></HiOutlineClipboardDocumentList></button>
              </CopyToClipboard></td>
              <td>
              {value4} 
              <CopyToClipboard text={value4}>
                    <button className="btn btn-outline-light" id="button-addon2"><HiOutlineClipboardDocumentList style={{height: "25px",width: "25px"}}></HiOutlineClipboardDocumentList></button>
              </CopyToClipboard>
              </td>
              <td><select className= "select" style={{width:"190px"}}>
                <option value=""></option>
                <option value="sin_contacto">Sin contacto</option>
                <option value="numero_incorrecto">Número incorrecto</option>
                <option value="volver_llamar">Volver a llamar</option>
                <option value="rechazo_inmediato">Rechazo inmediato</option>
                <option value="no_interesa">No le interesa</option>
                <option value="no_requisitos">No cumple requisitos</option>
                <option value="agenda">Agenda</option>
                <option value="lista_negra">Lista negra</option>
                <option value="sin_datos">Sin datos</option>
              </select>
              </td>
              <td ></td>
            </tr>
        </tbody>
        </table>
      </div>  
    </div>
      {/*En este col contiene el boton "siguiente"*/}
      <div className="col-md d-flex justify-content-end">
        <div className="siguiente" >
          <button type="submit" className="btn btn-primary" >Siguiente</button>
        </div>
      </div> 
</>
  )
}

export default Orden