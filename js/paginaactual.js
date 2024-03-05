



const paginaPrincipal = () => {
  let logInput=document.getElementById("login-email");

console.log(logInput)
 

  navInput.innerHTML = `
  <nav>
  <ul class="primary" >
    <li>
      <a><h1>Reportes</h1></a>
      <ul class="sub">
        <li><a id="pProgramas" class="listados" onclick=irProgramas()><h2>programas</h2></a></li>
        <li> <a id="pPeriodos" class="listados" onclick=irperiodos()><h2>periodos</h2></a></li>
        <li> <a id="PTarifas" class="listados" onclick=irTarifa()><h2>tarifas</h2></a></li>
        <li> <a id="PDepartamentos" class="listados" onclick=irDepartamentos()><h2>departamentos</h2></a></li>
        <li> <a id="pSalones"  class="listados" onclick=irSalones()><h2>salones</h2></a></li>
        <li> <a id="pEstudiantes"  class="listados" onclick=irEstudiantes()><h2>Estudiantes</h2></a></li>
        <li> <a id="pDocentes"  class="listados" onclick=irDocentes()><h2>Docentes</h2></a></li>

      </ul>
    </li>
    <li>
      <a><h1>crear usuarios</h1></a>
      <ul class="sub">
      <li> <a id="pEstudiante" class="nav-link" onclick=irEstudinates()><h2>estudiante</h2></h2></a></li>
      <li><a id="pDocente" class="nav-link" onclick=irDocente()><h2>docente</h2></h2></a>        </li>

      </ul>
    </li>
    <li>
      <a ><h1>crear actividades</h1></a>
      <ul class="sub">
      <li> <a id="pAsignaturas" class="nav-link" onclick=irAsignaturas()><h2>asignatura</h2></h2></a></li>
      <li> <a id="pMatricula" class="nav-link" onclick=irMatricula()><h2>matrícula </h2></h2></a></li>
      </ul>  
    </li>
   
  </ul>
</nav>

 
  `;
  paginaInicio.style.display="none"
  portadaInput.style.display="block";

  periodosInput.style.display="none"
  programasInput.style.display = 'none';
  tarifasInput.style.display = 'none';
  departamentosInput.style.display = 'none';
  salonesInput.style.display = 'none';
  estudiantesInput.style.display = 'none';
  docentesInput.style.display = 'none';
  matriculaInput.style.display = 'none';
  asignaturasInput.style.display="none";
  estudiantesRInput.style.display = 'none';
  docentesRInput.style.display = 'none';



}

const irProgramas = () => {

  programasInput.style.display = 'block';
  periodosInput.style.display="none"
  tarifasInput.style.display = 'none';
  departamentosInput.style.display = 'none';
  salonesInput.style.display = 'none';
  estudiantesInput.style.display = 'none';
  docentesInput.style.display = 'none';
  matriculaInput.style.display = 'none';
  periodosInput.style.display="none"
  asignaturasInput.style.display="none";
  portadaInput.style.display="none";
  estudiantesRInput.style.display = 'none';
  docentesRInput.style.display = 'none';



}

