let listaSalones=[]
const loadSalones= async()=>{
    console.log("hola")
    try{

        const respuesta=await fetch('http://localhost:3000/salones');
    
        if(!respuesta.ok){
           throw new Error('Error al cargar salones1. Estado: ',respuesta.status);
        }
        const salones=await respuesta.json();
        listaSalones.push(...salones);

    }catch(error){
        console.error("Error al cargar salones2",error.message);
    }
    console.log(listaSalones)
    cargarSalones();
}

const cargarSalones= ()=>{
    let tamProgamas=listaSalones.length;
    console.log(tamProgamas);
    salonesInput.innerHTML = `
    <div class="table-responsive">
    <table  class="table table-hover">
      <thead>
            <tr>
                <th><h2>id</th>
                <th><h2>Capacidad alumnos</th>
                <th><h2>edificio</th>
                <th><h2>piso</th>
                <th><h2>numero identificacion</th>

            </tr>
        </thead>
        <tbody id="tablaSalonecion">
        
        ${generarOptionsSalones()}
 
        </tbody>
       

       
    </table>
    </div>  `
    
}


const generarOptionsSalones=()=>{
    let options='';
    numSalones=listaSalones.length;
    console.log(numSalones);
    for(const salones of listaSalones){
        console.log(salones)
        options+=`<tr>`
        options+=`<td>${salones.id}</td> <td>${salones.capacidad_alumnos}</td> <td>${salones.edificio}</td><td>${salones.piso}</td><td>${salones.numero_identificacion}</td>`;
        options+=`</tr>`
    }
    console.log(options)
    return options;

}
