function borde_rojo(id_objeto) {
    document.getElementById(id_objeto).style.border = "2px solid red";
    document.getElementById(id_objeto).style.outline = "none"; 
}

function borde_normal(id_objeto) {
    document.getElementById(id_objeto).style.border = "";
}
function oscurecer(id_objeto) {
    document.getElementById(id_objeto).style.backgroundColor = "#d1d1d1";
}
function aclarar(id_objeto) {
    document.getElementById(id_objeto).style.backgroundColor = "";
}
function avisarEnvio() {
    alert("Se van a enviar todos los datos del formulario");
}
function confirmarBorrado() {
    var respuesta = confirm("Se van a borrar todos los datos del formulario. ¿Estás seguro?");
    return respuesta; 
}
function mostrarFecha() {
    alert(new Date().toLocaleDateString());
}