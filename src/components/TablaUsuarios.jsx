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
                props.usuarios.length > 0 ?
                props.usuarios.map((usuario) =>(
                    <tr key={usuario.id}>

                        <td>{usuario.id}</td>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.documento}</td>
                        <td>
                        <button className="button muted-button">Edit</button>
                        <button className="button muted-button" >Delete</button>
                        </td>
                    </tr>
                )): (

                        <tr>
                            <td colSpan={4}> No usuarios </td>
                        </tr>
                
                )
            }
        
        </tbody>
      </table>
    );
}
   
    


  
  export default TablaUsuarios