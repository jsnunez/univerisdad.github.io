const ProgramaIdAInput=document.getElementById('ProgramaIdA');
const profesorIdAInput=document.getElementById('profesores');
const cursosIdAInput=document.getElementById('cursoId');


let listaAsignaturas=[]
const loadAsignaturas= async()=>{
    try{

        const respuesta=await fetch('http://localhost:3000/asignaturas');
    
        if(!respuesta.ok){
           throw new Error('Error al cargar estudiante. Estado: ',respuesta.status);
        }
        const alumnos=await respuesta.json();
        listaAsignaturas.push(...alumnos);

    }catch(error){
        console.error("Error al cargar estudiante",error.message);
    }
    console.log(listaAsignaturas)

}
const cargarProAsig= async()=>{
    
    let options='';
    console.log(listaProgramas)
    for(const programas of listaProgramas){
        console.log(programas)
 
    options+=`<option value="${programas.id}">${programas.nombre}</option> `
    }
    ProgramaIdAInput.innerHTML=options
}
const cargarProfeAsig=()=>{
    
    let options='';
    console.log(listaProfesores)
    for(const profesores of listaProfesores){
        console.log(profesores)
 
        options+=`<option value="${profesores.id}">${profesores.nombre+" "+profesores.apellido}</option> `
    }
    profesorIdAInput.innerHTML=options
}


const cargarCursosAsig=()=>{
    
    let options='';
    console.log(listaProfesores)
    for(const cursos of listaCursos){
        console.log(cursos)
 
        options+=`<option value="${cursos.id}">${cursos.nombre}</option> `
    }
    cursosIdAInput.innerHTML=options
}
const cargarSalonAsig=()=>{
    const salonInput=document.getElementById('SalonId');

    let options='';
    console.log(listaSalones)
    for(const salon of listaSalones){
  
 
        options+=`<option value="${salon.id}">${salon.numero_identificacion}</option> `
    }
    console.log("hola salones")
    salonInput.innerHTML=options
}


const enviarDatosAsignaturas=()=>{
    let codigoUnicoInput=document.getElementById("codigoUnico");
    let creditosInput=document.getElementById("creditos");
    let profesoresInput=document.getElementById("profesores");
    let cuposInput=document.getElementById("cupos");
    let ProgramaIdAInput=document.getElementById("ProgramaIdA");
    let cursoIdInput=document.getElementById("cursoId");
    let cantListas=listaAsignaturas.length;
    
    
    let datacodigoUnico=codigoUnicoInput.value;
    let datacreditos=creditosInput.value;
    let dataprofesores=profesoresInput.value;
    let datacupos=cuposInput.value;
    let dataProgramaIdA=ProgramaIdAInput.value;
    let datacurso=cursoIdInput.value;
    const horarios = [];
    const horariosInputs = document.querySelectorAll('.horario');
    horariosInputs.forEach(horarioInput => {
        const diaSemana = horarioInput.querySelector('.diaSemana').value;
        const horaInicio = horarioInput.querySelector('.horaInicio').value;
        const horaFin = horarioInput.querySelector('.horaFin').value;
        const salonHora = horarioInput.querySelector('.salonHorarioAsignatura').value;
        horarios.push({ dia: diaSemana, hora_inicio: horaInicio, hora_fin: horaFin, salon_id : salonHora });
    });
    
    
    const nuevaAsignatura =   {
        id: cantListas+1,
        "curso_id": parseInt(datacurso),
        "codigo": datacodigoUnico,
        "creditos":parseInt(datacreditos),
        "profesor_id": parseInt(dataprofesores),
        "cupos_disponibles": parseInt(datacupos),
        "programa_id": dataProgramaIdA,
        "horario_clases": 
            horarios
        
      };
    guardarAsignatura(nuevaAsignatura)
    
    }
    const guardarAsignatura= async(nuevaAsignatura)=>{
        try{
    
            const respuesta=await fetch('http://localhost:3000/asignaturas',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(nuevaAsignatura),
            });
    
            if(!respuesta.ok){
               throw new Error('Error al crear la asignatura. Estado: ',respuesta.status);
            }
            const asignaturaCreada=await respuesta.json();
            
            console.log('producto creado:', asignaturaCreada);
            alert("se ingreso una nueva asignatura")
        }catch(error){
            console.error("Error al cargar asignatura",error.message);
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
    
            <label for="horaInicio">Hora de Inicio:</label>
            <input type="time" class="horaInicio" required>
    
            <label for="horaFin">Hora de Finalización:</label>
            <input type="time" class="horaFin" required>
    
            <label for="salonHorarioAsignatura">Salón:</label>
            <select class="salonHorarioAsignatura" required>
            ${ salonHorarioPrograma()}
            </select>`
        ;
      
        horariosContainer.appendChild(nuevoHorario);


    };
    const salonHorarioPrograma = () => {

        let salonAsignatura = '';
    
        for (const salon of listaSalones){
            salonAsignatura +=  `<option value = ${salon.id}>${salon.numero_identificacion}</options>`
        }
    
        return salonAsignatura
    
    }

 