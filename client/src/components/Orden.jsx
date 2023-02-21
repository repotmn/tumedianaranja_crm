import React from 'react';
import '../css/components.css';



function Orden () {
  return (
  <>
  <div className="orden">
    <div className="container d-flex justify-content-end">
      <div className= "box">
        <p>Orden:</p>
      </div>
    </div>
{/****************************************************************Tipificación****************************************************************/}
    <form className="tipificacion">  
      <div className="row g-0">
      <div className="col">
            <div className="row mt-3">
              <label>fono empresa 1</label>
            </div>
              <div className="row mt-3 ">
              <label htmlFor="" className="col-xl-2">Fono</label>
                <div className="col-xl-10">
                  <input className="control1" type="text" id="fono_empresa" name="fono_empresa" readOnly/>
                </div>
                <label htmlFor="" className="col-xl-2">Tipificar</label>
                <div className="col-xl-10">
                  <select className= "select">
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
                </div>
                <label className="col-xl-2">comentario</label>
                <div className="col-xl-10">
                  <input className="control1" type="text" id="comentario_empresa" name="comentario_empresa" readOnly />
                </div>   
             </div>       
      </div>
        <div className="col">
            <div className="row mt-3">
            <label>fono empresa 2</label>
            </div>
            <div className="mt-3 row">
                <label className="col-xl-2">Fono</label>
                <div className="col-xl-10">
                  <input className="control1" type="text" readOnly id="fono_empresa2" name="fono_empresa2"/>
                </div>
                <label className="col-xl-2">Tipificar</label>
                <div className="col-xl-10">
                  <select className="select">
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
                </div>
                <label className="col-xl-2">comentario</label>
                <div className="col-xl-10">
                  <input className="control1" type="text" id="comentario_empresa2" name="comentario_empresa2" readOnly />
                </div>
             </div>
        </div>
      </div>
      <div className= "container-fluid">
      <table className="table-responsive">
        <thead>
            <tr>
            <th>Nombre Contacto:</th>
            <th>Nivel de decisión:</th>
            <th>Area de decisión:</th>
            <th>Email:</th>
            <th>Fono:</th>
            <th>Fono 2:</th>
            <th>Tipificar:</th>
            <th>Comentario:</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td><input className = "control2" type = "text" id="nombre_contacto" name ="nombre_contacto"readOnly/></td>
            <td><input className = "control2" type = "text" id="nivel_decision" name="nivel_decision"readOnly /></td>
            <td><input className = "control2" type = "text" id="area_decision"  name= "area_decision"readOnly /></td>
            <td><input className = "control2" type = "email"id="mail" name="mail"  readOnly /></td>
            <td><input className = "control2" type = "tel"  id="fono" name ="fono_contacto" readOnly style={{width:"150px"}}/></td>
            <td><input className = "control2" type = "tel"  id="fono_2" readOnly name="fono_2_contacto"style={{width:"150px"}}/></td>
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
            </select></td>
            <td><input className = "control2" type = "text" id="comentario_contacto" name="comentario_contacto" readOnly/></td>
            </tr>
        </tbody>
    </table>
</div>  
    </form>
    <div className="col d-flex justify-content-end">
            <div className="siguiente" >
                    <button type="submit" className="btn btn-primary" >Siguiente</button>
            </div>
      </div> 
  </div>
  </>
  )
}

export default Orden