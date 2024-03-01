const navInput = document.getElementById('nav');
const periodosInput = document.getElementById('periodos');
const programasInput = document.getElementById('programas');
const tarifasInput = document.getElementById('tarifas');
const departamentosInput = document.getElementById('departamentos');
const salonesInput = document.getElementById('salones');
const estudiantesInput = document.getElementById('estudiantes');
const docentesInput = document.getElementById('docentes');
const asignaturasInput = document.getElementById('asignatura');
const matriculaInput = document.getElementById('matricula');

const paginaPrincipal = () => {

  navInput.innerHTML = `
    <nav class="nav nav-pills nav-fill">
        <a id="pProgramas" class="nav-link active" aria-current="page" onclick=paginaPrincipal()><h1>programas</h1></h1></a>
        <a id="pPeriodos" class="nav-link" aria-current="page" onclick=irperiodos()><h1>periodos</h1></a>
        <a id="PTarifas" class="nav-link"  onclick=irTarifa()><h1>tarifas</h1></h1></a>
        <a id="PDepartamentos" class="nav-link" onclick=irDepartamentos()><h1>departamentos</h1></h1></a>
        <a id="pSalones" class="nav-link" onclick=irSalones()><h1>salones</h1></h1></a>
        <a id="pEstudiante" class="nav-link" onclick=irEstudinates()><h1>estudiante</h1></h1></a>
        <a id="pDocente" class="nav-link" onclick=irDocente()><h1>docente</h1></h1></a>        
        <a id="pAsignaturas" class="nav-link" onclick=irAsignaturas()><h1>asignatura</h1></h1></a>
        <a id="pMatricula" class="nav-link" onclick=irMatricula()><h1>matrícula </h1></h1></a>
        </nav>
  `;
  periodosInput.style.display="none"
  programasInput.style.display = 'block';
  tarifasInput.style.display = 'none';
  departamentosInput.style.display = 'none';
  salonesInput.style.display = 'none';
  estudiantesInput.style.display = 'none';
  docentesInput.style.display = 'none';
  matriculaInput.style.display = 'none';
  asignaturasInput.style.display="none";


}
const irTarifa = () => {
  navInput.innerHTML = `
    <nav class="nav nav-pills nav-fill">
        <a id="pProgramas" class="nav-link" aria-current="page" onclick=paginaPrincipal()><h1>programas</h1></a>
        <a id="pPeriodos" class="nav-link" aria-current="page" onclick=irperiodos()><h1>periodos</h1></a>
        <a id="PTarifas" class="nav-link active"  onclick=irTarifa()><h1>tarifas</h1></a>
        <a id="PDepartamentos" class="nav-link" onclick=irDepartamentos()><h1>departamentos</h1></a>
        <a id="pSalones" class="nav-link" onclick=irSalones()><h1>salones</h1></a>
        <a id="pEstudiante" class="nav-link" onclick=irEstudinates()><h1>estudiante</h1></a>
        <a id="pDocente" class="nav-link" onclick=irDocente()><h1>docente</h1></a>
        <a id="pAsignaturas" class="nav-link" onclick=irAsignaturas()><h1>asignatura</h1></h1></a>

        <a id="pMatricula" class="nav-link" onclick=irMatricula()><h1>matrícula </h1></a>
        </nav>
  `;
  programasInput.style.display = 'none';
  periodosInput.style.display="none"
  tarifasInput.style.display = 'block';
  departamentosInput.style.display = 'none';
  salonesInput.style.display = 'none';
  estudiantesInput.style.display = 'none';
  docentesInput.style.display = 'none';
  matriculaInput.style.display = 'none';
  periodosInput.style.display="none"
  asignaturasInput.style.display="none";


}
const irDepartamentos = () => {
  navInput.innerHTML = `
    <nav class="nav nav-pills nav-fill">
        <a id="pProgramas" class="nav-link" aria-current="page" onclick=paginaPrincipal()><h1>programas</h1></a>
        <a id="pPeriodos" class="nav-link" aria-current="page" onclick=irperiodos()><h1>periodos</h1></a>
        <a id="PTarifas" class="nav-link"  onclick=irTarifa()><h1>tarifas</h1></a>
        <a id="PDepartamentos" class="nav-link active" onclick=irDepartamentos()><h1>departamentos</h1></a>
        <a id="pSalones" class="nav-link" onclick=irSalones()><h1>salones</h1></a>
        <a id="pEstudiante" class="nav-link" onclick=irEstudinates()><h1>estudiante</h1></a>
        <a id="pDocente" class="nav-link" onclick=irDocente()><h1>docente</h1></a>
        <a id="pAsignaturas" class="nav-link" onclick=irAsignaturas()><h1>asignatura</h1></h1></a>

        <a id="pMatricula" class="nav-link" onclick=irMatricula()><h1>matrícula </h1></a>
        </nav>
  `;
  programasInput.style.display = 'none';
  tarifasInput.style.display = 'none';
  departamentosInput.style.display = 'block';
  salonesInput.style.display = 'none';
  estudiantesInput.style.display = 'none';
  docentesInput.style.display = 'none';
  periodosInput.style.display="none";
  asignaturasInput.style.display="none";

  matriculaInput.style.display = 'none';
}
const irSalones = () => {
  navInput.innerHTML = `
    <nav class="nav nav-pills nav-fill">
        <a id="pProgramas" class="nav-link" aria-current="page" onclick=paginaPrincipal()><h1>programas</h1></a>
        <a id="pPeriodos" class="nav-link" aria-current="page" onclick=irperiodos()><h1>periodos</h1></a>
        <a id="PTarifas" class="nav-link"  onclick=irTarifa()><h1>tarifas</h1></a>
        <a id="PDepartamentos" class="nav-link" onclick=irDepartamentos()><h1>departamentos</h1></a>
        <a id="pSalones" class="nav-link active" onclick=irSalones()><h1>salones</h1></a>
        <a id="pEstudiante" class="nav-link" onclick=irEstudinates()><h1>estudiante</h1></a>
        <a id="pDocente" class="nav-link" onclick=irDocente()><h1>docente</h1></a>
        <a id="pAsignaturas" class="nav-link" onclick=irAsignaturas()><h1>asignatura</h1></h1></a>

        <a id="pMatricula" class="nav-link" onclick=irMatricula()><h1>matrícula </h1></a>   
        </nav>
  `;
  programasInput.style.display = 'none';
  tarifasInput.style.display = 'none';
  departamentosInput.style.display = 'none';
  salonesInput.style.display = 'block';
  periodosInput.style.display="none";
  asignaturasInput.style.display="none";

  estudiantesInput.style.display = 'none';
  docentesInput.style.display = 'none';
  matriculaInput.style.display = 'none';
}
const irEstudinates = () => {
  navInput.innerHTML = `
    <nav class="nav nav-pills nav-fill">
        <a id="pProgramas" class="nav-link" aria-current="page" onclick=paginaPrincipal()><h1>programas</h1></a>
        <a id="pPeriodos" class="nav-link" aria-current="page" onclick=irperiodos()><h1>periodos</h1></a>
        <a id="PTarifas" class="nav-link"  onclick=irTarifa()><h1>tarifas</h1></a>
        <a id="PDepartamentos" class="nav-link" onclick=irDepartamentos()><h1>departamentos</h1></a>
        <a id="pSalones" class="nav-link" onclick=irSalones()><h1>salones</h1></a>
        <a id="pEstudiante" class="nav-link active" onclick=irEstudinates()><h1>estudiante</h1></a>
        <a id="pDocente" class="nav-link" onclick=irDocente()><h1>docente</h1></a>
        <a id="pAsignaturas" class="nav-link" onclick=irAsignaturas()><h1>asignatura</h1></h1></a>

        <a id="pMatricula" class="nav-link" onclick=irMatricula()><h1>matrícula </h1></a>
        </nav>
  `;
  programasInput.style.display = 'none';
  tarifasInput.style.display = 'none';
  departamentosInput.style.display = 'none';
  salonesInput.style.display = 'none';
  estudiantesInput.style.display = 'block';
  periodosInput.style.display="none";
  asignaturasInput.style.display="none";

  docentesInput.style.display = 'none';
  matriculaInput.style.display = 'none';
  cargarProEst();
}
const irDocente = () => {
  navInput.innerHTML = `
    <nav class="nav nav-pills nav-fill">
        <a id="pProgramas" class="nav-link" aria-current="page" onclick=paginaPrincipal()><h1>programas</h1></a>
        <a id="pPeriodos" class="nav-link" aria-current="page" onclick=irperiodos()><h1>periodos</h1></a>
        <a id="PTarifas" class="nav-link"  onclick=irTarifa()><h1>tarifas</h1></a>
        <a id="PDepartamentos" class="nav-link" onclick=irDepartamentos()><h1>departamentos</h1></a>
        <a id="pSalones" class="nav-link" onclick=irSalones()><h1>salones</h1></a>
        <a id="pEstudiante" class="nav-link" onclick=irEstudinates()><h1>estudiante</h1></a>
        <a id="pDocente" class="nav-link active" onclick=irDocente()><h1>docente</h1></a>
        <a id="pAsignaturas" class="nav-link" onclick=irAsignaturas()><h1>asignatura</h1></h1></a>

        <a id="pMatricula" class="nav-link" onclick=irMatricula()><h1>matrícula </h1></a>
              </nav>
  `;
  programasInput.style.display = 'none';
  tarifasInput.style.display = 'none';
  departamentosInput.style.display = 'none';
  salonesInput.style.display = 'none';
  estudiantesInput.style.display = 'none';
  periodosInput.style.display="none";
  asignaturasInput.style.display="none";

  docentesInput.style.display = 'block';
  matriculaInput.style.display = 'none';
  cargarDepProf();
}
const irMatricula = () => {
  navInput.innerHTML = `
    <nav class="nav nav-pills nav-fill">
        <a id="pProgramas" class="nav-link" aria-current="page" onclick=paginaPrincipal()><h1>programas</h1></a>
        <a id="pPeriodos" class="nav-link" aria-current="page" onclick=irperiodos()><h1>periodos</h1></a>
        <a id="PTarifas" class="nav-link"  onclick=irTarifa()><h1>tarifas</h1></a>
        <a id="PDepartamentos" class="nav-link" onclick=irDepartamentos()><h1>departamentos</h1></a>
        <a id="pSalones" class="nav-link" onclick=irSalones()><h1>salones</h1></a>
        <a id="pEstudiante" class="nav-link" onclick=irEstudinates()><h1>estudiante</h1></a>
        <a id="pDocente" class="nav-link" onclick=irDocente()><h1>docente</h1></a>
        <a id="pAsignaturas" class="nav-link" onclick=irAsignaturas()><h1>asignatura</h1></h1></a>

        <a id="pMatricula" class="nav-link active" onclick=irMatricula()><h1>matrícula </h1></a>
      </nav>
  `;
  programasInput.style.display = 'none';
  tarifasInput.style.display = 'none';
  departamentosInput.style.display = 'none';
  salonesInput.style.display = 'none';
  estudiantesInput.style.display = 'none';
  docentesInput.style.display = 'none';
  periodosInput.style.display="none"
  asignaturasInput.style.display="none";

  matriculaInput.style.display = 'block';
}
const irperiodos = () => {
  navInput.innerHTML = `
    <nav class="nav nav-pills nav-fill">
        <a id="pProgramas" class="nav-link" aria-current="page" onclick=paginaPrincipal()><h1>programas</h1></a>
        <a id="pPeriodos" class="nav-link active" aria-current="page" onclick=irperiodos()><h1>periodos</h1></a>
        <a id="PTarifas" class="nav-link"  onclick=irTarifa()><h1>tarifas</h1></a>
        <a id="PDepartamentos" class="nav-link" onclick=irDepartamentos()><h1>departamentos</h1></a>
        <a id="pSalones" class="nav-link" onclick=irSalones()><h1>salones</h1></a>
        <a id="pEstudiante" class="nav-link" onclick=irEstudinates()><h1>estudiante</h1></a>
        <a id="pDocente" class="nav-link" onclick=irDocente()><h1>docente</h1></a>
        <a id="pAsignaturas" class="nav-link" onclick=irAsignaturas()><h1>asignatura</h1></h1></a>

        <a id="pMatricula" class="nav-link" onclick=irMatricula()><h1>matrícula </h1></a>
      </nav>
  `;
  programasInput.style.display = 'none';
  tarifasInput.style.display = 'none';
  departamentosInput.style.display = 'none';
  salonesInput.style.display = 'none';
  estudiantesInput.style.display = 'none';
  docentesInput.style.display = 'none';
  periodosInput.style.display="block"
  asignaturasInput.style.display="none";

  matriculaInput.style.display = 'none';
}
const irAsignaturas = () => {
  navInput.innerHTML = `
    <nav class="nav nav-pills nav-fill">
        <a id="pProgramas" class="nav-link" aria-current="page" onclick=paginaPrincipal()><h1>programas</h1></a>
        <a id="pPeriodos" class="nav-link" aria-current="page" onclick=irperiodos()><h1>periodos</h1></a>
        <a id="PTarifas" class="nav-link"  onclick=irTarifa()><h1>tarifas</h1></a>
        <a id="PDepartamentos" class="nav-link" onclick=irDepartamentos()><h1>departamentos</h1></a>
        <a id="pSalones" class="nav-link" onclick=irSalones()><h1>salones</h1></a>
        <a id="pEstudiante" class="nav-link" onclick=irEstudinates()><h1>estudiante</h1></a>
        <a id="pDocente" class="nav-link" onclick=irDocente()><h1>docente</h1></a>
        <a id="pAsignaturas" class="nav-link active" onclick=irAsignaturas()><h1>asignatura</h1></h1></a>

        <a id="pMatricula" class="nav-link" onclick=irMatricula()><h1>matrícula </h1></a>
      </nav>
  `;
  programasInput.style.display = 'none';
  tarifasInput.style.display = 'none';
  departamentosInput.style.display = 'none';
  salonesInput.style.display = 'none';
  estudiantesInput.style.display = 'none';
  docentesInput.style.display = 'none';
  periodosInput.style.display="none"
  asignaturasInput.style.display="block";

  matriculaInput.style.display = 'none';
  

}