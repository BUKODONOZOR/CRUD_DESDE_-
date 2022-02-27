import React from 'react'
import { useForm } from 'react-hook-form'
const AgregarAlFormulario = (props) => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data,e) => {
        console.log(data)
        props.agregarUsuario(data)
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <label>Nombre</label>
            <input
                type="text"
                name="nombre"
                {...register("nombre")}
            />


            <label>Nombe de Usuario</label>
            <input
                type="text"
                name="nombreUsuario"
                {...register("nombreUsuario")}
                
            />

     

            <label>Documento</label>
            <input
                type="number"
                name="documento"
                {...register("documento")}
            />

            <button>Add new user</button>
        </form>
    );
}

export default AgregarAlFormulario;