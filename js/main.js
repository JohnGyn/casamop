(function () {
  var cfg = window.CASAMOP || {};
  var brl = function (v) { return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); };
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  // Menu mobile
  var burger = $("#burger"), nav = $("#nav");
  burger.addEventListener("click", function () {
    var open = document.body.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", open);
  });
  $$("#nav a").forEach(function (a) {
    a.addEventListener("click", function () {
      document.body.classList.remove("menu-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  // Header com sombra ao rolar
  var header = $(".header");
  var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Links de WhatsApp
  if (cfg.whatsapp) {
    var wa = "https://api.whatsapp.com/send/?phone=" + cfg.whatsapp + "&text=" + encodeURIComponent(cfg.whatsappMsg || "");
    $$(".js-whats").forEach(function (a) { a.href = wa; a.target = "_blank"; a.rel = "noopener"; });
  }

  // Seletor de kits
  var kitsEl = $("#kits");
  var kits = cfg.kits || [];
  var n = cfg.installments || 10;

  var stage = $("#offerStage");
  function renderStage(k) {
    stage.innerHTML = k.img
      ? '<img src="' + k.img + '" alt="' + k.size + '" class="offer__img">'
      : '<div class="ph ph--offer" data-label="' + k.photo + '"></div>';
  }

  function select(id) {
    var k = kits.filter(function (x) { return x.id === id; })[0] || kits[0];
    $$(".kit", kitsEl).forEach(function (b) {
      var on = b.dataset.id === k.id;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-checked", on);
    });
    var off = Math.round((1 - k.price / k.from) * 100);
    $("#offerOff").innerHTML = off + "%<small>OFF</small>";
    renderStage(k);
    $("#priceFrom").textContent = "De " + brl(k.from);
    $("#priceInst").textContent = brl(k.price / n);
    $("#priceCash").textContent = brl(k.price);
    $("#priceSave").textContent = "Economize " + brl(k.from - k.price);
    var buy = $("#buyBtn");
    buy.href = k.url || "#";
    if (k.url) { buy.target = "_blank"; buy.rel = "noopener"; }
  }

  kits.forEach(function (k) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "kit";
    b.dataset.id = k.id;
    b.setAttribute("role", "radio");
    b.innerHTML =
      (k.tag ? '<span class="kit__tag">' + k.tag + "</span>" : "") +
      '<span class="kit__radio"></span>' +
      '<span class="kit__info"><b>' + k.title + "</b><small>" + k.size + "</small></span>" +
      '<span class="kit__price"><s>' + brl(k.from) + "</s><b>" + brl(k.price) + "</b></span>";
    b.addEventListener("click", function () { select(k.id); });
    kitsEl.appendChild(b);
  });
  if (kits.length) select(cfg.defaultKit || kits[0].id);

  // Antes e depois
  $$(".ba").forEach(function (ba) {
    var range = $(".ba__range", ba);
    range.addEventListener("input", function () { ba.style.setProperty("--pos", range.value + "%"); });
  });

  // Acordeão: só um aberto por vez nos benefícios
  $$("#acc details").forEach(function (d, _, all) {
    d.addEventListener("toggle", function () {
      if (d.open) all.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });

  // Animação de entrada
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    $$(".section__head, .pcard, .step, .wcard, .rcard, .seal, .offer__grid, .results__grid, .benefits__grid").forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  $("#year").textContent = new Date().getFullYear();
})();
