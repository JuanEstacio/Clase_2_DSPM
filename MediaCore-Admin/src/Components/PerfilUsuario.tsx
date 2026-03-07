import { useNavigate } from "react-router-dom"

interface Props{
user:any
onLogout:()=>void
}

function PerfilUsuario({user,onLogout}:Props){

const navigate = useNavigate()

const cerrarSesion=()=>{

onLogout()
navigate("/")

}

return(

<div style={{marginBottom:"20px"}}>

<h3>Perfil de Usuario</h3>

<p><b>Nombre:</b> {user.nombre}</p>
<p><b>Email:</b> {user.email}</p>
<p><b>Rol:</b> {user.rol}</p>

<button onClick={cerrarSesion}>
Cerrar sesión
</button>

<hr/>

</div>

)

}

export default PerfilUsuario