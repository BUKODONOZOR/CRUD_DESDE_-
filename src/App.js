import React, {useState} from 'react';
import AgregarAlFormulario from './components/AgregarUsuario';
import TablaUsuarios from './components/TablaUsuarios.jsx';
import {v4 as uuidv4} from 'uuid';

function App() {

  const DatosUsuarios = [
    { id: uuidv4(), nombre: 'Tania', documento : 1200000, nombreUsuario: 'floppydiskette' },
    { id: uuidv4(), nombre: 'Craig', documento : 1200000, nombreUsuario: 'siliconeidolon' },
    { id: uuidv4(), nombre: 'Ben'  , documento : 1200000, nombreUsuario: 'benisphere' },
  ]

  const [usuarios, setUsuario] = useState(DatosUsuarios)
  //Agregar Nuevo Usuarios (Funcion de flacha)
  const agregarUsuario = (usuario) =>
  {
    usuario.id = uuidv4()
    setUsuario([
      ...usuarios,
      usuario
    ])
  }
  
  return (
    <div className="container">
      <h1>PETICION BASICA</h1>
      <div classHooksName="flex-row">
        <div className="flex-large">
          <h2>Agregar usuario</h2>
          <AgregarAlFormulario agregarUsuario= {agregarUsuario}/>
        </div>
        <div className="flex-large">
          <h2>Ver usuarios</h2>
          <TablaUsuarios usuarios={usuarios}/>
        </div>
      </div>
    </div>
  );
}

export default App;
