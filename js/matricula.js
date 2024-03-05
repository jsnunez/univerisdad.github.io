const cargarEstMat=()=>{
    const cargEstudianMat = document.getElementById('cargarEstudiantes');
    let options='';
    console.log(listaEstudiantes)
    for(const estudiantes of listaEstudiantes){
        console.log("Hola"+estudiantes)
 
        options+=`<option value="${estudiantes.id}">${estudiantes.nombre}</option> `
    }
    cargEstudianMat.innerHTML=options
}

// const cargarPeriodos= ()=>{
//     let tamProgamas=listaPeriodos.length;
//     console.log(tamProgamas);
//     periodosInput.innerHTML = `
//     <div class="table-responsive">
//     <table  class="table">
//       <thead>
//             <tr>
//                 <th><h2>id</th>
//                 <th><h2>codigo</th>
//                 <th><h2>año</th>
//                 <th><h2>semestre</th>
//             </tr>
//         </thead>
//         <tbody id="tablaPeriodocion">
        
//         ${generarOptionsPeriodos()}
 
//         </tbody>
       

       
//     </table>
//     </div>  `
    
// }


// const generarOptionsPeriodos=()=>{
//     let options='';
//     numPeriodos=listaPeriodos.length;
//     console.log(numPeriodos);
//     for(const periodos of listaPeriodos){
//         console.log(periodos)
//         options+=`<tr>`
//         options+=`<td>${periodos.id}</td> <td>${periodos.codigo}</td> <td>${periodos.ano}</td> <td>${periodos.semestre}</td>`;
//         options+=`</tr>`
//     }
//     console.log(options)
//     return options;

// }
// const verTodosEstu=()=>{
//     matriculaInput.style.display = 'none';
//     estudiantesRegInput.style.display = 'block';
//     let numestudiantes=estudiantesRegInput.length;
//     console.log(tamProgamas);
//     estudiantesRegInput.innerHTML = `
//     <div class="table-responsive">
//     <table  class="table">
//       <thead>
//             <tr>
//                 <th><h2>id</th>
//                 <th><h2>nombre</th>

//             </tr>
//         </thead>
//         <tbody id="tablaDepartamentocion">
        
//         ${generarOptionsEstudiantes()}
 
//         </tbody>
       

       
//     </table>
//     <button type="button" class="btn btn-warning btn-lg ms-2" onclick="volvermatricula()"> volver a matricula</button>

//     </div>  `
// }

const verTodosEstu=()=>{
    matriculaInput.style.display = 'none';
    estudiantesRegInput.style.display = 'block';
    let tamProgamas=listaPeriodos.length;
    console.log(tamProgamas);
    estudiantesRegInput.innerHTML = `
    <div class="table-responsive" id="regEstudiantes1">
    <table  class="table">
      <thead>
            <tr>
                <th><h2>id</th>
                <th><h2>nombre</th>
                <th><h2>apellido</th>
                <th><h2>tipo de documento</th>
                <th><h2>numero de documento</th>
                <th><h2>ciudad de resicencia</th>
                <th><h2>direccion</th>
                <th><h2>telefono</th>
                <th><h2>fecha de nacimineto</th>
                <th><h2>sexo</th>
                <th><h2>programa_id</th>
               
            
            </tr>
        </thead>
        <tbody id="tablaPeriodocion">
        
        ${generarOptionsEstudiante()}
 
        </tbody>
       

       
    </table>
    </div>  
    
    <button type="button" class="btn btn-warning btn-lg ms-2"
    onclick=volvermatricula()>volver</button>`


}

const generarOptionsEstudiante=()=>{
    let options='';
    for(const Estudiantes of listaEstudiantes){
        console.log(periodos)
        options+=`<tr>`
        options+=`<td>${Estudiantes.id}</td> <td>${Estudiantes.nombre}</td>
         <td>${Estudiantes.apellido}</td> <td>${Estudiantes.tipo_documento}</td>
         <td>${Estudiantes.numero_documento}</td> <td>${Estudiantes.ciudad_residencia}</td>
         <td>${Estudiantes.direccion}</td> <td>${Estudiantes.telefono}</td>
         <td>${Estudiantes.fecha_nacimiento}</td> <td>${Estudiantes.sexo}</td>
         <td>${Estudiantes.programa_id}</td>`
         ;
        options+=`</tr>`
    }
    console.log(options)
    return options;

}

const volvermatricula=()=>{
    
    matriculaInput.style.display = 'block';
    estudiantesRegInput.style.display = 'none';

    
}