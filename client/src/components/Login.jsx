import * as React from 'react';
import { Link } from 'react-router-dom';

function Login() {

  return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div className="col-md-4 p-5 capsula rounded-3">
                <h2 className="text-center mb-4 text-primary">Login</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <p className="small"><a className="text-primary">Olvidaste tu contraseña?</a></p>
                    <div className="d-grid">
                        <Link className ="btn btn-primary" to="/prospeccion">Ingresar</Link>
                    </div>
                </form>
            </div>
        </div>
  );
}
export default Login