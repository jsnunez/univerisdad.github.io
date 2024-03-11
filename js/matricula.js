
let listaAsignaturaMatricula = [];
let contadorAsignaturaMatricula = 0;
let totalCosto = 0;
let idMatricula = 0;
let listaAsignatura = []
let horarioEstudiante = []
let h2 = {}
let h1 = {}
let tamanoHorario = 0;
let listaMatriculas = []
let todasAsignaturas = []
let estudiantesMatriculados=0;
let banderaExisteEstudiante=0;
const loadMatricula = async () => {
    console.log("hola")
    try {

        const respuesta = await fetch('http://localhost:3000/matriculas');

        if (!respuesta.ok) {
            throw new Error('Error al cargar matriculas. Estado: ', respuesta.status);
        }
        const matriculas = await respuesta.json();
        listaMatriculas.push(...matriculas);

    } catch (error) {
        console.error("Error al cargar matriculas", error.message);
    }
    console.log(listaMatriculas)

}
const guardarMAtricula = async (nuevaMatricula) => {
    try {

        const respuesta = await fetch('http://localhost:3000/matriculas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaMatricula),
        });

        if (!respuesta.ok) {
            throw new Error('Error al crear el producto. Estado: ', respuesta.status);
        }
        const MatriculaCreada = await respuesta.json();

        console.log('producto creado:', MatriculaCreada);
        alert("se ingreso un nuevo estudiante")
    } catch (error) {
        console.error("Error al cargar matricula", error.message);
    }

}
const enviarDatosMatricula = () => {
    console.log(listaMatriculas.length)
    let nombreInput = document.getElementById("cargarEstudiantes");
    let dataNombreE = nombreInput.value;
    console.log(dataNombreE)
    console.log(todasAsignaturas)
    const PeriodoInput = document.getElementById('cargarPeriodo');
    const dataPeriod = PeriodoInput.value;
    console.log(dataPeriod)
    totalCosto

    const nuevoMatricula = {
        id: listaMatriculas.length + 1,
        estudiante_id: parseInt(dataNombreE),
        asignatura_id: todasAsignaturas,
        periodo_id: dataPeriod,
        precio: totalCosto
    }
    guardarMAtricula(nuevoMatricula)
    // let nombreInput=document.getElementById("nombreEstudiante");
    // let apellidoInput=document.getElementById("apellidoEstudiante");
    // let tiInput=document.getElementById("tipoIdentificacion");
    // let numIdentiInput=document.getElementById("numIdenti");
    // let direccionInput=document.getElementById("direccion");
    // let ciudadInput=document.getElementById("ciudad");
    // let telefonoInput=document.getElementById("telefono");
    // let generoInput=document.getElementById("genero");

    // let fechanacimientoInput=document.getElementById("fechanacimiento");
    // let programaIdInput=document.getElementById("programaID");
    // let cantEstudinates=listaEstudiantes.length;


    // let dataNombreE=nombreInput.value;
    // console.log("sebas" +dataNombreE)
    // let dataApellidoE=apellidoInput.value;
    // let dataTiInput=tiInput.value;
    // let dataNumIdenti=numIdentiInput.value;
    // let dataDirreccion=direccionInput.value;
    // let dataCiudad=ciudadInput.value;
    // let dataTelefono=telefonoInput.value;
    // let dataGenero=generoInput.value;
    // let dataFechanacimiento=fechanacimientoInput.value;
    // let dataProgramaId=programaIdInput.value;


    // const nuevoEstudiante = {
    //     id: cantEstudinates+1,
    //     nombre: dataNombreE,
    //     apellido: dataApellidoE,
    //     tipo_documento: dataTiInput,
    //     numero_documento: dataNumIdenti,
    //     ciudad_residencia: dataCiudad,
    //     direccion: dataDirreccion,
    //     telefono: dataTelefono,
    //     fecha_nacimiento:dataFechanacimiento,
    //     sexo: dataGenero,
    //     programa_id: dataProgramaId
    // };
}
const cargarEstMat = () => {
    const cargEstudianMat = document.getElementById('cargarEstudiantes');
    let options = '';
    for (const estudiantes of listaEstudiantes) {
        console.log("Hola" + estudiantes)

        options += `<option value="${estudiantes.id}">${estudiantes.nombre} ${estudiantes.apellido}</option> `
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
const cargarHorarioM = () => {
    const asignaturaInput = document.getElementById('cargarAsignatura');
    const dataAsignatura = asignaturaInput.value;
    const HorarioInput = document.getElementById('tabladias');
    console.log(listaAsignaturas[dataAsignatura - 1])

    let options = '';
    for (const horario of listaAsignaturas[dataAsignatura - 1].horario_clases) {
        console.log(horario)
        options += `<tr>`
        options += `<td>${horario.dia}</td> <td>${horario.hora_inicio}</td> 
         <td>${horario.hora_fin}</td> <td>${horario.salon_id}</td>`;
        options += `</tr>`
    }
    HorarioInput.innerHTML = options


    console.log(dataAsignatura)

}
const agregarAsignatura = () => {
    const estudianteElegido= document.getElementById('cargarEstudiantes');
    banderaExisteEstudiante=0;


    const asignaturaInput = document.getElementById('cargarAsignatura');
    const dataAsignatura = asignaturaInput.value;
    const dataPrograma = listaAsignaturas[dataAsignatura - 1].programa_id;
    const datacurso = listaAsignaturas[dataAsignatura - 1].curso_id;
    todasAsignaturas[idMatricula] = parseInt(listaAsignaturas[dataAsignatura - 1].id)
    console.log(listaAsignaturaMatricula);

    for (const matricula of listaMatriculas){
    
        estudiantesMatriculados=matricula.estudiante_id
        console.log(estudiantesMatriculados)
        console.log(parseInt(estudianteElegido.value))
        console.log("bander"+banderaExisteEstudiante)
        if(parseInt(estudianteElegido.value)==estudiantesMatriculados){
            banderaExisteEstudiante=1;
            console.log("bandera"+banderaExisteEstudiante)
            
            alert("El estudiante ya se encuentra matriculado, seleccione otro estudiante")
        }
    }
if(banderaExisteEstudiante!=1){
    const totalInput = document.getElementById('total');
    cargarEstudiantes.setAttribute("disabled","");
    const PeriodoInput = document.getElementById('cargarPeriodo');
    const dataPeriod = PeriodoInput.value;
    PeriodoInput.setAttribute("disabled","");

    var encontrados = listaTarifas.filter(function (elemento) {
        return elemento.periodo_id == dataPeriod && elemento.programa_id == dataPrograma // ◄ Aquí se desea que aplique el arreglo comparaciones 
    });

    const horariosContainer = document.getElementById('tablaAsignatura');
    const nuevoHorario = document.createElement('tr');
    h1 = {
        dia: listaAsignaturas[dataAsignatura - 1].horario_clases[0].dia,
        hora: listaAsignaturas[dataAsignatura - 1].horario_clases[0].hora_inicio
    }
    h2 = {
        dia: listaAsignaturas[dataAsignatura - 1].horario_clases[1].dia,
        hora: listaAsignaturas[dataAsignatura - 1].horario_clases[1].hora_inicio
    }
    const horarioRepetido = horarioActual();
    console.log(horarioRepetido)
    if (horarioRepetido == false) {
        idMatricula++
        if (listaAsignaturaMatricula.indexOf(datacurso) !== -1) {
            alert("la asignatura ya esta existe");
            return
        } else {
            console.log("El valor no existe en el array.");
            listaAsignaturaMatricula[contadorAsignaturaMatricula] = datacurso;
            contadorAsignaturaMatricula++;
        }
        horarioEstudiante.push(h1);
        horarioEstudiante.push(h2);
        tamanoHorario = tamanoHorario + 2;
        nuevoHorario.classList.add('asignaura');
        console.log(encontrados[0].costo_credito)
        nuevoHorario.innerHTML = `
    <td>${idMatricula}</td> 
    <td>${listaAsignaturas[dataAsignatura - 1].codigo}</td> 
    <td>
    <table>
    <table class="table">
        <thead>
            <tr>
                <th>
                    <h5>dia
                </th>
                <th>
                    <h5>HoraInicio
                </th>
              
              

            </tr>
        </thead>
        <tbody id="tabladias">
        <td>${listaAsignaturas[dataAsignatura - 1].horario_clases[0].dia}</td> 
        <td>${listaAsignaturas[dataAsignatura - 1].horario_clases[0].hora_inicio}</td> 
        <tr>
        <td>${listaAsignaturas[dataAsignatura - 1].horario_clases[1].dia}</td> 
        <td>${listaAsignaturas[dataAsignatura - 1].horario_clases[1].hora_inicio}</td> 

        </tr>
        </tbody>



    </table>
</table>
    
    

    <td>${listaAsignaturas[dataAsignatura - 1].creditos}</td> 
    <td>${listaPeriodos[dataPeriod - 1].codigo}</td> 

    <td>${(encontrados[0].costo_credito) * listaAsignaturas[dataAsignatura - 1].creditos}</td> 

`
            ;
        totalCosto += (encontrados[0].costo_credito) * listaAsignaturas[dataAsignatura - 1].creditos
        horariosContainer.appendChild(nuevoHorario);
        totalInput.innerHTML = `<h3>totalCosto: ${totalCosto}`;

    }
}

};

const ingresarMatricula = () => {
    const cargarMatricula = document.getElementById('matricula');
    cargarMatricula.innerHTML =
        ` <section class="h-100 ">
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

                                                <div> <select cclass="select" id="cargarEstudiantes">
                                                        ${cargarEstMat()}
                                                    </select>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <div class="form-outline">
                                                    <label class="form-label" for="codigoUnico">Periodo</label>

                                                    <div>
                                                        <select cclass="select" id="cargarPeriodo">
                                                            ${cargarPeriodo()}
                                                        </select>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 mb-4">
                                            <label class="form-label" for="codigoUnico">asignatura</label>

                                            <div>
                                                <select cclass="select" id="cargarAsignatura"
                                                    onclick=cargarHorarioM()>
                                                    ${cargarAsignatua()}
                                                </select>

                                            </div>
                                            <div class="col-md-12 mb-4" id="cargarHorario">

                                                <table>
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    <h5>dia
                                                                </th>
                                                                <th>
                                                                    <h5>HoraInicio
                                                                </th>
                                                                <th>
                                                                    <h5>HoraFin
                                                                </th>
                                                                <th>
                                                                    <h5>SAlon
                                                                </th>

                                                            </tr>
                                                        </thead>
                                                        <tbody id="tabladias">


                                                        </tbody>



                                                    </table>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                    <div class="row">
                                       
                            </div>
                        </div>
                        <div class="col-xl-12 d-none d-xl-block">
                            <div class="col-md-12 mb-6">
                                <table>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <h5>id
                                                </th>
                                                <th>
                                                    <h5>nombre
                                                </th>
                                                <th>
                                                    <h5>horario
                                                </th>
                                            
                                                <th>
                                                    <h5>creditos
                                                </th>
                                                <th>
                                                    <h5>periodo
                                                </th>
                                                <th>
                                                    <h5>precio
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody id="tablaAsignatura">


                                        </tbody>



                                    </table>
                                </table>
                            </div>
                        </div>





                        <div class="row" id="total">


                        </div>

                        <div class="row" id="asignatura1">

                            <button onclick="agregarAsignatura()">agregar Asignatura</button>
                        </div>
                        <div class="row">

                            <div class="d-flex justify-content-end pt-3">
                                <button type="button" class="btn btn-light btn-lg"  onclick="location.reload()">Reiniciar</button>
                                <button type="button" class="btn btn-warning btn-lg ms-2"
                                    onclick=enviarDatosMatricula()>Realizar Inscripcion</button>
                            </div>

                        </div>
                    </div>
               
                    </div>

                </div>
            </div>
    </section>`;
    cargarHorarioM();
}

const horarioActual = () => {
    console.log(horarioEstudiante)
    console.log(tamanoHorario)

    for (let i = 0; i < tamanoHorario; i++) {

        console.log(horarioEstudiante[i].dia)
        console.log(h1.dia)
        console.log(horarioEstudiante[i].hora)
        console.log(h2.hora)
        if (horarioEstudiante[i].dia.toUpperCase() == h1.dia.toUpperCase() & horarioEstudiante[i].hora == h1.hora) {
            alert("esta repetido horrario 1")
            return (true)
        }

        if (horarioEstudiante[i].dia.toUpperCase() == h2.dia.toUpperCase() & horarioEstudiante[i].hora == h2.hora) {

            alert("esta repetido horrario 2")
            return (true)
        }

    }
    return (false)
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
    <H1>matriculas
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

const cargarMatriculas = () => {

    const matriculasRInput = document.getElementById('matriculasR');

    let tamProgamas = listaDepartamentos.length;
    matriculasRInput.innerHTML = `
    <div class="table-responsive">
    <table  class="table">
      <thead>
            <tr>
            <th><h2>id</th>
            <th><h2>estudiante_id</th>
            <th><h2>asignatura_id</th>
            <th><h2>periodo_id</th>
            <th><h2>precio</th>
             

            </tr>
        </thead>
        <tbody id="tablaDepartamentocion">
        ${generarOptionsMatriculas()}
    
        </tbody>
       

       
    </table>
    </div>  `

}


const generarOptionsMatriculas = () => {
    let options = '';
    for (const matricula of listaMatriculas) {
        options += `<tr>`
        options += `<td>${matricula.id}</td> 
        <td>${matricula.estudiante_id}</td>
        <td>${matricula.asignatura_id}</td>
        <td>${matricula.periodo_id}</td>
        <td>${matricula.precio}</td> 
       
    
`;
        options += `</tr>`
    }
    console.log(options)
    return options;

}