const irTarifa = () => {
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
  portadaInput.style.display="none";
  estudiantesRInput.style.display = 'none';
  
  docentesRInput.style.display = 'none';



}
const irDepartamentos = () => {
  programasInput.style.display = 'none';
  tarifasInput.style.display = 'none';
  departamentosInput.style.display = 'block';
  salonesInput.style.display = 'none';
  estudiantesInput.style.display = 'none';
  docentesInput.style.display = 'none';
  estudiantesRInput.style.display = 'none';
  docentesRInput.style.display = 'none';

  periodosInput.style.display="none";
  asignaturasInput.style.display="none";
  portadaInput.style.display="none";

  matriculaInput.style.display = 'none';
}
const irSalones = () => {
  programasInput.style.display = 'none';
  tarifasInput.style.display = 'none';
  departamentosInput.style.display = 'none';
  salonesInput.style.display = 'block';
  periodosInput.style.display="none";
  asignaturasInput.style.display="none";
  portadaInput.style.display="none";

  estudiantesInput.style.display = 'none';
  docentesInput.style.display = 'none';
  estudiantesRInput.style.display = 'none';
  docentesRInput.style.display = 'none';

  matriculaInput.style.display = 'none';
}
const irEstudinates = () => {
  programasInput.style.display = 'none';
  tarifasInput.style.display = 'none';
  departamentosInput.style.display = 'none';
  salonesInput.style.display = 'none';
  estudiantesInput.style.display = 'block';
  periodosInput.style.display="none";
  asignaturasInput.style.display="none";
  portadaInput.style.display="none";

  docentesInput.style.display = 'none';
  matriculaInput.style.display = 'none';
  estudiantesRInput.style.display = 'none';
  docentesRInput.style.display = 'none';

  cargarProEst();
}
const irDocente = () => {
  programasInput.style.display = 'none';
  tarifasInput.style.display = 'none';
  departamentosInput.style.display = 'none';
  salonesInput.style.display = 'none';
  estudiantesInput.style.display = 'none';
  periodosInput.style.display="none";
  asignaturasInput.style.display="none";
  portadaInput.style.display="none";

  docentesInput.style.display = 'block';
  matriculaInput.style.display = 'none';
  estudiantesRInput.style.display = 'none';
  docentesRInput.style.display = 'none';

  cargarDepProf();
}
const irMatricula = () => {
  programasInput.style.display = 'none';
  tarifasInput.style.display = 'none';
  departamentosInput.style.display = 'none';
  salonesInput.style.display = 'none';
  estudiantesInput.style.display = 'none';
  docentesInput.style.display = 'none';
  periodosInput.style.display="none"
  asignaturasInput.style.display="none";
  portadaInput.style.display="none";

  matriculaInput.style.display = 'block';
  estudiantesRInput.style.display = 'none';
  docentesRInput.style.display = 'none';

  cargarEstMat();
}
const irperiodos = () => {
  programasInput.style.display = 'none';
  tarifasInput.style.display = 'none';
  departamentosInput.style.display = 'none';
  salonesInput.style.display = 'none';
  estudiantesInput.style.display = 'none';
  docentesInput.style.display = 'none';
  periodosInput.style.display="block"
  asignaturasInput.style.display="none";
  portadaInput.style.display="none";

  matriculaInput.style.display = 'none';
  estudiantesRInput.style.display = 'none';
  docentesRInput.style.display = 'none';

}
const irAsignaturas = () => {
  programasInput.style.display = 'none';
  tarifasInput.style.display = 'none';
  departamentosInput.style.display = 'none';
  salonesInput.style.display = 'none';
  estudiantesInput.style.display = 'none';
  docentesInput.style.display = 'none';
  periodosInput.style.display="none"
  asignaturasInput.style.display="block";
  portadaInput.style.display="none";

  matriculaInput.style.display = 'none'; 
  estudiantesRInput.style.display = 'none';
  docentesRInput.style.display = 'none';

  cargarProAsig();
  cargarProfeAsig();
  cargarCursosAsig();

}

const irEstudiantes = () => {
  programasInput.style.display = 'none';
  tarifasInput.style.display = 'none';
  departamentosInput.style.display = 'none';
  salonesInput.style.display = 'none';
  estudiantesInput.style.display = 'none';
  docentesInput.style.display = 'none';
  periodosInput.style.display="none"
  asignaturasInput.style.display="none";
  portadaInput.style.display="none";
  matriculaInput.style.display = 'none';
  estudiantesRInput.style.display = 'block';
  docentesRInput.style.display = 'none';
  cargarEstudiantesR();
}
const irDocentes = () => {
  programasInput.style.display = 'none';
  tarifasInput.style.display = 'none';
  departamentosInput.style.display = 'none';
  salonesInput.style.display = 'none';
  estudiantesInput.style.display = 'none';
  docentesInput.style.display = 'none';
  periodosInput.style.display="none"
  asignaturasInput.style.display="none";
  portadaInput.style.display="none";
  matriculaInput.style.display = 'none';
  estudiantesRInput.style.display = 'none';
  docentesRInput.style.display = 'block';

  cargarDocentesR();
}