const pramaprof = document.getElementById('departamentoID');

const cargarDepProf=()=>{
    let options='';
    console.log(listaDepartamentos)
    for(const departamentos of listaDepartamentos){
        console.log(departamentos)
 
        options+=`<option value="${departamentos.id}">${departamentos.nombre}</option> `
    }
    pramaprof.innerHTML=options
}
