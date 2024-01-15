
import './App.css';
import Contador from './component/Contador';
import Boton from './component/Boton';
import { useState } from 'react';


function App() {
  const [nroClicks, setNumClicks] = useState(0);

  const clickMas1 = () =>{
    setNumClicks(nroClicks+1)
    console.log(1)
  }
  const clickMas3 = () =>{
    setNumClicks(nroClicks+3)
    console.log(1)
  }
  const clickMenos3 = () =>{
    setNumClicks(nroClicks-3)
    console.log(1)
  }
  const clickMenos1 = () =>{
    setNumClicks(nroClicks-1)
    console.log(1)
  }


  const reiniciar = () =>{
    setNumClicks(0)
    console.log(0)
  }

  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks}/>
        <div className='contenedor-botones'>
          <div className='contenedorNumeros'>
            <Boton texto="+1" esBotonClick={true} funcionClick={clickMas1}/>
            <Boton texto="-3" esBotonClick={true} funcionClick={clickMenos3}/>
            <Boton texto="+3" esBotonClick={true} funcionClick={clickMas3}/>
            <Boton texto="-1" esBotonClick={true} funcionClick={clickMenos1}/>
          </div>
          <div className='contenedorBoton'>
            <Boton texto="Reiniciar" esBotonClick={false} funcionClick={reiniciar}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
