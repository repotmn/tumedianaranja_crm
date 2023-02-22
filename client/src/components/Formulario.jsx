import React, { useState, useEffect } from 'react';
import '../css/components.css';
import Modals from '../components/Modals';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

function Formulario(){
    // Estas constantes tiene como funcion ofrecer un valor a los fonos de la empresa y contactos para
    // realizar la funcion del copiar el numero de telefono dentro de los inputs
    // haciendo click en el icono de portapapeles (Motivo: testeo de la funcion de la copia).
    const [value,setValue] =   useState("")
    const [value2,setValue2] = useState("")
    const [value3,setValu3] =  useState("")
    const [value4,setValue4] = useState("")

    // Variables para UseState
    const [empresas, setEmpresas] = useState([])
    // Funcion para hacer request de nuestra API
    const fetchEmpresas = () => {
      fetch("http://localhost:8800/empresas")
        .then(response => response.json())
        .then(emp => setEmpresas(emp))
        .catch(error => console.log(error))
    }
  // Llamamos a los metodos fetch
    useEffect(() => {
      fetchEmpresas()
    }, [])
  return (
    <>
      {/* Este div "formulario", esta contenido los campos rut, razon social y campanaña y 
      los botones "acciones y guadar", estos botones se encuentran en el componente "Modals"*/}
      <div className="formulario">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Este col contiene el rut y razon social del lead o empresa*/}

            {empresas.map((empresa) => (
              <div className="col">
              <table className="content-table2">
                <tbody>
                  <tr>
                    <th>Rut</th>
                    <td>{empresa.rut_empresa}</td>
                  </tr>
                  <tr>
                    <th>Razon social</th>
                    <td>{empresa.razon_social}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
            
            {/* Este col contiene el label e input de campaña, con el enlace "cambiar" con 
            el proposito de cambiar campaña*/}
            <div className="col text-center">
              <h6>Campaña</h6>
              <p className='campaña' style={{marginLeft:"60px",marginRight:"60px"}}>Fontana</p>
              <a href ="">Cambiar</a>
            </div>
            {/* Este col contiene el componente Modals, que muestra el boton guardar y el 
            boton acciones que contiente los modals de ingreso de contacto a+ y llamadas pendientes 
            por llamar*/}
            <div className="col">
              <Modals></Modals>
            </div>
          </div>                
          </div>
        </div>
      {/* En este div "container-fluid" contiene la informacion del lead o empresa, cada uno con su label e input*/}
      {empresas.map((empresa) => (
      <div className="container-fluid">
       <table className="content-table">
          <tbody >
            <tr>
              <th>SII - RUBRO ECONÓMICO</th>
              <div>
              <td>{empresa.rubro_economico}</td>
              </div>
            </tr>
            <tr>
              <th>SII - SURUBRO ECONÓMICO</th>
              <td>  
                {empresa.sub_rubro_economico}</td>
            </tr>
            <tr>
              <th>SII - ACTIVIDAD ECONÓMICA</th>
              <td>{empresa.actividad_economica}</td>
            </tr>
            <tr>
              <th>SII - REGIÓN</th>
              <td>
                {empresa.region}
              </td>
            </tr>
            <tr>
              <th>SII - PROVINCIA</th>
              <td>{empresa.provincia}</td>
            </tr>
            <tr>
              <th>SII - COMUNA</th>
              <td>
                {empresa.comuna}
              </td>
            </tr>
            <tr>
              <th>INICIO DE ACTIVIDADES</th>
              <td>
                {empresa.fecha_inicio_actividad}
              </td>
            </tr>
            <tr>
              <th>SII - TAMAÑO</th>
              <td>
               {empresa.tamano_empresa}
               </td>
            </tr>
            <tr>
              <th>SII- TRABAJADORES</th>
              <td>
               {empresa.cantidad_trabajadores}
               </td>
            </tr> 
          </tbody>
        </table>
      </div>
      ))}
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
              <td className='td-fono'>{value2}</td>
              <td><CopyToClipboard text={value2}>
                    <button className="btn btn-outline-light" id="button-addon2"><HiOutlineClipboardDocumentList style={{height: "25px",width: "25px"}}></HiOutlineClipboardDocumentList></button>
              </CopyToClipboard>
              </td>
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
export default Formulario