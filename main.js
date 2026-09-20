window.onload = () => {
  const c = setTimeout(() => {
    document.querySelector("main").classList.remove("not-loaded");
    clearTimeout(c);
  }, 2000);
};

function toggleEnvelope() {
  var envelope = document.getElementById("envelope");
  var btn = document.getElementById("envelopeBtn");
  var isOpen = envelope.classList.toggle("is-open");
  btn.textContent = isOpen ? "Cerrar" : "Abrir";
}
