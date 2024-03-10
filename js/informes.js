const cargarInformes=()=>{
    let valorTotalMatriculas=0;
    console.log(listaMatriculas)
    informesInput.innerHTML="hola" 
    for(const matriculas of listaMatriculas){
        valorTotalMatriculas+= matriculas.precio
    }
    console.log(valorTotalMatriculas)
   
    
const repeticionesAsignaturas = {};

// Iteramos sobre cada matrícula
listaMatriculas.forEach(matricula => {
    // Verificamos si asignatura_id es un array
    if (Array.isArray(matricula.asignatura_id)) {
        matricula.asignatura_id.forEach(asignaturaId => {
            // Incrementamos el contador de la asignatura
            repeticionesAsignaturas[asignaturaId] = (repeticionesAsignaturas[asignaturaId] || 0) + 1;
        });
    } else {
        // Incrementamos el contador de la asignatura
        repeticionesAsignaturas[matricula.asignatura_id] = (repeticionesAsignaturas[matricula.asignatura_id] || 0) + 1;
    }
});

// Mostramos el objeto con la cantidad de veces que aparece cada asignatura
console.log(repeticionesAsignaturas);
let asignaturaMasRepetida = null;
let maxRepeticiones = 0;

for (let asignaturaId in repeticionesAsignaturas) {
    if (repeticionesAsignaturas[asignaturaId] > maxRepeticiones) {
        asignaturaMasRepetida = asignaturaId;
        maxRepeticiones = repeticionesAsignaturas[asignaturaId];
    }
    
}
console.log(listaAsignaturas[asignaturaMasRepetida-1].codigo);
informesInput.innerHTML=`
<h1> total recaudado</h1>
<h1>${valorTotalMatriculas}</h1>
<h1>  asignatura más matriculada</h1>
<h1>${listaAsignaturas[asignaturaMasRepetida-1].codigo}</h1>
<div> <select cclass="select" id="cargarEstudiantes1">
${cargarEstMat()}
</select>
<button type="button" class="btn btn-warning btn-lg ms-2"
    onclick=generarHorario()>Submit
    form</button>

</div>
<div id="horarioEstudiante"> 

</div>
`

}

const generarHorario=()=>{
    const horarioInput = document.getElementById('horarioEstudiante');
    
console.log(listaMatriculas[2].asignatura_id)
    horarioInput.innerHTML=  
    `
    <table  class="table">
    <thead>
          <tr>
              <th><h2>LUNES</th>
              <th><h2>MARTES</th>
              <th><h2>MIERCOLES</th>
              <th><h2>JUEVES</th>
              <th><h2>VIERNES</th>
          </tr>
      </thead>
      <tbody id="tablaHorarioEstudiante">
      
     ${generarOptionsHorarios()}

      </tbody>
     

     
  </table>
  </div>
    `
}
const generarOptionsHorarios=()=>{
    const estudianteHorario = document.getElementById("cargarEstudiantes1")
    const tablaHorario = document.getElementById("tablaHorarioEstudiante")
    console.log(estudianteHorario.value)
    let asignaturaEstudiante=0

    for (const matricula of listaMatriculas){

        if(matricula.estudiante_id==estudianteHorario.value){
         asignaturaEstudiante=matricula.asignatura_id;
console.log(Object.keys(asignaturaEstudiante).length)
         for(i=0;i<Object.keys(asignaturaEstudiante).length;i++){
            console.log("horario "+listaAsignaturas[matricula.asignatura_id[i]].horario_clases[0].dia)
            console.log("horario "+listaAsignaturas[matricula.asignatura_id[i]].horario_clases[0].hora_inicio)
    let dia1=listaAsignaturas[matricula.asignatura_id[i]].horario_clases[0].dia
    let hora1=listaAsignaturas[matricula.asignatura_id[i]].horario_clases[0].hora_inicio
  
    if(dia1=="lunes"){
        console.log(dia1)
        tablaHorario.innerHTML="hola"
    }
    if(dia1=="martes"){
        console.log(dia1)
    }
    if(dia1=="miercoles"){
        console.log(dia1)
    }
    if(dia1=="jueves"){
        console.log(dia1)
    }
    if(dia1=="viernes"){
        console.log(dia1)
    }
            console.log("horario "+listaAsignaturas[matricula.asignatura_id[i]].horario_clases[1].dia)
            console.log("horario "+listaAsignaturas[matricula.asignatura_id[i]].horario_clases[1].hora_inicio)

  
    }
        }
        console.log("asignaturas "+asignaturaEstudiante)
        console.log( Object.keys(asignaturaEstudiante).length)

    }

}