const cargarInformes=()=>{
    let valorTotalMatriculas=0;
    let valorTotalMatriculas1=0;
    console.log(listaMatriculas)
    informesInput.innerHTML="hola" 
    for(const matriculas of listaMatriculas){
        if(matriculas.periodo_id==1){
        valorTotalMatriculas+= matriculas.precio
        }
        if(matriculas.periodo_id==2){
            valorTotalMatriculas1+= matriculas.precio
            }
    }
    console.log(valorTotalMatriculas)
   
    
const repeticionesAsignaturas = {};
    
const repeticionesAsignaturas2 = {};
// Iteramos sobre cada matrícula
listaMatriculas.forEach(matricula => {
    // Verificamos si asignatura_id es un array
    if(matricula.periodo_id==1){
    if (Array.isArray(matricula.asignatura_id)) {
        matricula.asignatura_id.forEach(asignaturaId => {
            // Incrementamos el contador de la asignatura
            repeticionesAsignaturas[asignaturaId] = (repeticionesAsignaturas[asignaturaId] || 0) + 1;
        });
    } else {
        // Incrementamos el contador de la asignatura
        repeticionesAsignaturas[matricula.asignatura_id] = (repeticionesAsignaturas[matricula.asignatura_id] || 0) + 1;
    }
}});
listaMatriculas.forEach(matricula => {
    // Verificamos si asignatura_id es un array
    if(matricula.periodo_id==2){
    if (Array.isArray(matricula.asignatura_id)) {
        matricula.asignatura_id.forEach(asignaturaId => {
            // Incrementamos el contador de la asignatura
            repeticionesAsignaturas2[asignaturaId] = (repeticionesAsignaturas2[asignaturaId] || 0) + 1;
        });
    } else {
        // Incrementamos el contador de la asignatura
        repeticionesAsignaturas2[matricula.asignatura_id] = (repeticionesAsignaturas2[matricula.asignatura_id] || 0) + 1;
    }
}});

// Mostramos el objeto con la cantidad de veces que aparece cada asignatura
console.log(repeticionesAsignaturas);
console.log(repeticionesAsignaturas2);
let asignaturaMasRepetida = null;
let asignaturaMasRepetida2 = null;
let maxRepeticiones = 0;
let maxRepeticiones2 = 0;


for (let asignaturaId in repeticionesAsignaturas) {
    if (repeticionesAsignaturas[asignaturaId] > maxRepeticiones) {
        
        asignaturaMasRepetida = asignaturaId;
        maxRepeticiones = repeticionesAsignaturas[asignaturaId];
           }
          
}
console.log(asignaturaMasRepetida)
for (let asignaturaId2 in repeticionesAsignaturas2) {
    if (repeticionesAsignaturas2[asignaturaId2] > maxRepeticiones2) {
      
        asignaturaMasRepetida2 = asignaturaId2;
        maxRepeticiones2 = repeticionesAsignaturas2[asignaturaId2];
           }
           
}
console.log(asignaturaMasRepetida2)
console.log(listaAsignaturas[asignaturaMasRepetida-1].codigo);
informesInput.innerHTML=`
<div>
<h1> total recaudado</h1>
</div>
<h1>periodo 1 :$ ${valorTotalMatriculas}</h1>

<h1>periodo 2 :$ ${valorTotalMatriculas1}</h1>
<h1>  asignatura más matriculada</h1>
<h1>periodo 1 :${listaAsignaturas[asignaturaMasRepetida-1].codigo}</h1>
<h1>periodo 2 :${listaAsignaturas[asignaturaMasRepetida2-1].codigo}</h1>


<div> <select cclass="select" id="cargarEstudiantes1">
${cargarEstMat()}
</select>
<button type="button" class="btn btn-warning btn-lg ms-2"
    onclick=generarHorario()>Submit
    form</button>

</div>
<div id="horarioEstudiante"> 


<table  class="table ">
<thead>
<tr>
<th><h2>HORARIO</th>
    <th><h2>LUNES</th>
    <th><h2>MARTES</th>
    <th><h2>MIERCOLES</th>
    <th><h2>JUEVES</th>
    <th><h2>VIERNES</th>
</tr>
</thead>
<tbody id="tablaHorarioEstudiante">

<tr>

<td> 6:00am - 8:00am</td>
<td id="l1">------</td>
<td id="m1">------</td>
<td id="mi1">------</td>
<td id="j1">------</td>         
<td id="v1">------</td>

</tr>


<tr>
<td>8:00am - 10:00am</td>
<td id="l2">------</td>
<td id="m2">------</td>
<td id="mi2">------</td>
<td id="j2">------</td>         
<td id="v2">------</td>

</tr>

<tr>
<td>10:00am - 12:00m</td>
<td id="l3">------</td>
<td id="m3">------</td>
<td id="mi3">------</td>
<td id="j3">------</td>         
<td id="v3">------</td>

</tr>

<tr>
<td>12:00m - 2:00am</td>
<td id="l4">------</td>
<td id="m4">------</td>
<td id="mi4">------</td>
<td id="j4">------</td>         
<td id="v4">------</td>

</tr>
<tr>
<td>2:00pm - 4:00pm</td>
<td id="l5">------</td>
<td id="m5">------</td>
<td id="mi5">------</td>
<td id="j5">------</td>         
<td id="v5">------</td>

</tr>

<tr>
<td>4:00pm - 6:00pm</td>
<td id="l6">------</td>
<td id="m6">------</td>
<td id="mi6">------</td>
<td id="j6">------</td>         
<td id="v6">------</td>

</tr>
<tr>
<td>6:00pm - 8:00pm</td>
<td id="l7">------</td>
<td id="m7">------</td>
<td id="mi7">------</td>
<td id="j7">------</td>         
<td id="v7">------</td>

</tr>
<tr>
<td>8:00pm - 10:00pm</td>
<td id="l8">------</td>
<td id="m8">------</td>
<td id="mi8">------</td>
<td id="j8">------</td>         
<td id="v8">------</td>

</tr>


</tbody>


     
  </table>
  </div>
`

}

