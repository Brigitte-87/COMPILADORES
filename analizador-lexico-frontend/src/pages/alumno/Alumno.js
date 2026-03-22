import React, { useState, useEffect } from "react";
import "../../styles/alumno.css";
import { useNavigate } from "react-router-dom";

function Alumno({ volver }) {

const [codigo,setCodigo] = useState("");
const [tokens,setTokens] = useState([]);
const navigate = useNavigate();
const [palabrasReservadas,setPalabrasReservadas] = useState([]);
const [delimitadores,setDelimitadores] = useState([]);

useEffect(()=>{

fetch("http://localhost:3000/palabras")
.then(r=>r.json())
.then(data=>setPalabrasReservadas(
data.filter(p=>p.estado).map(p=>p.palabra)
))

fetch("http://localhost:3000/delimitadores")
.then(r=>r.json())
.then(data=>setDelimitadores(
data.filter(d=>d.estado).map(d=>d.delimitador)
))

},[])


const analizar = async () => {

const partes = codigo.match(/[a-zA-Z_][a-zA-Z0-9_]*|\d+|[^\s]/g) || [];

/* \s+| */

const resultado = [];

for(let p of partes){

try{

const res = await fetch(`http://localhost:3000/tokens/validar/${encodeURIComponent(p)}`);
const data = await res.json();

if(data.error){

const err = await fetch(`http://localhost:3000/errores/${data.error}`);
const errData = await err.json();

let mensajeError = "";

if(Array.isArray(errData)){
mensajeError = errData[0]?.error || "Error";
}else{
mensajeError = errData.error || "Error";
}

resultado.push({
token:p,
tipo:mensajeError
});

}else{

resultado.push({
token:p,
tipo:data.tipo
});

}

}catch(e){

resultado.push({
token:p,
tipo:"Error"
});

}

}

setTokens(resultado)

}


return(

<div className="alumno-container">

<div className="catalogos">

<div className="catalogo-box">

<h3>Palabras reservadas</h3>

<p>
[ {palabrasReservadas.join(", ")} ]
</p>

</div>

<div className="catalogo-box">

<h3>Delimitadores</h3>

<p>
[ {delimitadores.join(", ")} ]
</p>

</div>

</div>


<div className="alumno-panel">

<h1 className="alumno-title">
Analizador Léxico
</h1>

<textarea
className="code-area"
placeholder="Escribe aquí el código a analizar..."
value={codigo}
onChange={(e)=>setCodigo(e.target.value)}
/>

<button
className="btn-analizar"
onClick={analizar}
>
Analizar
</button>


{tokens.length>0 &&(

<>

<div className="tabla-scroll">

<table className="result-table">

<thead>
<tr>
<th>No.</th>
<th>Token</th>
<th>Tipo</th>
</tr>
</thead>

<tbody>

{tokens.map((t,i)=>(
<tr key={i}>
<td>{i+1}</td>
<td>{t.token}</td>
<td>{t.tipo}</td>
</tr>
))}

</tbody>

</table>

</div>

<div className="summary">
Tokens encontrados: {tokens.length}
</div>

</>

)}

<button
className="btn-volver"
onClick={() => navigate("/")}
>
Volver
</button>

</div>

</div>

)

}

export default Alumno;
