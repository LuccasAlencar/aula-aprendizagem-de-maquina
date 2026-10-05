// Melhorias opcionais: o site funciona sem este arquivo.

// Botão "Copiar" nos blocos de código
document.querySelectorAll("pre").forEach(function (pre) {
  var btn = document.createElement("button");
  btn.className = "copy-btn";
  btn.type = "button";
  btn.textContent = "Copiar";
  btn.addEventListener("click", function () {
    var texto = pre.querySelector("code").innerText;
    navigator.clipboard.writeText(texto).then(function () {
      btn.textContent = "Copiado";
      setTimeout(function () { btn.textContent = "Copiar"; }, 1500);
    });
  });
  pre.appendChild(btn);
});

// Destaca o item da barra lateral conforme você rola a página
var links = document.querySelectorAll(".sidebar a");
var mapa = {};
links.forEach(function (a) { mapa[a.getAttribute("href").slice(1)] = a; });

if ("IntersectionObserver" in window) {
  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (e.isIntersecting && mapa[e.target.id]) {
        links.forEach(function (a) { a.classList.remove("active"); });
        mapa[e.target.id].classList.add("active");
      }
    });
  }, { rootMargin: "-10% 0px -80% 0px" });
  Object.keys(mapa).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) obs.observe(el);
  });
}
