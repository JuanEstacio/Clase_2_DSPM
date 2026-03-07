import { useState,useEffect } from "react"
import PerfilUsuario from "../Components/PerfilUsuario"
import FormularioPaciente from "../Components/FormularioPaciente"
import TablaPacientes from "../Components/TablaPacientes"

interface Props{
user:any
onLogout:()=>void
}

function Dashboard({user,onLogout}:Props){

const[pacientes,setPacientes]=useState<any[]>([])
const[busqueda,setBusqueda]=useState("")
const[pacienteAEditar,setPacienteAEditar]=useState<any>(null)

useEffect(()=>{

const data=localStorage.getItem("medicare_pacientes")

if(data){
setPacientes(JSON.parse(data))
}

},[])

useEffect(()=>{

localStorage.setItem(
"medicare_pacientes",
JSON.stringify(pacientes)
)

},[pacientes])

const guardarPaciente=(p:any)=>{

if(p.id){
setPacientes(prev=>prev.map(x=>x.id===p.id?p:x))
}else{
p.id=Date.now()
setPacientes(prev=>[...prev,p])
}

setPacienteAEditar(null)

}

const eliminarPaciente=(id:number)=>{
setPacientes(prev=>prev.filter(p=>p.id!==id))
}

const pacientesFiltrados=pacientes.filter(p=>
(p.nombre+p.apellido+p.dni)
.toLowerCase()
.includes(busqueda.toLowerCase())
)

return(

<div>

<PerfilUsuario user={user} onLogout={onLogout}/>

<h2>Dashboard</h2>

<input
placeholder="Buscar paciente"
value={busqueda}
onChange={e=>setBusqueda(e.target.value)}
/>

{user.rol!=="medico" &&
<FormularioPaciente
pacienteAEditar={pacienteAEditar}
onGuardar={guardarPaciente}
/>
}

<TablaPacientes
pacientes={pacientesFiltrados}
onEditar={setPacienteAEditar}
onEliminar={eliminarPaciente}
/>

{user.rol!=="recepcionista" &&
<div>

<h3>Estadísticas</h3>
<p>Total pacientes: {pacientes.length}</p>

</div>
}

</div>

)

}

export default Dashboard