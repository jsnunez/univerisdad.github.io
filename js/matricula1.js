const cargarEstMat=()=>{
    const cargEstudianMat = document.getElementById('cargarEstudiantes');
    let options='';
    for(const estudiantes of listaEstudiantes){
        console.log("Hola"+estudiantes)
 
        options+=`<option value="${estudiantes.id}">${estudiantes.nombre}</option> `
    }
   return(options)
}
const ingresarMatricula=()=>{
    const cargarMatricula = document.getElementById('matricula');
    cargarMatricula.innerHTML=
    ` <section class="h-100 bg-dark">
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
                <div class="card card-registration my-4">
                    <div class="row g-0">
                        <div class="col-xl-6 d-none d-xl-block">
                            <img src="img/materias.png" alt="Sample photo" class="img-fluid"
                                style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" />
                        </div>
                        <div class="col-xl-6">
                            <div class="card-body p-md-5 text-black">
                                <h3 class="mb-5 text-uppercase">Formulario inscripcion Matriculas</h3>

                                <div class="row">
                                    <div class="col-md-6 mb-4">
                                        <div class="form-outline">
                                            <label class="form-label" for="codigoUnico">Estudiantes</label>

                                            <select    cclass="select" id="cargarEstudiantes">
                                            ${cargarEstMat()}
                                            </select>

                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <div class="form-outline">
                                            <input type="number" id="creditos"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="creditos">creditos</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-4">

                                        <label class="form-label" for="profesores">
                                            profesor</label>
                                        <select class="select" id="profesores">
                                        </select>
                                        <button>ver mas datos</button>


                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <input type="number" id="cupos"
                                            class="form-control form-control-lg" />
                                        <label class="form-label" for="cupos">cupos disponibles</label>
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col-md-6 mb-4">

                                        <label class="form-label" for="ProgramaIdA">Programa ID</label>
                                        <select class="select" id="ProgramaIdA">

                                        </select>


                                    </div>
                                    <div class="col-md-6 mb-4">

                                        <label class="form-label" for="cursoId">Curso ID</label>
                                        <select class="select" id="cursoId">

                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 mb-4">

                                        <label class="form-label" for="dias1">Dia</label>
                                        <select id="dias1" name="dias">
                                            <option value="lunes">Lunes</option>
                                            <option value="martes">Martes</option>
                                            <option value="miércoles">Miércoles</option>
                                            <option value="jueves">Jueves</option>
                                            <option value="viernes">Viernes</option>
                                            <option value="sábado">Sábado</option>
                                            <option value="domingo">Domingo</option>
                                        </select>




                                    </div>
                                    <div class="col-md-4 mb-4 ">

                                        <label class="form-label" for="HoraInicio1">Hora inicio</label>

                                        <input type="time" id="HoraInicio1"
                                            class="form-control form-control-lg" />

                                    </div>
                                    <div class="col-md-4 mb-4">

                                        <label class="form-label" for="HoraFin1">Hora fin</label>

                                        <input type="time" id="HoraFin1"
                                            class="form-control form-control-lg" />

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 mb-4">

                                        <label class="form-label" for="dias2">Dia</label>
                                        <select id="dias2" name="dias">
                                            <option value="lunes">Lunes</option>
                                            <option value="martes">Martes</option>
                                            <option value="miércoles">Miércoles</option>
                                            <option value="jueves">Jueves</option>
                                            <option value="viernes">Viernes</option>
                                            <option value="sábado">Sábado</option>
                                            <option value="domingo">Domingo</option>
                                        </select>




                                    </div>
                                    <div class="col-md-4 mb-4 ">

                                        <label class="form-label" for="HoraInicio2">Hora inicio</label>

                                        <input type="time" id="HoraInicio2"
                                            class="form-control form-control-lg" />

                                    </div>
                                    <div class="col-md-4 mb-4">

                                        <label class="form-label" for="HoraFin2">Hora fin</label>

                                        <input type="time" id="HoraFin2"
                                            class="form-control form-control-lg" />

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 mb-6">
                                        <label class="form-label" for="SalonId">Salon ID</label>
                                        <select class="select" id="SalonId">

                                        </select>
                                    </div>
                                    <div class="d-flex justify-content-end pt-3">
                                        <button type="button" class="btn btn-light btn-lg">Reset
                                            all</button>
                                        <button type="button" class="btn btn-warning btn-lg ms-2"
                                            onclick=enviarDatosAsignaturas()>Submit
                                            form</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>`;
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