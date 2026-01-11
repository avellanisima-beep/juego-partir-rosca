// ===============================
// VARIABLES GLOBALES
// ===============================
let totalRebanadas = 12;
let ninos = 1;
let posiciones = [];
let jugadores = [];
let turno = 0;
let padrinos = [];

// ===============================
// ARRANQUE SEGURO
// ===============================
document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("btnIniciar");

    if (!btn) {
        alert("❌ Botón INICIAR no encontrado");
        return;
    }

    btn.addEventListener("click", iniciarJuego);
    console.log("✅ Botón INICIAR conectado");
});

// ===============================
// FUNCIÓN PRINCIPAL
// ===============================
function iniciarJuego() {

    alert("🎉 ¡EL JUEGO INICIÓ!");

    const rebanadasInput = document.getElementById("rebanadas");
    const ninosInput = document.getElementById("ninos");
    const jugadoresInput = document.getElementById("jugadores");

    totalRebanadas = parseInt(rebanadasInput.value) || 12;
    ninos = parseInt(ninosInput.value) || 1;

    jugadores = jugadoresInput
        ? jugadoresInput.value.split("\n").filter(j => j.trim() !== "")
        : [];

    turno = 0;
    padrinos = [];

    generarNinos();
    crearRosca();

    const mensaje = document.getElementById("mensaje");
    if (mensaje) {
        mensaje.innerHTML = "🫓 Juego iniciado<br>Selecciona una rebanada";
    }
}

// ===============================
// GENERAR NIÑOS DIOS
// ===============================
function generarNinos() {
    posiciones = [];
    while (posiciones.length < ninos) {
        let r = Math.floor(Math.random() * totalRebanadas);
        if (!posiciones.includes(r)) {
            posiciones.push(r);
        }
    }
}

// ===============================
// CREAR ROSCA
// ===============================
function crearRosca() {
    const rosca = document.getElementById("rosca");
    if (!rosca) return;

    rosca.innerHTML = "";

    for (let i = 0; i < totalRebanadas; i++) {
        const slice = document.createElement("div");
        slice.className = "slice";
        slice.textContent = i + 1;

        slice.addEventListener("click", function () {
            cortarRebanada(i, slice);
        });

        rosca.appendChild(slice);
    }
}

// ===============================
// CORTAR REBANADA
// ===============================
function cortarRebanada(indice, slice) {

    slice.style.pointerEvents = "none";
    slice.style.opacity = "0.5";

    const nombre = jugadores[turno] || "Jugador";
    turno++;

    const mensaje = document.getElementById("mensaje");

    if (posiciones.includes(indice)) {
        padrinos.push(nombre);
        if (mensaje) {
            mensaje.innerHTML = `👶 ${nombre}<br>¡Te salió el Niño Dios!<br>🫔 Tamaliza el 2 de febrero`;
        }
    } else {
        if (mensaje) {
            mensaje.innerHTML = `😄 ${nombre}<br>Te salvaste`;
        }
    }
}
if (slice.tieneNino) {
  function mostrarNino(nombreJugador) {
    const modal = document.getElementById("modalNino");
    const mensaje = document.getElementById("mensajeNino");

    mensaje.textContent = `🎉 ${nombreJugador} será madrina / padrino del Niño Dios 🎉`;
    modal.classList.remove("hidden");
}

function cerrarNino() {
    document.getElementById("modalNino").classList.add("hidden");
}

}
mostrarNino(jugadorActual);
if (slice.tieneNino) {
    mostrarNino(jugadorActual);
}

