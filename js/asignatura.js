const ProgramaIdAInput = document.getElementById('ProgramaIdA');
const profesorIdAInput = document.getElementById('profesores');
const cursosIdAInput = document.getElementById('cursoId');


let listaAsignaturas = []
const loadAsignaturas = async () => {
    try {

        const respuesta = await fetch('http://localhost:3000/asignaturas');

        if (!respuesta.ok) {
            throw new Error('Error al cargar estudiante. Estado: ', respuesta.status);
        }
        const alumnos = await respuesta.json();
        listaAsignaturas.push(...alumnos);

    } catch (error) {
        console.error("Error al cargar estudiante", error.message);
    }

}
const cargarProAsig = async () => {

    let options = '';
    for (const programas of listaProgramas) {

        options += `<option value="${programas.id}">${programas.nombre}</option> `
    }
    ProgramaIdAInput.innerHTML = options
}
const cargarProfeAsig = () => {

    let options = '';
    for (const profesores of listaProfesores) {

        options += `<option value="${profesores.id}">${profesores.nombre + " " + profesores.apellido}</option> `
    }
    profesorIdAInput.innerHTML = options
}


const cargarCursosAsig = () => {

    let options = '';
    for (const cursos of listaCursos) {

        options += `<option value="${cursos.id}">${cursos.nombre}</option> `
    }
    cursosIdAInput.innerHTML = options
}
const cargarSalonAsig = () => {
    const salonInput = document.getElementById('SalonId');

    let options = '';
    for (const salon of listaSalones) {


        options += `<option value="${salon.id}">${salon.numero_identificacion}</option> `
    }
    salonInput.innerHTML = options
}


