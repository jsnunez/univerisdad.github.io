let listaProgramas = []
const loadProgramas = async () => {
    console.log("hola")
    try {

        const respuesta = await fetch('http://localhost:3000/programas');

        if (!respuesta.ok) {
            throw new Error('Error al cargar programas1. Estado: ', respuesta.status);
        }
        const programas = await respuesta.json();
        listaProgramas.push(...programas);

    } catch (error) {
        console.error("Error al cargar programas2", error.message);
    }
    console.log(listaProgramas)
    cargarProgramas();
}

const cargarProgramas = () => {
    let tamProgamas = listaProgramas.length;
    console.log(tamProgamas);
    programasInput.innerHTML = `
    <H1>Programas
    <div class="table-responsive">
    <table  class="table table-hover">
      <thead>
            <tr>
                <th><h2>id</th>
                <th><h2>nivel</th>
                <th><h2>nombre</th>
            </tr>
        </thead>
        <tbody id="tablaProgramacion">
        
        ${generarOptionsProgramas()}
 
        </tbody>
       

       
    </table>
    </div>  `

}


const generarOptionsProgramas = () => {
    let options = '';
    numProgramas = listaProgramas.length;
    console.log(numProgramas);
    for (const programas of listaProgramas) {
        console.log(programas)
        options += `<tr>`
        options += `<td>${programas.id}</td> <td>${programas.nombre}</td> <td>${programas.nivel}</th>`;
        options += `</tr>`
    }
    console.log(options)
    return options;

}
