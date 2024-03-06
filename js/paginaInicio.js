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
const estudiantesRegInput = document.getElementById('regEstudiantes');
const paginaInicio = document.getElementById('incio');
const portadaInput = document.getElementById('portada');
const estudiantesRInput = document.getElementById('estudiantesR');
const docentesRInput = document.getElementById('docentesR');
let personName = sessionStorage.getItem("pagina");



const paginaInciciosesion=()=>{
   console.log(personName)
if(parseInt(personName)<1){
   sessionStorage.setItem("pagina", 0);
}
    paginaInicio.style.display="block"
    navInput.style.display="none"

    periodosInput.style.display="none"
    programasInput.style.display = 'none';
    tarifasInput.style.display = 'none';
    departamentosInput.style.display = 'none';
    salonesInput.style.display = 'none';
    estudiantesInput.style.display = 'none';
    docentesInput.style.display = 'none';
    matriculaInput.style.display = 'none';
    asignaturasInput.style.display="none";
    portadaInput.style.display="none";
    paginaInicio.innerHTML=
           `                                   
        <div class="login">
         <img src="img/fondo.png" alt="login image" class="login__img">

         <form action="" class="login__form">
            <h1 class="login__title">Login</h1>

            <div class="login__content">
               <div class="login__box">
                  <p><i class="fa fa-user"></i></p>

                  <div class="login__box-input">
                     <input type="email" required class="login__input" id="login-email" >
                     <label for="login-email" class="login__label">Email</label>
                  </div>
               </div>

               <div class="login__box">
                 <p> <i class="fa fa-key"></i></p>
                        <div class="login__box-input">
                     <input type="password" required class="login__input" id="login-pass" >
                     <label for="login-pass" class="login__label">Password</label>
                     <i class="ri-eye-off-line login__eye" id="login-eye"></i>
                  </div>
               </div>
            </div>

            <div class="login__check">
               <div class="login__check-group">
                  <input type="checkbox" class="login__check-input" id="login-check">
                  <label for="login-check" class="login__check-label">Remember me</label>
               </div>

               <a href="#" class="login__forgot">Forgot Password?</a>
            </div>

            <button type="submit" class="login__button" onclick="ingresar()">Login</button>

          
         </form>
      </div>
      
      `    

}
const ingresar=()=>{
   const inputEmail = document.getElementById("login-email"); 
   const inputPass = document.getElementById("login-pass"); 

   const emailData=inputEmail.value;
   
   const passData=inputPass.value;

   if("admin"==emailData && "12345"==passData){
      paginaPrincipal();
   }
   

}
