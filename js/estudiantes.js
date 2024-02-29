const pramaEst = document.getElementById('programaID');

const cargarDepEst=()=>{
    let options='';
    console.log(listaProgramas)
    for(const programas of listaProgramas){
        console.log(programas)
 
        options+=`<option value="${programas.id}">${programas.nombre}</option> `
    }
    pramaEst.innerHTML=options
}
