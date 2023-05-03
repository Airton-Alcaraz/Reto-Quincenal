/* Ingresar nombre de usuario y que al hacer click 
muestre el usuario ingresado
Agregar edad, email y DNI y que lo muestre
Agregar Imagen y que cambie con el ingreso de datos. 
Agregar una clave y chequearla */
 
 const imagenInicial = document.querySelector ("#imagen")
 const pMensaje1 = document.querySelector ("#Bienvenido");
 const pMensaje2 = document.querySelector ("#Edad");
 const pMensaje3 = document.querySelector ("#Email");
 const pMensaje4 = document.querySelector ("#Dni")
 const inputEntradaUno = document.querySelector("#info-1");
 const inputEntradaDos = document.querySelector ("#info-2");
 const inputEntradaTres = document.querySelector ("#info-3");
 const inputEntradaCuatro = document.querySelector ("#info-4");
 const cuerpoPagina = document.querySelector ("body")

 const imgLogin = "https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small/profile-icon-login-head-icon-vector.jpg"
 const imgAprobado = "https://thumbs.dreamstime.com/b/bienvenido-texto-del-espa%C3%B1ol-de-la-recepci%C3%B3n-112542726.jpg";
 const imgDenegado = "https://st.depositphotos.com/1228953/3068/i/600/depositphotos_30685647-stock-photo-no-sign.jpg";

/*  const colorPagina = "#0d1117"
 const colorTexto = "e6edf3"

const tipoFuente = "monospace" */

const tipoFuente = "monospace"
document.body.style.backgroundColor = "#0d1117";
document.body.style.color = "e6edf3";
document.querySelector
function mifuncion(){


  let infoUsuario = inputEntradaUno.value;
  let infoEdad = inputEntradaDos.value;
  let infoEmail = inputEntradaTres.value;
  let infoDni = inputEntradaCuatro.value;
  

  pMensaje1.style.color = "white";
  pMensaje2.style.color = "white";
  pMensaje3.style.color = "white";
  pMensaje4.style.color = "white";
  pMensaje1.innerHTML = "Su usuario es: " + inputEntradaUno.value;
  pMensaje2.innerHTML = "Su edad es: " + inputEntradaDos.value;
  pMensaje3.innerHTML = "Su Email es: " + inputEntradaTres.value;
  pMensaje4.innerHTML = "Su Dni es: " + inputEntradaCuatro.value;
  
  
}