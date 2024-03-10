let listaCursos = []
const loadCursoas = async () => {
    try {

        const respuesta = await fetch('http://localhost:3000/cursos');

        if (!respuesta.ok) {
            throw new Error('Error al cargar estudiante. Estado: ', respuesta.status);
        }
        const alumnos = await respuesta.json();
        listaCursos.push(...alumnos);

    } catch (error) {
        console.error("Error al cargar estudiante", error.message);
    }
    console.log(listaCursos)

}