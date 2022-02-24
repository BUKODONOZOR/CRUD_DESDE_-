import React from 'react';


const TablaUsuarios = (props) => {
    console.log(props.usuarios)
    return(
        <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Nombre de Usuario</th>
            <th>Numero de Documento</th>
            <th>Peticcion</th>
          </tr>
        </thead>
        <tbody>
            {
                props.usuarios.map((usuario) =>(
                    <tr key={usuario.id}>
                    <td>Nombre</td>
                    <td>Nombre Usuario</td>
                    <td>Documento</td>
                    <td>
                      <button className="button muted-button">Edit</button>
                      <button className="button muted-button">Delete</button>
                    </td>
                  </tr>
                ))
            }
        
        </tbody>
      </table>
    );
}
   
    


  
  export default TablaUsuarios