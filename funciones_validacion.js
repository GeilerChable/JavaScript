//document.addEventListener("DOMContentLoaded", function() {

console.log("El DOM ha sido cargado");

const validarUser = () => {
  console.log("La función validarUser se ha llamado");
  const name = document.querySelector("#nameInput1").value;
  const email = document.querySelector("#emailInput1").value;
  const password = document.querySelector("#passwordInput1").value;

  const data = {
    user: "geiler chable",
    email: "geilerademar27@gmail.com",
    password: "12345",
  };

  // var correct = new bootstrap.Toast(document.getElementById('Información Correcta'));
  // var incorrect = new bootstrap.Toast(document.getElementById('Información Incorrecta'));

  console.log(data.user)

  console.log(name.toLowerCase() == data.user)
  console.log(email.toLowerCase() == data.email)
  console.log(password == data.password)

  if (
    name.toLowerCase() == data.user &&
    email.toLowerCase() == data.email &&
    password == data.password
  ) {
    console.log("Usuario correcto");
    //    correct.show();

    // const preguntaUser = "si";
    const preguntaUser = prompt("¿Deseas continuar e ingresar al portal?");
    if (preguntaUser.toLowerCase() === "si") {
        console.log("Redireccionando a google");
        redireccionar();
    //    window.location.replace("https://www.google.com");
    //    window.location.href = ("https://www.google.com");
    } else if (preguntaUser.toLowerCase() === "no") {
        console.log("Redireccionando a Youtube")
        document.location.href = "https://www.youtube.com";
    }
  } else {
    console.log("Usuario incorrecto");
    //    incorrect.show();
  }
};

const redireccionar = () => {
    console.log("ejecutando funcion");
    window.open('https://www.google.com', '_blank');
    //window.location.href = "https://www.google.com";
}


validarUser();
