import { useState } from "react";
import { usuarios } from "../Utils/auth";

interface Props{
onLogin:(user:any)=>void
}

function LoginForm({onLogin}:Props){

const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[error,setError]=useState("")

const handleLogin=()=>{

const user=usuarios.find(
u=>u.email===email && u.password===password
)

if(user){
localStorage.setItem("medicare_user",JSON.stringify(user))
onLogin(user)
}else{
setError("Usuario o contraseña incorrectos")
}

}

return(

<div>

<h2>Login MediCare+</h2>

<input
placeholder="Email"
value={email}
onChange={e=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Contraseña"
value={password}
onChange={e=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>
Ingresar
</button>

{error && <p style={{color:"red"}}>{error}</p>}

</div>

)

}

export default LoginForm