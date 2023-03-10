import React from "react";
import "../css/components.css";
import icon from "../assets/favicon.ico";

function Modals() {
  return (
    <>
        <div className="container-fluid">
            <div className="row pt-5 pb-1 row-cols-auto justify-content-end">
                {/*En este col contiene los modals de ingreso contacto +a y llamadas pendientes por llamar*/}
                    <div className="col" >
                    {/*En este div "Modal" contiene el ingreso contacto a+*/}
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered  modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <img className="icono" src={icon} style={{height: "50px",width: "60px"}}></img>
                                        <h5 className="modal-title" id="exampleModalLabel">Carga dato A+</h5>
                                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                        <div className="modal-body">
                                            <div className="container px-4 ">
                                                {/*En este row contiene la informacion a ingresar del contacto a+*/}
                                                <form className="row">
                                                    {/*En este col contiene los inputs Rut, nombre contacto, nivel de decision 
                                                    , fono, matricula del contacto a+*/}
                                                    <div className="col">
                                                        <label htmlFor="">Rut</label>
                                                            <div className="col">
                                                                <input className = "control-contacto" type ="text" id="rut" name="rut" readOnly/>
                                                            </div>
                                                        <label htmlFor="">Nombre de contacto</label>
                                                        <div className="col">
                                                            <input className = "control-contacto" type ="text" id="contacto" name="contacto" />
                                                        </div>
                                                        <label htmlFor=""> Nivel de decisi??n </label>
                                                        <div className="col">
                                                            <select className= "control-contacto">
                                                                <option value="0">-Seleccione-</option>
                                                                <option value="representante_legal">Representante Legal/Socio</option>
                                                                <option value="gerente_general">Gerente General</option>
                                                                <option value="gerente_area">Gerente de ??rea</option>
                                                                <option value="subgerente_area">Subgerente de ??rea</option>
                                                                <option value="jefe_area">Jefe o Encargado de ??rea</option>
                                                            </select>
                                                        </div>
                                                        <label htmlFor="">Fono</label>
                                                        <div className="col">
                                                            <input className = "control-contacto" type="tel" id="fono_contacto" name="fono_contacto" />
                                                        </div>
                                                        <label htmlFor="">Matr??cula</label>
                                                        <div className="col">
                                                            <select className= "control-contacto" id="matricula_a_plus" name="matricula_a_plus">
                                                                <option value="0">-Seleccione-</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    {/*En este col contiene los inputs razon social, mail, area de decision, fono 2
                                                    y campa??a del contacto a+*/}
                                                    <div className="col">
                                                        <label htmlFor=""> Raz??n Social</label>
                                                        <div className="col">
                                                            <input className = "control-contacto" type = "text" id="razon_social" name="razon_social" readOnly/>
                                                        </div>
                                                        <label htmlFor=""> Mail </label>
                                                            <div className="col">
                                                            <input className = "control-contacto" type = "email" id="mail" name="mail"/>
                                                        </div>
                                                        <label> Area de decisi??n </label>
                                                        <div className="col">
                                                        <select className= "control-contacto">
                                                                <option value="0">-Seleccione-</option>
                                                                <option value="operaciones">Operaciones</option>
                                                                <option value="recursos_humanos">Recursos Humanos</option>
                                                                <option value="administracion_finanzas">Administraci??n y Finanzas</option>
                                                                <option value="gerencia_general">Gerencia General</option>
                                                                <option value="representante_legal">Representante Legal/Socio</option>
                                                        </select>
                                                        </div>
                                                        <label htmlFor=""> Fono 2 </label>
                                                        <div className="col">
                                                            <input className = "control-contacto" type = "tel" id="fono_2_contacto" name="fono_2_contacto"/>
                                                        </div>
                                                        <label htmlFor=""> Campa??a </label>
                                                        <div className="col">
                                                            <input className = "control-contacto" type = "text" id="campana" name="campana"/>
                                                        </div>
                                                    </div>
                                                    <div>
                                                    <button type="submit" className="btn btn-success">Guardar</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                        </div>
                                    </div>
                            </div>
                        </div>
                    {/*En este div "Modal" contiene la llamadas pendientes por llamar*/}
                        <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered  modal-xl">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <img className="icono" src={icon} style={{height: "50px",width: "60px"}}></img>
                                        <h5 className="modal-title" id="exampleModalLabel">Listado Contactos Pendientes por llamar </h5>
                                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                        <div className="modal-body">
                                            <form className="container px-4 ">
                                                {/*En este row contiene la busqueda de llamadas pendientes por llamar con el input rut */}
                                                <div className="row">
                                                    <div className="col-auto">
                                                        <label htmlFor="">Rut </label>
                                                            <div className="col">
                                                                <input className = "control-busqueda-rut" type ="text" id="rut" name="rut"/>
                                                            </div>
                                                    </div>
                                                    <div className="col-auto">
                                                        <label htmlFor="">Raz??n Social </label>
                                                            <div className="col">
                                                                <input className = "control-busqueda-razon" type ="text" id="razon_social" name="razon_social" readOnly/>
                                                            </div>
                                                    </div>
                                                    <div className="col">
                                                        <button type="submit" className="btn btn-secondary">Buscar</button>
                                                    </div>
                                                </div>
                                                {/*En este row contiene la tabla en la que se debe mostrar la informacion filtrada por el rut */}
                                                <div className="row">
                                                    <table className="table-responsive table-bordered">
                                                        <thead>
                                                            <tr>
                                                            <th scope="col">Fecha Llamada</th>
                                                            <th scope="col">Nombre Contacto</th>
                                                            <th scope="col">Tel??fono</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                            <th>1</th>
                                                            <td>2</td>
                                                            <td>3</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>                                                 
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                        </div>
                                </div>
                            </div>
                        </div>
                        {/*En este div "btn-group" es el boton acciones que hace la funcion de un toggle que
                         despliegua las opciones de ingresar contacto a+ y llamadas pendientes por llamar*/}
                        <div className="btn-group dropstart">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Acciones
                            </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal">Ingresar contacto A+</a>
                                    <a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal3">Pendientes por llamar</a>
                                </ul>
                        </div>
                    </div>
                    {/*En este col contiene el boton guardar, que debera guardar la tipificacion realizada en la orden*/}
                    <div className="col">
                        <button className="btn btn-primary " type="submit">Guardar</button>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Modals
