const pramaprof = document.getElementById('departamentoID');

let listaProfesores = []
const loadProfesores = async () => {
    try {

        const respuesta = await fetch('http://localhost:3000/profesores');

        if (!respuesta.ok) {
            throw new Error('Error al cargar profesor. Estado: ', respuesta.status);
        }
        const profesores = await respuesta.json();
        listaProfesores.push(...profesores);

    } catch (error) {
        console.error("Error al cargar profesor", error.message);
    }
    console.log(listaProfesores)

}
const cargarDepProf = () => {
    let options = '';
    console.log(listaDepartamentos)
    for (const departamentos of listaDepartamentos) {
        console.log(departamentos)

        options += `<option value="${departamentos.id}">${departamentos.nombre}</option> `
    }
    pramaprof.innerHTML = options
}


const enviarDatosProfesor = () => {
    let nombrePInput = document.getElementById("nombreProfesor");
    let apellidoPInput = document.getElementById("apellidoProfesor");
    let tiPInput = document.getElementById("tipoIdentificacionP");
    let numIdentiPInput = document.getElementById("numIdentiP");
    let departamentoIdInput = document.getElementById("departamentoID");
    let cantProfesores = listaProfesores.length;
    console.log(listaProfesores)

    let dataNombreP = nombrePInput.value;
    let dataApellidoP = apellidoPInput.value;
    let dataTiInputP = tiPInput.value;
    let dataNumIdentiP = numIdentiPInput.value;
    let dataDepatamnetoId = departamentoIdInput.value;

    if (dataNombreP != "" & dataApellidoP != "" & dataTiInputP != "" & dataNumIdentiP != "" & dataDepatamnetoId != "") {
        const nuevoProfesor = {
            id: cantProfesores + 1,
            tipo_documento: dataTiInputP,
            numero_documento: dataNumIdentiP,
            nombre: dataNombreP,
            apellido: dataApellidoP,
            departamento_id: dataDepatamnetoId
        };
        guardarProfesor(nuevoProfesor)
    }
    else {
        alert("falta campos por llenar")
    }
}
const guardarProfesor = async (nuevoProfesor) => {
    try {


        const respuesta = await fetch('http://localhost:3000/profesores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoProfesor),

        });

        if (!respuesta.ok) {
            throw new Error('Error al crear el producto. Estado: ', respuesta.status);
        }
        const profesorCreado = await respuesta.json();

        console.log('producto creado:', profesorCreado);
        alert("se ingreso un nuevo Profesor")

    } catch (error) {
        console.error("Error al cargar producto", error.message);
    }

}

const datosProf = () => {
    let profesoresInput = document.getElementById("profesores");
    let profselec = profesoresInput.value

}



const cargarDocentesR = () => {
    const docentesRInput = document.getElementById('docentesR');


    docentesRInput.innerHTML = `
    <div class="table-responsive">
    <table  class="table">
      <thead>
            <tr>
            <th><h2>id</th>
            <th><h2>nombre</th>
            <th><h2>apellido</th>
            <th><h2>tipo de documento</th>

            <th><h2>numero de documento</th>
            <th><h2>departamento id</th>
            </tr>
        </thead>
        <tbody id="tablaDepartamentocion">
        
        ${generarOptionsDocentesR()}
 
        </tbody>
       

       
    </table>
    </div>  `

}


const generarOptionsDocentesR = () => {
    let options = '';
    for (const profesoresR of listaProfesores) {
        options += `<tr>`
        options += `<td>${profesoresR.id}</td> <td>${profesoresR.nombre}</td>
        <td>${profesoresR.apellido}</td> <td>${profesoresR.tipo_documento}</td>
        <td>${profesoresR.numero_documento}</td> <td>${profesoresR.departamento_id}</td>`;
        options += `</tr>`
    }
    return options;

}
const limpiarDocente=()=>{
    let nombrePInput = document.getElementById("nombreProfesor");
    let apellidoPInput = document.getElementById("apellidoProfesor");
    let tiPInput = document.getElementById("tipoIdentificacionP");
    let numIdentiPInput = document.getElementById("numIdentiP");
    let departamentoIdInput = document.getElementById("departamentoID");
    nombrePInput.value="";
    apellidoPInput.value=""
     numIdentiPInput.value=""
  
}