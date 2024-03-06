let listaMatriculas = []
const loadMatriculas = async () => {
    console.log("hola")
    try {

        const respuesta = await fetch('http://localhost:3000/matriculas');

        if (!respuesta.ok) {
            throw new Error('Error al cargar departamentos1. Estado: ', respuesta.status);
        }
        const Matriculas = await respuesta.json();
        listaDepartamentos.push(...Matriculas);

    } catch (error) {
        console.error("Error al cargar departamentos2", error.message);
    }
    console.log(listaMatriculas)
    cargarMatriculas();
}

const cargarMatriculas = () => {
    let tamProgamas = listaDepartamentos.length;
    console.log(tamProgamas);
    departamentosInput.innerHTML = `
    <div class="table-responsive">
    <table  class="table">
      <thead>
            <tr>
                <th><h2>id</th>
                <th><h2>nombre</th>

            </tr>
        </thead>
        <tbody id="tablaDepartamentocion">
        
        ${generarOptionsDepartamentos()}
 
        </tbody>
       

       
    </table>
    </div>  `

}
const cargarEstMat = () => {
    const cargEstudianMat = document.getElementById('cargarEstudiantes');
    let options = '';
    for (const estudiantes of listaEstudiantes) {
        console.log("Hola" + estudiantes)

        options += `<option value="${estudiantes.id}">${estudiantes.nombre}</option> `
    }
    return (options)
}
const cargarAsignatua = () => {
    const cargarAsignatura = document.getElementById('cargarAsignatura');
    let options = '';
    for (const asignatura of listaAsignaturas) {
        console.log("Hola" + estudiantes)

        options += `<option value="${asignatura.id}">${asignatura.codigo}</option> `
    }
    return (options)
}
const cargarPeriodo = () => {
    const cargarPeriodo = document.getElementById('cargarPeriodo');
    let options = '';
    for (const periodo of listaPeriodos) {
        console.log("Hola" + estudiantes)

        options += `<option value="${periodo.id}">${periodo.codigo}</option> `
    }
    return (options)
}
const cargarHorario = () => {
    let options = '';
    for (const asignatura of listaAsignaturas) {
        options += `<tr>`
        options += `<td>${asignatura.horario_clases.dia}</td> <td>${asignatura.horario_clases.hora_inicio}</td> `;
        options += `</tr>`
    }
    return (options)
}

const agregarAsignatura = () => {
    const asignaturaInput = document.getElementById('cargarAsignatura');
    const dataAsignatura=asignaturaInput.value;
    const dataPrograma=listaAsignaturas[dataAsignatura-1].programa_id;


    const PeriodoInput = document.getElementById('cargarPeriodo');
    const dataPeriod=PeriodoInput.value;
    var encontrados = listaTarifas.filter(function(elemento) {
        return elemento.periodo_id == dataPeriod && elemento.programa_id == dataPrograma // ◄ Aquí se desea que aplique el arreglo comparaciones 
       });
            
    const horariosContainer = document.getElementById('tablaAsignatura');
    const nuevoHorario = document.createElement('tr');
    nuevoHorario.classList.add('asignaura');
    console.log(encontrados[0].costo_credito)
    nuevoHorario.innerHTML = `
  
    <td>${listaAsignaturas[dataAsignatura-1].id}</td> 
    <td>${listaAsignaturas[dataAsignatura-1].codigo}</td> 
    <td>${listaAsignaturas[dataAsignatura-1].creditos}</td> 
    <td>${listaPeriodos[dataPeriod-1].id}</td> 

    <td>${(encontrados[0].costo_credito)*listaAsignaturas[dataAsignatura-1].creditos}</td> 

`
        ;

    horariosContainer.appendChild(nuevoHorario);


};

const ingresarMatricula = () => {
    const cargarMatricula = document.getElementById('matricula');
    cargarMatricula.innerHTML =
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
                                <button type="button" class="btn btn-light btn-lg" onclick=ingresarMatricula()>cargar datos</button>
                                    <div class="col-md-6 mb-4">
                                        <div class="form-outline">
                                            <label class="form-label" for="codigoUnico">Estudiantes</label>

                                            <div>                                            <select    cclass="select" id="cargarEstudiantes">
                                            ${cargarEstMat()}
                                            </select>

                                        </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-4">
                                    <div class="form-outline">
                                    <label class="form-label" for="codigoUnico">asignatura</label>

                                    <div>
                                    <select    cclass="select" id="cargarAsignatura">
                                    ${cargarAsignatua()}
                                    </select>

                                    </div>
                                </div>
                                    </div>
                                </div><div class="row">
                                  <div class="col-md-6 mb-4">
                                        <div class="form-outline">
                                            <label class="form-label" for="codigoUnico">Periodo</label>

                                            <div>
                                            <select    cclass="select" id="cargarPeriodo">
                                            ${cargarPeriodo()}
                                            </select>

                                            </div>
                                        </div>
                                    </div>
                                   

                                </div>
                                    </div>
                                </div>
                                <div class="row">
                                <div class="col-md-12 mb-6">
                                    <table>
                                        <table  class="table">
                                            <thead>
                                                  <tr>
                                                      <th><h5>id</th>
                                                      <th><h5>nombre</th>
                                                      <th><h5>creditos</th>
                                                      <th><h5>periodo</th>
                                                      <th><h5>precio</th>
                                                      
                                                  </tr>
                                              </thead>
                                              <tbody id="tablaAsignatura">
                                            
                                       
                                              </tbody>
                                             
                                      
                                             
                                          </table>
                                    </table>
                                </div>
                            </div>
                                
                            


                                
                               
                               
                                <div class="row" id="asignatura1">
                        
                                    <button onclick="agregarAsignatura()">agregar Asignatura</button>
                                </div>
                                <div class="row">
                                    
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

const verTodosEstu = () => {
    matriculaInput.style.display = 'none';
    estudiantesRegInput.style.display = 'block';
    let tamProgamas = listaPeriodos.length;
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

const generarOptionsEstudiante = () => {
    let options = '';
    for (const Estudiantes of listaEstudiantes) {
        console.log(periodos)
        options += `<tr>`
        options += `<td>${Estudiantes.id}</td> <td>${Estudiantes.nombre}</td>
         <td>${Estudiantes.apellido}</td> <td>${Estudiantes.tipo_documento}</td>
         <td>${Estudiantes.numero_documento}</td> <td>${Estudiantes.ciudad_residencia}</td>
         <td>${Estudiantes.direccion}</td> <td>${Estudiantes.telefono}</td>
         <td>${Estudiantes.fecha_nacimiento}</td> <td>${Estudiantes.sexo}</td>
         <td>${Estudiantes.programa_id}</td>`
            ;
        options += `</tr>`
    }
    console.log(options)
    return options;

}

const volvermatricula = () => {

    matriculaInput.style.display = 'block';
    estudiantesRegInput.style.display = 'none';


}