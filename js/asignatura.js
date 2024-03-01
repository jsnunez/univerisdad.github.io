const ProgramaIdAInput=document.getElementById('ProgramaIdA');
const profesorIdAInput=document.getElementById('profesores');
const cursosIdAInput=document.getElementById('cursoId');
const salonInput=document.getElementById('SalonId');


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
const cargarProAsig=()=>{
    
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
    
    let options='';
    console.log(listaSalones)
    for(const salon of listaSalones){
        console.log(salon)
 
        options+=`<option value="${salon.id}">${salon.numero_identificacion}</option> `
    }
    salonInput.innerHTML=options
}


const enviarDatosAsignaturas=()=>{
    let codigoUnicoInput=document.getElementById("codigoUnico");
    let creditosInput=document.getElementById("creditos");
    let profesoresInput=document.getElementById("profesores");
    let cuposInput=document.getElementById("cupos");
    let ProgramaIdAInput=document.getElementById("ProgramaIdA");
    let cursoIdInput=document.getElementById("cursoId");
    let dias1Input=document.getElementById("dias1");
    let HoraInicio1Input=document.getElementById("HoraInicio1");    
    let HoraFin1Input=document.getElementById("HoraFin1");    
    let dias2Input=document.getElementById("dias2");
    let HoraInicio2Input=document.getElementById("HoraInicio2");    
    let HoraFin2Input=document.getElementById("HoraFin2");
    let salonInput=document.getElementById("SalonId");

    let cantListas=listaAsignaturas.length;
    
    
    let datacodigoUnico=codigoUnicoInput.value;
    let datacreditos=creditosInput.value;
    let dataprofesores=profesoresInput.value;
    let datacupos=cuposInput.value;
    let dataProgramaIdA=ProgramaIdAInput.value;
    let datacurso=cursoIdInput.value;
    let datadias1=dias1Input.value;
    let dataHoraInicio1=HoraInicio1Input.value;
    let dataHoraFin1=HoraFin1Input.value;    
    let datadias2=dias2Input.value;
    let dataHoraInicio2=HoraInicio2Input.value;
    let dataHoraFin2=HoraFin2Input.value;
    let dataSalon=salonInput.value;

    
    
    const nuevaAsignatura =   {
        id: cantListas+1,
        "curso_id": parseInt(datacurso),
        "codigo": datacodigoUnico,
        "creditos":parseInt(datacreditos),
        "profesor_id": parseInt(dataprofesores),
        "cupos_disponibles": parseInt(datacupos),
        "programa_id": dataProgramaIdA,
        "horario_clases": [
          {
            "dia": datadias1,
            "hora_inicio": dataHoraInicio1,
            "hora_fin": dataHoraFin1,
            "salon_id": parseInt(dataSalon)
          },
          {
            "dia": datadias2,
            "hora_inicio": dataHoraInicio2,
            "hora_fin": dataHoraFin2,
            "salon_id": parseInt(dataSalon)
          }
        ]
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
    