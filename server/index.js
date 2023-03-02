// Importamos los servicios
import express from 'express'
import mysql from 'mysql'
import cors from 'cors'


// Creamos nuestra aplicacion express que sera una funcion express
const app = express()

// Agregamos el puerto con una propiedad de aplicacion
app.set('port',process.env.PORT || 8800 )

//-------------------------------------- Server Runing --------------------------------------
// Para ejecutar nuestra aplicacion tenemos que escuchar cualquier numero de puerto.
// Debemos agregar en package.json la siguiente linea "type": "module"
// Inicilizamos nodemon en package.json "start": "nodemon index.js"
app.listen(app.get('port'), () => {
console.log("Server running on port:", app.get('port'))
})

//----------------------------------- Middlewares ----------------------------------------------
// Nos conectamos a la BD
const db = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'tumedianaranja'
})
app.use(cors())
app.use('/crm', routes())


//------------------------------------ Routes --------------------------------------------------
// Metodo obtencion de aplicacion backend
app.get("/crm", (req,res)=>{
    res.json("Hola esto es un mensaje del backend")
})

// API ejecutivos
app.get("/ejecutivos", (req,res) => {
    const q = " select nombre_ejecutivo, apellido_ejecutivo from ejecutivo"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

// API empresas
app.get("/empresas", (req,res) => {
    const q = "SELECT `id_empresa`,`rut_empresa`, `razon_social`, `rubro_economico`, `sub_rubro_economico`, `actividad_economica`, `region`, `provincia`, `comuna`, `fecha_inicio_actividad`, `tamano_empresa`, `cantidad_trabajadores`, `nombre_apellido_contacto`, `telefono_fijo_contacto`, `telefono_movil_contacto`, `mail_contacto`, `nivel_decision`, `area_decision` FROM empresa JOIN contacto ON empresa.rut_empresa = contacto.rut_empresa_contacto ORDER BY RAND() LIMIT 1"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//Para importaciones se agrega 'type':'module'
// Para requerimeintos se agrega ''type':'commonjs'
//agregamos otra cosa 

