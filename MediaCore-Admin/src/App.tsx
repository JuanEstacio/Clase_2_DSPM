import { useEffect, useState } from "react";
import LoginForm from "./Components/LoginForm";
import Dashboard from "./Pages/DashBoard";

function App(){

const[user,setUser]=useState<any>(null)

useEffect(()=>{

const stored=localStorage.getItem("medicare_user")

if(stored){
setUser(JSON.parse(stored))
}

},[])

const logout=()=>{
localStorage.removeItem("medicare_user")
setUser(null)
}

return(

<div>

{user
? <Dashboard user={user} onLogout={logout}/>
: <LoginForm onLogin={setUser}/>
}

</div>

)

}

export default App