const enviarDatosAsignaturas = () => {
    let codigoUnicoInput = document.getElementById("codigoUnico");
    let creditosInput = document.getElementById("creditos");
    let profesoresInput = document.getElementById("profesores");
    let cuposInput = document.getElementById("cupos");
    let ProgramaIdAInput = document.getElementById("ProgramaIdA");
    let cursoIdInput = document.getElementById("cursoId");
    let cantListas = listaAsignaturas.length;


    let datacodigoUnico = codigoUnicoInput.value;
    let datacreditos = creditosInput.value;
    let dataprofesores = profesoresInput.value;
    let datacupos = cuposInput.value;
    let dataProgramaIdA = ProgramaIdAInput.value;
    let datacurso = cursoIdInput.value;
    const horarios = [];
    const horariosInputs = document.querySelectorAll('.horario');
    let bandera = 0;
    let contadorHorario=0;

    horariosInputs.forEach(horarioInput => {
        contadorHorario++;
       
        const diaSemana = horarioInput.querySelector('.diaSemana').value;
        const salonHora = horarioInput.querySelector('.salonHorarioAsignatura').value;

        let horaInicio = "";
        let horaFin = ""
        if (horarioInput.querySelector('.franjaSeleccionada').value == 1) {
            horaInicio = "6:00 am";
            horaFin = "8:00 am";
        }
        if (horarioInput.querySelector('.franjaSeleccionada').value == 2) {
            horaInicio = "8:00 am";
            horaFin = "10:00 am";
        }
        if (horarioInput.querySelector('.franjaSeleccionada').value == 3) {
            horaInicio = "10:00 am";
            horaFin = "12:00 m";
        }
        if (horarioInput.querySelector('.franjaSeleccionada').value == 4) {
            horaInicio = "12:00 m";
            horaFin = "2:00 pm";
        }
        if (horarioInput.querySelector('.franjaSeleccionada').value == 5) {
            horaInicio = "2:00 pm";
            horaFin = "4:00 pm";
        }
        if (horarioInput.querySelector('.franjaSeleccionada').value == 6) {
            horaInicio = "4:00 pm";
            horaFin = "6:00 pm";
        }
        if (horarioInput.querySelector('.franjaSeleccionada').value == 7) {
            horaInicio = "6:00 pm";
            horaFin = "8:00 pm";
        }

        let horarioAgregar = {
            "dia": diaSemana,
            "hora_inicio": horaInicio,
            "hora_fin": horaFin,
            "salon_id": salonHora
        }

        const tamAsignatura = listaAsignaturas.length;

       

        for (i = 0; i < tamAsignatura; i++) {

            tamhorario = listaAsignaturas[i].horario_clases.length;

            for (x = 0; x < tamhorario; x++) {

                if (diaSemana == listaAsignaturas[i].horario_clases[x].dia
                    && horaInicio == listaAsignaturas[i].horario_clases[x].hora_inicio
                    && salonHora == listaAsignaturas[i].horario_clases[x].salon_id ) {
                    bandera = 1;
                }
            }
        }
        console.log(horarios)
if(contadorHorario>1){
    console.log(horarios[0].dia)
    if(horarios[0].dia == diaSemana & horarios[0].hora_inicio == horaInicio & horarios[0].salon_id){
        alert(`esta repetido los nuevos horarios`)
        bandera=1;
       }
}
       
        if(bandera==0){
    horarios.push({ dia: diaSemana, hora_inicio: horaInicio, hora_fin: horaFin, salon_id: salonHora });

}
else{
    alert(`esta repetido el horario ${contadorHorario}`)

}

console.log(horarios)
      

      
    });


    const nuevaAsignatura = {
        id: cantListas + 1,
        "curso_id": parseInt(datacurso),
        "codigo": datacodigoUnico,
        "creditos": parseInt(datacreditos),
        "profesor_id": parseInt(dataprofesores),
        "cupos_disponibles": parseInt(datacupos),
        "programa_id": dataProgramaIdA,
        "horario_clases":
            horarios

    };
    if (bandera==0 & datacodigoUnico != "" & datacreditos != "" & dataprofesores != "" & datacupos != "" & dataProgramaIdA != "") {

        guardarAsignatura(nuevaAsignatura)
    }
    else {
        alert("faltan campos por llenar")

    }
}
const guardarAsignatura = async (nuevaAsignatura) => {
    try {

        const respuesta = await fetch('http://localhost:3000/asignaturas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaAsignatura),
        });

        if (!respuesta.ok) {
            throw new Error('Error al crear la asignatura. Estado: ', respuesta.status);
        }
        const asignaturaCreada = await respuesta.json();

        console.log('producto creado:', asignaturaCreada);
        alert("se ingreso una nueva asignatura")
    } catch (error) {
        console.error("Error al cargar asignatura", error.message);
    }

}
const agregarHorario = () => {

    const horariosContainer = document.getElementById('horarios');
    const nuevoHorario = document.createElement('div');
    nuevoHorario.classList.add('horario');
    nuevoHorario.innerHTML = `
            <label for="diaSemana">Día de la Semana:</label>
            <select class="diaSemana">
                <option value="lunes">Lunes</option>
                <option value="martes">Martes</option>
                <option value="miercoles">Miércoles</option>
                <option value="jueves">Jueves</option>
                <option value="viernes">Viernes</option>
            </select>
    
            <label for="horaInicio">horario:</label>
            <select class="franjaSeleccionada" >
            <option value="1">6:00am - 8:00am</option>
            <option value="2">8:00am - 10:00am</option>
            <option value="3">10:00am - 12:00m</option>
            <option value="4">12:00m - 2:00am</option>
            <option value="5">2:00pm - 4:00pm</option>
            <option value="6">4:00pm - 6:00pm</option>
            <option value="7">6:00pm - 8:00pm</option>


        </select>

    
            <label for="salonHorarioAsignatura">Salón:</label>
            <select class="salonHorarioAsignatura" required>
            ${salonHorarioPrograma()}
            </select>`
        ;

    horariosContainer.appendChild(nuevoHorario);


};
const salonHorarioPrograma = () => {

    let salonAsignatura = '';

    for (const salon of listaSalones) {
        salonAsignatura += `<option value = ${salon.id}>${salon.numero_identificacion}</options>`
    }

    return salonAsignatura

}


const generarCodigo=()=>{
      let cursoIdInput = document.getElementById("cursoId");
      let codIdInput = document.getElementById("codigoUnico");
      const oracion =  listaCursos[cursoIdInput.value-1].codigo+"-PER-2024";
      codIdInput.value=oracion

      console.log(oracion);
}
