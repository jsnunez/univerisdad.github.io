



const paginaPrincipal = () => {
  let logInput=document.getElementById("login-email");
  sessionStorage.setItem("pagina", 1);

console.log(logInput)
 

navInput.style.display="block"

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
  sessionStorage.setItem("pagina", 2);
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
  sessionStorage.setItem("pagina", 3);
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
  sessionStorage.setItem("pagina", 4);
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
  sessionStorage.setItem("pagina", 5);
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
  sessionStorage.setItem("pagina", 6);
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
  sessionStorage.setItem("pagina", 7);
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
  sessionStorage.setItem("pagina", 8);
 listaAsignaturaMatricula=[];
 totalCosto=0;
 contadorAsignaturaMatricula=0;
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
  ingresarMatricula();

}
const irperiodos = () => {
  sessionStorage.setItem("pagina", 9);
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
  sessionStorage.setItem("pagina", 10);
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
  console.log("hola")

}

const irEstudiantes1 = () => {
  sessionStorage.setItem("pagina", 11);
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
const irDocentes1 = async() => {
  sessionStorage.setItem("pagina", 12);
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

  await cargarDocentesR();
}
