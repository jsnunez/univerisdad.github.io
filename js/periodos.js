let listaPeriodos=[]
const loadPeriodos= async()=>{
    console.log("hola")
    try{

        const respuesta=await fetch('http://localhost:3000/periodos');
    
        if(!respuesta.ok){
           throw new Error('Error al cargar periodos1. Estado: ',respuesta.status);
        }
        const periodos=await respuesta.json();
        listaPeriodos.push(...periodos);

    }catch(error){
        console.error("Error al cargar periodos2",error.message);
    }
    console.log(listaPeriodos)
    cargarPeriodos();
}

const cargarPeriodos= ()=>{
    let tamProgamas=listaPeriodos.length;
    console.log(tamProgamas);
    periodosInput.innerHTML = `
    <div class="table-responsive">
    <table  class="table">
      <thead>
            <tr>
                <th><h2>id</th>
                <th><h2>codigo</th>
                <th><h2>año</th>
                <th><h2>semestre</th>
            </tr>
        </thead>
        <tbody id="tablaPeriodocion">
        
        ${generarOptionsPeriodos()}
 
        </tbody>
       

       
    </table>
    </div>  `
    
}


const generarOptionsPeriodos=()=>{
    let options='';
    numPeriodos=listaPeriodos.length;
    console.log(numPeriodos);
    for(const periodos of listaPeriodos){
        console.log(periodos)
        options+=`<tr>`
        options+=`<td>${periodos.id}</td> <td>${periodos.codigo}</td> <td>${periodos.ano}</td> <td>${periodos.semestre}</td>`;
        options+=`</tr>`
    }
    console.log(options)
    return options;

}