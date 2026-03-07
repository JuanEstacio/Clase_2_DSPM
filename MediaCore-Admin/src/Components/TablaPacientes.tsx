import { useState } from "react";

function TablaPacientes({pacientes,onEditar,onEliminar}:any){

const[confirmId,setConfirmId]=useState<number|null>(null)

return(

<div>

<h3>Lista de Pacientes</h3>

<table border={1}>

<thead>

<tr>
<th>Nombre</th>
<th>DNI</th>
<th>Teléfono</th>
<th>Acciones</th>
</tr>

</thead>

<tbody>

{pacientes.map((p:any)=>(

<tr key={p.id}>

<td>
{p.nombre} {p.apellido}
</td>

<td>{p.dni}</td>

<td>{p.telefono}</td>

<td>

<button
onClick={()=>onEditar(p)}
>
Editar
</button>

<button
onClick={()=>setConfirmId(p.id)}
>
Eliminar
</button>

</td>

</tr>

))}

</tbody>

</table>

{confirmId && (

<div style={{background:"#eee",padding:"10px"}}>

<p>¿Seguro que deseas eliminar este paciente?</p>

<button
onClick={()=>{
onEliminar(confirmId)
setConfirmId(null)
}}
>
Sí
</button>

<button
onClick={()=>setConfirmId(null)}
>
Cancelar
</button>

</div>

)}

</div>

)

}

export default TablaPacientes