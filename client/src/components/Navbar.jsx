import perfil from '../assets/Perfil.jpg';
import logo from '../assets/Logo.png';
import '../css/components.css';
import { SlOptionsVertical } from 'react-icons/sl';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={logo} className="img-fluid"></img>
              <h2 className ="titulo" style={{color: "white"}}>ROMA</h2>
                <div className="box-perfil" >
                    <img className = "perfil img-fluid" src = {perfil} style={{height: "60px",width: "60px"}}></img>
                      <p className = "nombre">Nombre y apellido</p>
                      <a href="#" className="nav-link "data-bs-toggle="dropdown">
                        <SlOptionsVertical style={{color:"white" ,height: "30px",width: "30px"}} />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="#" className="dropdown-item">Perfil</a>
                        <a href="#" className="dropdown-item">Logout</a>
                      </div>
                </div>    
          </div>
      </nav>
    </>
)
}

export default Navbar