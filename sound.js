let sonidoActivo = true;

function beep(freq, duration) {
    if (!sonidoActivo) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    osc.type = "square";
    osc.frequency.value = freq;
    osc.connect(ctx.destination);
    osc.start();
    setTimeout(() => osc.stop(), duration);
}

function playClick() {
    beep(800, 80);
}

function playNino() {
    beep(1200, 200);
    setTimeout(() => beep(1600, 150), 220);
}

function toggleSonido() {
    sonidoActivo = !sonidoActivo;
    document.getElementById("soundBtn").innerText =
        sonidoActivo ? "🔊 Sonido ON" : "🔇 Sonido OFF";
}