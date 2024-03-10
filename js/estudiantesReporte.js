
const cargarEstudiantesR = () => {
    const estudiantesRInput = document.getElementById('estudiantesR');

    let tamProgamas = listaDepartamentos.length;
    console.log(tamProgamas);
    estudiantesRInput.innerHTML = `
    <div class="table-responsive">
    <table  class="table">
      <thead>
            <tr>
            <th><h2>id</th>
            <th><h2>nombre</th>
            <th><h2>apellido</th>
            <th><h2>tipo de documento</th>
            <th><h2>numero de documento</th>
            <th><h2>ciudad de resicencia</th>
            <th><h2>direccion</th>
            <th><h2>telefono</th>
            <th><h2>fecha de nacimineto</th>
            <th><h2>sexo</th>
            <th><h2>programa_id</th>

            </tr>
        </thead>
        <tbody id="tablaDepartamentocion">
        
        ${generarOptionsEstudiantesR()}
 
        </tbody>
       

       
    </table>
    </div>  `

}


const generarOptionsEstudiantesR = () => {
    let options = '';
    for (const Estudiantes of listaEstudiantes) {
        console.log(departamentos)
        options += `<tr>`
        options += `<td>${Estudiantes.id}</td> <td>${Estudiantes.nombre}</td>
        <td>${Estudiantes.apellido}</td> <td>${Estudiantes.tipo_documento}</td>
        <td>${Estudiantes.numero_documento}</td> <td>${Estudiantes.ciudad_residencia}</td>
        <td>${Estudiantes.direccion}</td> <td>${Estudiantes.telefono}</td>
        <td>${Estudiantes.fecha_nacimiento}</td> <td>${Estudiantes.sexo}</td>
        <td>${Estudiantes.programa_id}</td>`;
        options += `</tr>`
    }
    console.log(options)
    return options;

}