import React from "react";
import Boton from "./Boton";

function Registro (){
    const click=(x)=>{
        console.log("x");
    }
    return(
         <div className="main">
            <div className="padre">
                <label className="etiqueta">Nombre</label>
                <input placeholder="Ingresar Usuario"></input>
                <label className="etiqueta">Apellido</label>
                <input placeholder="Ingresar contraseña"></input>
                <label className="etiqueta">Contraseña</label>
                <input type="password" placeholder="Ingresar contraseña:"></input>
                <div className="botones">
                    <Boton funClick={()=>click("Login")} text="Login"/>
                    <Boton funClick={()=>click("Ingresar")} text="Ingresar"/>

                </div>
                
            </div>
        </div>
    );
}
export default Registro;