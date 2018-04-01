function Copyright(){
    var Fecha = new Date();
    var ParrafoDeFecha = document.getElementById('Copyright');

    ParrafoDeFecha.innerHTML = "©" + Fecha.getFullYear() + " Carlos Mendoza Web";
}
window.addEventListener('DOMContentLoaded', Copyright, true);