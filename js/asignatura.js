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
    cargarProAsig();
    cargarProfeAsig();
    cargarCursosAsig();
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