// Variables de nodo

const loginBoton = document.querySelector("#login");
const registroBoton = document.querySelector("#registro");
const loginForm = document.querySelector(".login-form");
const registroForm = document.querySelector(".registro-form");

// Funciones que se ejecutan al momento de iniciar
const inicializarLogin = () => {
    pantallaLoginIniciarSesion();
}

//funcion que muestra formulario de Iniciar Sesion
const pantallaLoginIniciarSesion = () => {
    loginBoton.style.backgroundColor = "#212640";
    registroBoton.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    loginForm.style.left = "50%";
    registroForm.style.left = "-50%";

    loginForm.style.opacity = 1;
    registroForm.style.opacity =0;


    console.log("epa1");
}

//funcion que muestra formulario de Registro

const pantallaLoginRegistro = () => {
    loginBoton.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registroBoton.style.backgroundColor = "#212640";

    loginForm.style.left = "150%";
    registroForm.style.left = "50%";
    registroForm.style.top = "10%";

    loginForm.style.opacity =0;
    registroForm.style.opacity =1;

    console.log("epa2");
}
// Configuracion de Uso de Eventos

registroBoton.addEventListener('click', () => {
    pantallaLoginRegistro();
})

loginBoton.addEventListener('click', () => {
    pantallaLoginIniciarSesion();
})


//Buena Suerte Goku
//Este Trabajo es Easy, que alguien le diga a mi panita Viltol UwU 