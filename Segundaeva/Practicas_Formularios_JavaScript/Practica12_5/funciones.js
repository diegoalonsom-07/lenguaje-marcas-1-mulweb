function borde_rojo(id_objeto) {
    document.getElementById(id_objeto).style.border = "2px solid red";
}
function desagradecer(id_objeto) {
    document.getElementById(id_objeto).innerHTML = "Pasa el raton";
}
function cambiarColor(id_objeto) {
    document.getElementById(id_objeto).style.backgroundColor = "red";
}
function normal(id_objeto) {
    document.getElementById(id_objeto).style.backgroundColor = "blue";
}
function cambiaPosicion(id_objeto) {
    document.getElementById("quintoa").style.visibility = "hidden";
    document.getElementById("quintob").style.visibility = "visible";
}
function vuelvoPosicion(id_objeto) {
    document.getElementById("quintoa").style.visibility ="visible";
    document.getElementById("quintob").style.visibility ="hidden";
}
function encendido(id_objeto){
    document.getElementById(id_objeto).src="./imagenes/BombillaEncendida.png";
}
function apagado(id_objeto){
    document.getElementById(id_objeto).src="./imagenes/BombillaApagada.png";
}