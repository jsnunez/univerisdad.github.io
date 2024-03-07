document.addEventListener('DOMContentLoaded', async() => {
  if (paginaActual == null) {
  paginaInciciosesion();
  }
  await loadProgramas();
  await loadTarifas();
  await loadDepartamentos();
  await loadSalones();
  await loadEstudiantes();
  await loadProfesores();
  await loadPeriodos();
  await loadCursoas();
  await loadAsignaturas();
  //  irAsignaturas();
  if (parseInt(paginaActual) == 1) {

  paginaPrincipal();
}
  if (parseInt(paginaActual) == 2) {
    irProgramas();
  }
  if (parseInt(paginaActual) == 3) {
    irTarifa();
  }
  if (parseInt(paginaActual) == 4) {
    irDepartamentos();
  }
  if (parseInt(paginaActual) == 5) {
    irSalones();
  }
  if (parseInt(paginaActual) == 6) {
    irEstudinates();
  }
  if (parseInt(paginaActual) == 7) {
    irDocente();
  }
  if (parseInt(paginaActual) == 8) {
    irperiodos();
    irMatricula();
  

    cargarEstMat();
  }


  if (parseInt(paginaActual) == 9) {
    irperiodos();
  }
  if (parseInt(paginaActual) == 10) {
    irAsignaturas();
  }
  if (parseInt(paginaActual) == 11) {
    irEstudiantes1();
  }
  if (parseInt(paginaActual) == 12) {
    irDocente1();z
  }




})






