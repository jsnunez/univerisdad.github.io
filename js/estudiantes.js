const pramaEst = document.getElementById('programaID');

let listaEstudiantes = []
const loadEstudiantes = async () => {
    try {

        const respuesta = await fetch('http://localhost:3000/alumnos');

        if (!respuesta.ok) {
            throw new Error('Error al cargar estudiante. Estado: ', respuesta.status);
        }
        const alumnos = await respuesta.json();
        listaEstudiantes.push(...alumnos);

    } catch (error) {
        console.error("Error al cargar estudiante", error.message);
    }
    console.log(listaEstudiantes)

}

const cargarProEst = () => {
    let options = '';
    console.log(listaProgramas)
    for (const programas of listaProgramas) {
        console.log(programas)

        options += `<option value="${programas.id}">${programas.nombre}</option> `
    }
    pramaEst.innerHTML = options
}

const enviarDatosEstudiante = () => {
    let nombreInput = document.getElementById("nombreEstudiante");
    let apellidoInput = document.getElementById("apellidoEstudiante");
    let tiInput = document.getElementById("tipoIdentificacion");
    let numIdentiInput = document.getElementById("numIdenti");
    let direccionInput = document.getElementById("direccion");
    let ciudadInput = document.getElementById("ciudad");
    let telefonoInput = document.getElementById("telefono");
    let generoInput = document.getElementById("genero");

    let fechanacimientoInput = document.getElementById("fechanacimiento");
    let programaIdInput = document.getElementById("programaID");
    let cantEstudinates = listaEstudiantes.length;


    let dataNombreE = nombreInput.value;
    console.log("sebas" + dataNombreE)
    let dataApellidoE = apellidoInput.value;
    let dataTiInput = tiInput.value;
    let dataNumIdenti = numIdentiInput.value;
    let dataDirreccion = direccionInput.value;
    let dataCiudad = ciudadInput.value;
    let dataTelefono = telefonoInput.value;
    let dataGenero = generoInput.value;
    let dataFechanacimiento = fechanacimientoInput.value;
    let dataProgramaId = programaIdInput.value;


    const nuevoEstudiante = {
        id: cantEstudinates + 1,
        nombre: dataNombreE,
        apellido: dataApellidoE,
        tipo_documento: dataTiInput,
        numero_documento: dataNumIdenti,
        ciudad_residencia: dataCiudad,
        direccion: dataDirreccion,
        telefono: dataTelefono,
        fecha_nacimiento: dataFechanacimiento,
        sexo: dataGenero,
        programa_id: dataProgramaId
    };
    guardarEstudiante(nuevoEstudiante)

}
const guardarEstudiante = async (nuevoEstudiante) => {
    try {

        const respuesta = await fetch('http://localhost:3000/alumnos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoEstudiante),
        });

        if (!respuesta.ok) {
            throw new Error('Error al crear el producto. Estado: ', respuesta.status);
        }
        const EstudianteCreado = await respuesta.json();

        console.log('producto creado:', EstudianteCreado);
        alert("se ingreso un nuevo estudiante")
    } catch (error) {
        console.error("Error al cargar producto", error.message);
    }

}

const generarOptionsEstudiantes = () => {
    let options = '';
    numEstudiantes = listaEstudiantes.length;
    console.log(numEstudiantes);
    for (const estudiantes of listaEstudiantes) {
        console.log(estudiantes)
        options += `<tr>`
        options += `<td>${estudiantes.id}</td> <td>${estudiantes.nombre}</td> `;
        options += `</tr>`
    }
    console.log(options)
    return options;

}