import React, { useState, useEffect } from 'react';
import '../css/components.css';
import Modals from '../components/Modals';

function Formulario(){
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

            {empresas.map((empresa, rut_empresa) => (
              <div className="col">
              <table className="content-table2">
                <tbody>
                  <tr>
                    <th>Rut</th>
                    <td key={rut_empresa}>{empresa.rut_empresa}</td>
                  </tr>
                  <tr>
                    <th>Razon social</th>
                    <td key={rut_empresa}>{empresa.razon_social}</td>
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
      <div className="container-fluid">
       <table className="content-table">
          <tbody >
            <tr>
              <th>SII - RUBRO ECONÓMICO</th>
              <div>
              <td></td>
              </div>
            </tr>
            <tr>
              <th>SII - SURUBRO ECONÓMICO</th>
              <td></td>
            </tr>
            <tr>
              <th>SII - ACTIVIDAD ECONÓMICA</th>
              <td></td>
            </tr>
            <tr>
              <th>SII - REGIÓN</th>
              <td></td>
            </tr>
            <tr>
              <th>SII - PROVINCIA</th>
              <td></td>
            </tr>
            <tr>
              <th>SII - COMUNA</th>
              <td></td>
            </tr>
            <tr>
              <th>INICIO DE ACTIVIDADES</th>
              <td></td>
            </tr>
            <tr>
              <th>SII - TAMAÑO</th>
              <td></td>
            </tr>
            <tr>
              <th>SII- TRABAJADORES</th>
              <td></td>
            </tr> 
          </tbody>
        </table>
      </div>
    </>
  )
}
export default Formulario