// const generarHorario=()=>{
//     const horarioInput = document.getElementById('horarioEstudiante');
    
// console.log(listaMatriculas[2].asignatura_id)
//     horarioInput.innerHTML=  
//     `
    
//     `
// }
const generarHorario=()=>{
    const estudianteHorario = document.getElementById("cargarEstudiantes1")
    const tablaHorario = document.getElementById("horarioEstudiante")

    tablaHorario.innerHTML=`
    <table  class="table ">
     <thead>
<tr>
<th><h2>HORARIO</th>
    <th><h2>LUNES</th>
    <th><h2>MARTES</th>
    <th><h2>MIERCOLES</th>
    <th><h2>JUEVES</th>
    <th><h2>VIERNES</th>
</tr>
</thead>
<tbody id="tablaHorarioEstudiante">

<tr>

<td> 6:00am - 8:00am</td>
<td id="l1">------</td>
<td id="m1">------</td>
<td id="mi1">------</td>
<td id="j1">------</td>         
<td id="v1">------</td>

</tr>


<tr>
<td>8:00am - 10:00am</td>
<td id="l2">------</td>
<td id="m2">------</td>
<td id="mi2">------</td>
<td id="j2">------</td>         
<td id="v2">------</td>

</tr>

<tr>
<td>10:00am - 12:00m</td>
<td id="l3">------</td>
<td id="m3">------</td>
<td id="mi3">------</td>
<td id="j3">------</td>         
<td id="v3">------</td>

</tr>

<tr>
<td>12:00m - 2:00am</td>
<td id="l4">------</td>
<td id="m4">------</td>
<td id="mi4">------</td>
<td id="j4">------</td>         
<td id="v4">------</td>

</tr>
<tr>
<td>2:00pm - 4:00pm</td>
<td id="l5">------</td>
<td id="m5">------</td>
<td id="mi5">------</td>
<td id="j5">------</td>         
<td id="v5">------</td>

</tr>

<tr>
<td>4:00pm - 6:00pm</td>
<td id="l6">------</td>
<td id="m6">------</td>
<td id="mi6">------</td>
<td id="j6">------</td>         
<td id="v6">------</td>

</tr>
<tr>
<td>6:00pm - 8:00pm</td>
<td id="l7">------</td>
<td id="m7">------</td>
<td id="mi7">------</td>
<td id="j7">------</td>         
<td id="v7">------</td>

</tr>
<tr>
<td>8:00pm - 10:00pm</td>
<td id="l8">------</td>
<td id="m8">------</td>
<td id="mi8">------</td>
<td id="j8">------</td>         
<td id="v8">------</td>

</tr>


</tbody>

</table>
`
    console.log(estudianteHorario.value)
    let matriculaEstudiante=0
    let banderaEstudianteMatriculado=0
    let options = '';
    for (const matricula of listaMatriculas){
        console.log( matricula.estudiante_id)
        if(parseInt(matricula.estudiante_id)==estudianteHorario.value){
            console.log("holaa")
            matriculaEstudiante=matricula.id
        console.log(  matriculaEstudiante)
        } else{
            banderaEstudianteMatriculado=1
         
        }

   }
   

    console.log(  (listaMatriculas[matriculaEstudiante-1].asignatura_id).length)
    for (const asignatura of (listaMatriculas[matriculaEstudiante-1].asignatura_id)){
        console.log(asignatura)
        let dia1=listaAsignaturas[asignatura-1].horario_clases[0].dia;
        let hora1=listaAsignaturas[asignatura-1].horario_clases[0].hora_inicio;
        let dia2=listaAsignaturas[asignatura-1].horario_clases[1].dia;
        let hora2=listaAsignaturas[asignatura-1].horario_clases[1].hora_inicio;
        let asignatura1="";
        let asignatura2="";
    
        console.log(listaAsignaturas[asignatura-1].codigo)
        console.log(hora1)
        console.log(dia2)
        console.log(hora2)
  
    
        if(dia1=="lunes"){
        

            if("6:00 am"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("l1")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("8:00 am"==hora1)
            {
                const horario1 = document.getElementById("l2")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("10:00 am"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("l3")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("12:00 m"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("l4")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("2:00 pm"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("l5")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("4:00 pm"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("l6")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("6:00 pm"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("l7")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("8:00 pm"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("l8")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
      }
        if(dia1=="martes"){
            if("6:00 am"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("m1")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("8:00 am"==hora1)
            {
                const horario1 = document.getElementById("m2")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("10:00 am"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("m3")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("12:00 m"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("m4")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("2:00 pm"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("m5")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("4:00 pm"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("m6")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("6:00 pm"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("m7")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("8:00 pm"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("m8")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
              }
        if(dia1=="miercoles"){
            if("6:00 am"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("mi1")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("8:00 am"==hora1)
            {
                const horario1 = document.getElementById("mi2")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("10:00 am"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("mi3")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("12:00 m"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("mi4")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("2:00 pm"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("mi5")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("4:00 pm"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("mi6")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("6:00 pm"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("mi7")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("8:00 pm"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("mi8")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
                }
        if(dia1=="jueves"){
            if("6:00 am"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("j1")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("8:00 am"==hora1)
            {
                const horario1 = document.getElementById("j2")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("10:00 am"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("j3")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("12:00 m"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("j4")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("2:00 pm"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("j5")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("4:00 pm"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("j6")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("6:00 pm"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("j7")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("8:00 pm"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("j8")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
               }
        if(dia1=="viernes"){
            if("6:00 am"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("v1")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("8:00 am"==hora1)
            {
                const horario1 = document.getElementById("v2")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("10:00 am"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("v3")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("12:00 m"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("v4")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("2:00 pm"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("v5")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("4:00 pm"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("v6")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("6:00 pm"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("v7")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("8:00 pm"==hora1)
            {
                console.log(dia1)
                const horario1 = document.getElementById("v8")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
        }
        if(dia2=="lunes"){
        

            if("6:00 am"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("l1")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("8:00 am"==hora2)
            {
                const horario1 = document.getElementById("l2")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("10:00 am"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("l3")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("12:00 m"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("l4")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("2:00 pm"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("l5")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("4:00 pm"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("l6")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("6:00 pm"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("l7")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("8:00 pm"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("l8")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
      }
        if(dia2=="martes"){
            if("6:00 am"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("m1")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("8:00 am"==hora2)
            {
                const horario1 = document.getElementById("m2")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("10:00 am"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("m3")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("12:00 m"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("m4")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("2:00 pm"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("m5")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("4:00 pm"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("m6")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("6:00 pm"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("m7")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("8:00 pm"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("m8")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
              }
        if(dia2=="miercoles"){
            if("6:00 am"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("mi1")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("8:00 am"==hora2)
            {
                const horario1 = document.getElementById("mi2")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("10:00 am"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("mi3")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("12:00 m"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("mi4")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("2:00 pm"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("mi5")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("4:00 pm"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("mi6")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("6:00 pm"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("mi7")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("8:00 pm"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("mi8")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
                }
        if(dia2=="jueves"){
            if("6:00 am"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("j1")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("8:00 am"==hora2)
            {
                const horario1 = document.getElementById("j2")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("10:00 am"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("j3")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("12:00 m"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("j4")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("2:00 pm"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("j5")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("4:00 pm"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("j6")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("6:00 pm"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("j7")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("8:00 pm"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("j8")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
               }
        if(dia2=="viernes"){
            if("6:00 am"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("v1")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("8:00 am"==hora2)
            {
                const horario1 = document.getElementById("v2")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("10:00 am"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("v3")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("12:00 m"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("v4")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("2:00 pm"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("v5")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("4:00 pm"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("v6")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("6:00 pm"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("v7")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
            if("8:00 pm"==hora2)
            {
                console.log(dia2)
                const horario1 = document.getElementById("v8")
                
                console.log(horario1)
                horario1.innerHTML=listaAsignaturas[asignatura-1].codigo
            }
        }
    }
    
   }

       
