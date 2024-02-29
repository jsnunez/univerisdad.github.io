let listaTarifas=[]
const loadTarifas= async()=>{
    console.log("hola")
    try{

        const respuesta=await fetch('http://localhost:3000/tarifas');
    
        if(!respuesta.ok){
           throw new Error('Error al cargar tarifas1. Estado: ',respuesta.status);
        }
        const tarifas=await respuesta.json();
        listaTarifas.push(...tarifas);

    }catch(error){
        console.error("Error al cargar tarifas2",error.message);
    }
    console.log(listaTarifas)
    cargarTarifas();
}

const cargarTarifas= ()=>{
    let tamProgamas=listaTarifas.length;
    console.log(tamProgamas);
    tarifasInput.innerHTML = `
    <div class="table-responsive">
    <table  class="table table-hover">
      <thead>
            <tr>
                <th><h2>id</th>
                <th><h2>costo credito</th>
                <th><h2>periodo_id</th>
                <th><h2>programa_id</th>
            </tr>
        </thead>
        <tbody id="tablaTarifacion">
        
        ${generarOptionsTarifas()}
 
        </tbody>
       

       
    </table>
    </div>  `
    
}


const generarOptionsTarifas=()=>{
    let options='';
    numTarifas=listaTarifas.length;
    console.log(numTarifas);
    for(const tarifas of listaTarifas){
        console.log(tarifas)
        options+=`<tr>`
        options+=`<td>${tarifas.id}</td> <td>${tarifas.costo_credito}</td> <td>${tarifas.periodo_id}</td><td>${tarifas.programa_id}</td>`;
        options+=`</tr>`
    }
    console.log(options)
    return options;

}
