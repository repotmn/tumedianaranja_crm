import Navbar from "./components/Navbar";
import Formulario from "./components/Formulario";
import Orden from "./components/Orden";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import React, { useState, useEffect } from 'react';

function App() {
  // Variables para UseState
  const [empresas, setEmpresas] = useState([])
  const [ejecutivos, setEjecutivos] = useState([])
  // Funcion para hacer request de nuestra API
  const fetchEmpresas = () => {
    fetch("http://localhost:8800/empresas")
      .then(response => response.json())
      .then(emp => setEmpresas(emp))
      .catch(error => console.log(error))
  }
  const fetchEjecutivos = () => {
    fetch("http://localhost:8800/ejecutivos")
      .then(response => response.json())
      .then(ejec => setEjecutivos(ejec))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchEmpresas()
    fetchEjecutivos()
  }, [])

  return (
    <>
      <Navbar />
      <Formulario />
      <Orden />
    </>

  )
}
export default App
