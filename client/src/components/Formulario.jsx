import React from 'react';
import '../css/components.css';
import Modals from '../components/Modals';


function Formulario(){
  return (
    <>
      <div>
        <div className="formulario">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col">
              <label htmlFor="" className="col">rut</label>
              <input className ="control2" type ="text" id="rut" name="rut" readOnly/>
              <br></br>
              <label htmlFor="" className="col">razón social</label>
              <input className ="control1" type ="text" id="razon_social" readOnly/>
            </div>
            <div className="col col-xl-3 text-center">
              <div>
                <label>campaña</label>
              </div>
              <input className ="control2 text-center" type ="text" id="campana" name="campana" style={{width:"320px"}} readOnly/>
              <br></br>
              <a href ="">Cambiar</a>
            </div>
            <div className="col">
              <Modals></Modals>
            </div>
          </div>                
          </div>
        </div>
       <form className="container-fluid">
          <div className="row mt-3">
                <div className="col-xl-2 text-nowrap">
                  <label htmlFor="" >SII - Rubro Económico</label>
                </div>
                <div className="col-xl-8 mx-4">
                  <input type="text" className="control1" id="rubro_economico" name="rubro_economico" readOnly/>
                </div>
          </div>
          <div className="row mt-1">
                <div className="col-xl-2 text-nowrap">
                  <label htmlFor="">SII - Subrubro Económica</label>
                </div>
                <div className="col-xl-8 mx-4">
                  <input type="text" className="control1" id="subrubro_economico" name="subrubro_economico" readOnly/>
                </div>
          </div>
          <div className="row mt-1">
                <label htmlFor="" className="col-xl-2 text-nowrap">SII - Actividad Económica</label>
                <div className="col-xl-8 mx-4">
                  <input type="text" className="control1" id="actividad_economica" name="actividad_economica" readOnly/>
                </div>
          </div>
          <div className="row mt-1">
                <label htmlFor="" className="col-xl-2 text-nowrap">SII - Región</label>
                <div className="col-xl-8 mx-4">
                  <input type="text" className="control1" id="region" name="region" readOnly/>
                </div>
          </div>
          <div className="row mt-1">
                <label htmlFor="" className="col-xl-2 text-nowrap">SII - Provincia</label>
                <div className="col-xl-8 mx-4">
                  <input type="text" className="control1" id="provincia"  name="provincia" readOnly/>
               </div>
          </div>
          <div className="row mt-1">
                <label htmlFor="" className="col-xl-2 text-nowrap">SII - Comuna</label>
                <div className="col-xl-8 mx-4">
                  <input type="text" className="control1" id="comuna" name="comuna" readOnly/>
                </div>
          </div>
          <div className="row mt-1">
                <label htmlFor="" className="col-xl-2 text-nowrap">Inicio de Actividades</label>
                <div className="col-xl-8 mx-4">
                  <input type="text" className="control1" id="inicio_actividades" name="inicio_actividades" readOnly/>
                </div>
          </div>
          <div className="row mt-1">
                <label htmlFor="" className="col-xl-2 text-nowrap">SII - Tamaño</label>
                <div className="col-xl-8 mx-4">
                  <input type="text" className="control1" id="tamaño" name="tamaño" readOnly/>
                </div>
          </div>
          <div className="row mt-1">
                <label className="col-xl-2 text-nowrap">SII - Trabajadores</label>
                <div className="col-xl-8 mx-4">
                  <input type="text" className="control1" id="trabajadores" name="trabajadores" readOnly/>
                </div>
          </div>
          <div className="row mt-1">
                <label htmlFor="" className="col-xl-2 text-nowrap">Dato Complementario</label>
                <div className="col-xl-8 mx-4">
                  <input type="text" className="control1" id="dato_complementario" name="dato_complementario" readOnly/>
                </div>
          </div>
          <div className="row mt-1">
                <label htmlFor="" className="col-xl-2 text-nowraps">Categoría TMN</label>
                <div className="col-xl-8 mx-4">
                  <input type="text" className="control1" id="categoria_tmn" name="categoria_tmn" readOnly/>
                </div>
          </div>
      </form>
      
      </div>
    </>
  )
}
export default Formulario