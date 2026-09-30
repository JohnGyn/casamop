// Configurações editáveis do site (preços, links de checkout, WhatsApp).
window.CASAMOP = {
  // Número com DDI + DDD, só dígitos. Ex.: "5511999999999"
  whatsapp: "5519995201804",
  whatsappMsg: "Olá, gostaria de saber mais sobre o CASAMOP!",

  // Kit selecionado por padrão (id)
  defaultKit: "3galoes",

  // "url" = link do checkout de cada kit (deixe "" enquanto não houver)
  kits: [
    { id: "50ml", img: "assets/img/casamop-50ml.webp", title: "Para testar",   size: "Frasco 50ml",       from: 29.90, price: 19.90, url: "https://ev.braip.com/checkout/pla2j2xe/che6z11r?currency=BRL", photo: "Foto: frasco 50ml" },
    { id: "1l", img: "assets/img/casamop-1l.webp", title: "1 Frasco",       size: "Frasco 1L",         from: 69.90, price: 49.00, url: "https://ev.braip.com/checkout/plamj6om/che6z11r?currency=BRL", photo: "Foto: frasco 1L" },
    { id: "5l", img: "assets/img/casamop-5l.webp", title: "1 Galão",        size: "Galão 5L",          from: 127.00, price: 97.00, url: "https://ev.braip.com/checkout/plarjwjg/che6z11r?currency=BRL", photo: "Foto: galão 5L" },
    { id: "2galoes", img: "assets/img/casamop-5l-kit2.webp", title: "Leve 2",         size: "2 Galões 5L · 30% off", from: 254.00, price: 177.00, url: "https://ev.braip.com/checkout/pla2n9nn/che6z11r?currency=BRL", photo: "Foto do kit: 2 galões 5L" },
    { id: "3galoes", img: "assets/img/casamop-5l-kit3.webp", title: "Leve 3, pague 2", size: "3 Galões 5L",      from: 381.00, price: 247.00, url: "https://ev.braip.com/checkout/plaxwxwv/che6z11r?currency=BRL", photo: "Foto do kit: 3 galões 5L", tag: "Mais vendido" },
    { id: "6galoes", img: "assets/img/casamop-5l-kit6.webp", title: "Leve 6, pague 4", size: "6 Galões 5L",      from: 762.00, price: 457.00, url: "https://ev.braip.com/checkout/pla4k49k/che6z11r?currency=BRL", photo: "Foto do kit: 6 galões 5L", tag: "Melhor preço" }
  ],
  installments: 10
};
