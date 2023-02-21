import React from "react";
import "../css/components.css";
import icon from "../assets/favicon.ico";

function Formulario() {
  return (
    <>
        <div className="container-fluid">
                <div className="row pt-5 pb-1 row-cols-auto justify-content-end">
                    <div className="col" >
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
                                                <form className="row">
                                                    <div className="col">
                                                        <label htmlFor="">Rut</label>
                                                            <div className="col">
                                                                <input className = "control-contacto" type ="text" id="rut" name="rut" readOnly/>
                                                            </div>
                                                        <label htmlFor="">Nombre de contacto</label>
                                                        <div className="col">
                                                            <input className = "control-contacto" type ="text" id="contacto" name="contacto" />
                                                        </div>
                                                        <label htmlFor=""> Nivel de decisión </label>
                                                        <div className="col">
                                                            <select className= "control-contacto">
                                                                <option value="0">-Seleccione-</option>
                                                                <option value="representante_legal">Representante Legal/Socio</option>
                                                                <option value="gerente_general">Gerente General</option>
                                                                <option value="gerente_area">Gerente de Área</option>
                                                                <option value="subgerente_area">Subgerente de Área</option>
                                                                <option value="jefe_area">Jefe o Encargado de Área</option>
                                                            </select>
                                                        </div>
                                                        <label htmlFor="">Fono</label>
                                                        <div className="col">
                                                            <input className = "control-contacto" type="tel" id="fono_contacto" name="fono_contacto" />
                                                        </div>
                                                        <label>Matrícula</label>
                                                        <div className="col">
                                                            <select className= "control-contacto" id="matricula_a_plus" name="matricula_a_plus">
                                                                <option value="0">-Seleccione-</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <label htmlFor=""> Razón Social</label>
                                                        <div className="col">
                                                            <input className = "control-contacto" type = "text" id="razon_social" name="razon_social" readOnly/>
                                                        </div>
                                                        <label htmlFor=""> Mail </label>
                                                            <div className="col">
                                                            <input className = "control-contacto" type = "email" id="mail" name="mail"/>
                                                        </div>
                                                        <label> Area de decisión </label>
                                                        <div className="col">
                                                        <select className= "control-contacto">
                                                                <option value="0">-Seleccione-</option>
                                                                <option value="operaciones">Operaciones</option>
                                                                <option value="recursos_humanos">Recursos Humanos</option>
                                                                <option value="administracion_finanzas">Administración y Finanzas</option>
                                                                <option value="gerencia_general">Gerencia General</option>
                                                                <option value="representante_legal">Representante Legal/Socio</option>
                                                        </select>
                                                        </div>
                                                        <label htmlFor=""> Fono 2 </label>
                                                        <div className="col">
                                                            <input className = "control-contacto" type = "tel" id="fono_2_contacto" name="fono_2_contacto"/>
                                                        </div>
                                                        <label htmlFor=""> Campaña </label>
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
                                                <div className="row">
                                                    <div className="col-auto">
                                                            <label htmlFor="">Rut </label>
                                                                <div className="col">
                                                                    <input className = "control-busqueda-rut" type ="text" id="rut" name="rut"/>
                                                                </div>
                                                    </div>
                                                    <div className="col-auto">
                                                            <label htmlFor="">Razón Social </label>
                                                                <div className="col">
                                                                    <input className = "control-busqueda-razon" type ="text" id="razon_social" name="razon_social" readOnly/>
                                                                </div>
                                                    </div>
                                                    <div className="col">
                                                            <button type="submit" className="btn btn-secondary">Buscar</button>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <table className="table-responsive table-bordered">
                                                        <thead>
                                                            <tr>
                                                            <th scope="col">Fecha Llamada</th>
                                                            <th scope="col">Nombre Contacto</th>
                                                            <th scope="col">Teléfono</th>
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
                            <div class="btn-group dropstart">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Acciones
                            </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal">Ingresar contacto A+</a>
                                    <a href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal3">Pendientes por llamar</a>
                                </ul>
                            </div>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary " type="submit">Guardar</button>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Formulario
