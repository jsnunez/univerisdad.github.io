document.addEventListener('DOMContentLoaded', () => {
  if (personName == null) {
  paginaInciciosesion();
  }
  loadProgramas();
  loadTarifas();
  loadDepartamentos();
  loadSalones();
  loadEstudiantes();
  loadProfesores();
  loadPeriodos();
  loadCursoas();
  loadAsignaturas();
  //  irAsignaturas();
  paginaPrincipal();
  if (parseInt(personName) == 2) {
    irProgramas();
  }
  if (parseInt(personName) == 3) {
    irTarifa();
  }
  if (parseInt(personName) == 4) {
    irDepartamentos();
  }
  if (parseInt(personName) == 5) {
    irSalones();
  }
  if (parseInt(personName) == 6) {
    irEstudinates();
  }
  if (parseInt(personName) == 7) {
    irDocente();
  }
  if (parseInt(personName) == 8) {
    irperiodos();
    irMatricula();
  

    cargarEstMat();
  }


  if (parseInt(personName) == 9) {
    irperiodos();
  }
  if (parseInt(personName) == 10) {
    irAsignaturas();
  }
  if (parseInt(personName) == 11) {
    irEstudiantes1();
  }
  if (parseInt(personName) == 12) {
    irDocente1();
  }




})






