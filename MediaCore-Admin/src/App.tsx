import { Routes, Route, Navigate } from "react-router-dom"
import LoginForm from "./Components/LoginForm"
import Dashboard from "./Pages/DashBoard"
import { useEffect, useState } from "react"

function App(){

const[user,setUser]=useState<any>(null)

useEffect(()=>{

const stored=localStorage.getItem("medicare_user")

if(stored){
setUser(JSON.parse(stored))
}

},[])

const login=(userData:any)=>{
localStorage.setItem("medicare_user",JSON.stringify(userData))
setUser(userData)
}

const logout=()=>{
localStorage.removeItem("medicare_user")
setUser(null)
}

return(

<Routes>

<Route
path="/"
element={
user
? <Navigate to="/dashboard"/>
: <LoginForm onLogin={login}/>
}
/>

<Route
path="/dashboard"
element={
user
? <Dashboard user={user} onLogout={logout}/>
: <Navigate to="/"/>
}
/>

</Routes>

)

}

export default App