import { useState, useEffect } from "react";

interface Props{
pacienteAEditar:any
onGuardar:(p:any)=>void
}

function FormularioPaciente({pacienteAEditar,onGuardar}:Props){

const[nombre,setNombre]=useState("")
const[apellido,setApellido]=useState("")
const[dni,setDni]=useState("")
const[telefono,setTelefono]=useState("")
const[error,setError]=useState("")

useEffect(()=>{

if(pacienteAEditar){
setNombre(pacienteAEditar.nombre)
setApellido(pacienteAEditar.apellido)
setDni(pacienteAEditar.dni)
setTelefono(pacienteAEditar.telefono)
}else{
setNombre("")
setApellido("")
setDni("")
setTelefono("")
}

},[pacienteAEditar])

const validar=()=>{

if(!nombre || !apellido || !dni){
setError("Nombre, apellido y DNI son obligatorios")
return false
}

if(!/^\d{7,8}$/.test(dni)){
setError("El DNI debe tener 7 u 8 números")
return false
}

setError("")
return true
}

const handleGuardar=()=>{

if(!validar()) return

const paciente={
id: pacienteAEditar?.id,
nombre,
apellido,
dni,
telefono
}

onGuardar(paciente)

}

return(

<div>

<h3>
{pacienteAEditar?"Editar Paciente":"Nuevo Paciente"}
</h3>

<input
placeholder="Nombre"
value={nombre}
onChange={e=>setNombre(e.target.value)}
/>

<input
placeholder="Apellido"
value={apellido}
onChange={e=>setApellido(e.target.value)}
/>

<input
placeholder="DNI"
value={dni}
onChange={e=>setDni(e.target.value)}
/>

<input
placeholder="Teléfono"
value={telefono}
onChange={e=>setTelefono(e.target.value)}
/>

<button onClick={handleGuardar}>
Guardar
</button>

{error && <p style={{color:"red"}}>{error}</p>}

</div>

)

}

export default FormularioPaciente