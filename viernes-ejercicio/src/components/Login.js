import React from "react";
import Boton from "./Boton";
function Login () {
    const click=(x)=>{
        console.log("x");
    }
    return(
        <div className="main">
            <div className="padre">
                <form>
                    <div className="usuario">
                        <label>Usuario</label>
                        <input placeholder="Ingresar Usuario"></input>
                    </div>
                    <div className="contraseña">
                        <label>Contraseña</label>
                        <input placeholder="Ingresar Contraseña"></input>
                    </div>
                    <div className="botones">
                        <Boton funClick={()=>click("Inicio")} text="Inicio"/>
                        <Boton funClick={()=>click("Registrar")} text="Registrar"/>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;