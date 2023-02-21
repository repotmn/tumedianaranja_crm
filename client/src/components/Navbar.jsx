import React, { useState, useEffect } from 'react';
import perfil from '../assets/Perfil.jpg';
import logo from '../assets/Logo.png';
import '../css/components.css';
import { SlOptionsVertical } from 'react-icons/sl';

function Navbar() {
  // Variables para UseState
  const [ejecutivo, setEjecutivo] = useState([])
  // Funcion para hacer request de nuestra API
  const fetchEjecutivo = () => {
      fetch("http://localhost:8800/ejecutivo")
        .then(response => response.json())
        .then(ejec => setEjecutivo(ejec))
        .catch(error => console.log(error))
      }
    
      useEffect(() => {
        fetchEjecutivo()
      }, [])
  return (
    <>
    {/*Este nav contiene el logo de TMN , Nombre del software, foto de la persona 
    con su nombre y apellido y el toggle de opciones*/}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={logo} className="img-fluid"></img>
              <h2 className ="titulo" style={{color: "white"}}>ROMA</h2>
                 {/*Este div contiene la imagen de perfil , nombre - apellido del usuario y el 
                 icono dropdown de opciones*/}
                <div className="box-perfil" >
                    <img className = "perfil img-fluid" src = {perfil} style={{height: "60px",width: "60px"}}></img>
                      <p className = "nombre">Nombre y apellido</p>
                      <a href="#" className="nav-link "data-bs-toggle="dropdown">
                        <SlOptionsVertical style={{color:"white" ,height: "30px",width: "30px"}} />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="#"className="dropdown-item">Perfil</a>
                        <a href="#" className="dropdown-item">Logout</a>
                      </div>
                </div>    
          </div>
      </nav>
    </>
)
}

export default Navbar