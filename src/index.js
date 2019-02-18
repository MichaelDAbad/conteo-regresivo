import "./styles.css";

console.log("Buenas noches");
var intervaloRegresivo = 0;
function controlarTiempo() {
  var timeLimit = 7; //tiempo en minutos
  var conteo = new Date(timeLimit * 60000);
  intervaloRegresivo = setInterval(function() {
    if (conteo.getTime() > 0) {
      conteo.setTime(conteo.getTime() - 1000);
    } else {
      alert("Tiempo agotado");
      clearInterval(intervaloRegresivo);
    }
    var tiempo =
      ("0" + conteo.getMinutes()).slice(-2) +
      ":" +
      ("0" + conteo.getSeconds()).slice(-2);
    document.getElementById("countdown").innerHTML = tiempo;
  }, 1000);
}

controlarTiempo();
