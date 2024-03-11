let listaDepartamentos = []
const loadDepartamentos = async () => {
    console.log("hola")
    try {

        const respuesta = await fetch('http://localhost:3000/departamentos');

        if (!respuesta.ok) {
            throw new Error('Error al cargar departamentos1. Estado: ', respuesta.status);
        }
        const departamentos = await respuesta.json();
        listaDepartamentos.push(...departamentos);

    } catch (error) {
        console.error("Error al cargar departamentos2", error.message);
    }
    console.log(listaDepartamentos)
    cargarDepartamentos();
}

const cargarDepartamentos = () => {
    let tamProgamas = listaDepartamentos.length;
    console.log(tamProgamas);
    departamentosInput.innerHTML = `
    <H1>Departamentos
    <div class="table-responsive">
    <table  class="table">
      <thead>
            <tr>
                <th><h2>id</th>
                <th><h2>nombre</th>

            </tr>
        </thead>
        <tbody id="tablaDepartamentocion">
        
        ${generarOptionsDepartamentos()}
 
        </tbody>
       

       
    </table>
    </div>  `

}


const generarOptionsDepartamentos = () => {
    let options = '';
    numDepartamentos = listaDepartamentos.length;
    console.log(numDepartamentos);
    for (const departamentos of listaDepartamentos) {
        console.log(departamentos)
        options += `<tr>`
        options += `<td>${departamentos.id}</td> <td>${departamentos.nombre}</td> `;
        options += `</tr>`
    }
    console.log(options)
    return options;

}
