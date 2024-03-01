const pramaprof = document.getElementById('departamentoID');

let listaProfesores=[]
const loadProfesores= async()=>{
    try{

        const respuesta=await fetch('http://localhost:3000/profesores');
    
        if(!respuesta.ok){
           throw new Error('Error al cargar profesor. Estado: ',respuesta.status);
        }
        const profesores=await respuesta.json();
        listaProfesores.push(...profesores);

    }catch(error){
        console.error("Error al cargar profesor",error.message);
    }
    console.log(listaProfesores)

}
const cargarDepProf=()=>{
    let options='';
    console.log(listaDepartamentos)
    for(const departamentos of listaDepartamentos){
        console.log(departamentos)
 
        options+=`<option value="${departamentos.id}">${departamentos.nombre}</option> `
    }
    pramaprof.innerHTML=options
}


const enviarDatosProfesor=()=>{
    let nombrePInput=document.getElementById("nombreProfesor");
    let apellidoPInput=document.getElementById("apellidoProfesor");
    let tiPInput=document.getElementById("tipoIdentificacionP");
    let numIdentiPInput=document.getElementById("numIdentiP");
    let departamentoIdInput=document.getElementById("departamentoID");
    let cantProfesores=listaProfesores.length;
    console.log(listaProfesores)
    
    let dataNombreP=nombrePInput.value;
    let dataApellidoP=apellidoPInput.value;
    let dataTiInputP=tiPInput.value;
    let dataNumIdentiP=numIdentiPInput.value;
    let dataDepatamnetoId=departamentoIdInput.value;
    
    
    const nuevoProfesor = {
        id: cantProfesores+1,
        tipo_documento: dataTiInputP,
        numero_documento: dataNumIdentiP,
        nombre: dataNombreP,
        apellido: dataApellidoP,
        departamento_id: dataDepatamnetoId
    };
    guardarProfesor(nuevoProfesor)
    
    }
    const guardarProfesor= async(nuevoProfesor)=>{
        try{
    
            const respuesta=await fetch('http://localhost:3000/profesores',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(nuevoProfesor),
            });
    
            if(!respuesta.ok){
               throw new Error('Error al crear el producto. Estado: ',respuesta.status);
            }
            const profesorCreado=await respuesta.json();
            
            console.log('producto creado:', profesorCreado);
            alert("se ingreso un nuevo Profesor")
        }catch(error){
            console.error("Error al cargar producto",error.message);
        }
    
    }
    
