/* ============================================================
   AKI · CATÁLOGO Y LISTAS  ← EDITA TODO AQUÍ (un solo lugar)
   Este archivo lo usan index.html (tienda) y libreria.html.
   ============================================================ */

/* -------- AJUSTES GENERALES -------- */
const WHATSAPP  = "584129162019";  // tu número (formato internacional, sin +)
const MIN_MAYOR = 6;               // mínimo de unidades para comprar al mayor
const MONEDA    = "$";             // símbolo de moneda

/* ============================================================
   PRODUCTOS DE LA TIENDA
   precioDetal = precio por 1 unidad
   precioMayor = precio por unidad comprando al mayor
   cat: "Belleza" | "Ropa" | "Accesorios" | "Otros"
   ============================================================ */
const PRODUCTOS = [
  {id:15, nombre:"Mascarilla Biodance Bio-Collagen Real Deep Mask", cat:"Belleza", precioDetal:6, precioMayor:4, img:'<img src="img/biodance.jpg" alt="Biodance Bio Collagen" style="width:100%;height:100%;object-fit:cover">'},
  {id:1,  nombre:"Labial mate larga duración", cat:"Belleza",     precioDetal:5,  precioMayor:3.2, img:"💄"},
  {id:2,  nombre:"Set de brochas de maquillaje", cat:"Belleza",   precioDetal:12, precioMayor:8,   img:"🖌️"},
  {id:3,  nombre:"Crema hidratante facial",     cat:"Belleza",     precioDetal:9,  precioMayor:6,   img:"🧴"},
  {id:4,  nombre:"Perfume femenino 50ml",       cat:"Belleza",     precioDetal:18, precioMayor:12,  img:"🌸"},
  {id:5,  nombre:"Franela básica unisex",       cat:"Ropa",        precioDetal:8,  precioMayor:5,   img:"👕"},
  {id:6,  nombre:"Jeans dama corte recto",      cat:"Ropa",        precioDetal:22, precioMayor:15,  img:"👖"},
  {id:7,  nombre:"Vestido casual de verano",    cat:"Ropa",        precioDetal:25, precioMayor:17,  img:"👗"},
  {id:8,  nombre:"Gorra ajustable",             cat:"Accesorios",  precioDetal:7,  precioMayor:4.5, img:"🧢"},
  {id:9,  nombre:"Reloj de pulsera unisex",     cat:"Accesorios",  precioDetal:15, precioMayor:10,  img:"⌚"},
  {id:10, nombre:"Lentes de sol UV",            cat:"Accesorios",  precioDetal:10, precioMayor:6.5, img:"🕶️"},
  {id:11, nombre:"Cartera de dama",             cat:"Accesorios",  precioDetal:20, precioMayor:13,  img:"👜"},
  {id:12, nombre:"Termo / botella deportiva",   cat:"Otros",       precioDetal:11, precioMayor:7,   img:"🥤"},
  {id:13, nombre:"Audífonos inalámbricos",      cat:"Otros",       precioDetal:16, precioMayor:11,  img:"🎧"},
  {id:14, nombre:"Organizador de escritorio",   cat:"Otros",       precioDetal:9,  precioMayor:6,   img:"🗂️"},
];

/* ============================================================
   LIBRERÍA — catálogo de útiles escolares.
   Edita precios igual que arriba. Los ids van de 1001 en adelante
   para no chocar con los productos de la tienda.
   ============================================================ */
const ARTICULOS = [
  {id:1001, nombre:"Cuaderno universitario 100 hojas",            cat:"Librería", precioDetal:2.5, precioMayor:1.8, img:"📓"},
  {id:1002, nombre:"Cuaderno doble línea 100 hojas",              cat:"Librería", precioDetal:2.2, precioMayor:1.6, img:"📔"},
  {id:1003, nombre:"Resma de papel carta (500 hojas)",            cat:"Librería", precioDetal:6,   precioMayor:4.5, img:"📄"},
  {id:1004, nombre:"Lápices de grafito HB (caja x12)",            cat:"Librería", precioDetal:3,   precioMayor:2,   img:"✏️"},
  {id:1005, nombre:"Caja de colores x12",                         cat:"Librería", precioDetal:3.5, precioMayor:2.4, img:"🖍️"},
  {id:1006, nombre:"Creyones de cera x12",                        cat:"Librería", precioDetal:2.8, precioMayor:1.9, img:"🖍️"},
  {id:1007, nombre:"Borrador de goma",                            cat:"Librería", precioDetal:0.5, precioMayor:0.3, img:"🧽"},
  {id:1008, nombre:"Sacapuntas con depósito",                     cat:"Librería", precioDetal:1,   precioMayor:0.6, img:"🪛"},
  {id:1009, nombre:"Tijera escolar punta roma",                   cat:"Librería", precioDetal:1.5, precioMayor:1,   img:"✂️"},
  {id:1010, nombre:"Pega blanca 225g",                            cat:"Librería", precioDetal:2,   precioMayor:1.4, img:"🧴"},
  {id:1011, nombre:"Barra de pega (glue stick)",                  cat:"Librería", precioDetal:1.2, precioMayor:0.8, img:"📌"},
  {id:1012, nombre:"Marcadores escolares x6",                     cat:"Librería", precioDetal:3.5, precioMayor:2.4, img:"🖊️"},
  {id:1013, nombre:"Cartulinas de colores (paquete)",             cat:"Librería", precioDetal:2.5, precioMayor:1.7, img:"🟨"},
  {id:1014, nombre:"Papel lustrillo (paquete)",                   cat:"Librería", precioDetal:1.5, precioMayor:1,   img:"🟥"},
  {id:1015, nombre:"Carpeta marrón con gancho",                   cat:"Librería", precioDetal:0.8, precioMayor:0.5, img:"📁"},
  {id:1016, nombre:"Block de dibujo Nº 6",                        cat:"Librería", precioDetal:2,   precioMayor:1.4, img:"🗒️"},
  {id:1017, nombre:"Témperas x6 colores",                         cat:"Librería", precioDetal:3.5, precioMayor:2.4, img:"🎨"},
  {id:1018, nombre:"Pincel escolar",                              cat:"Librería", precioDetal:1,   precioMayor:0.6, img:"🖌️"},
  {id:1019, nombre:"Regla 30 cm",                                 cat:"Librería", precioDetal:1,   precioMayor:0.6, img:"📏"},
  {id:1020, nombre:"Juego geométrico (regla, compás, transp.)",   cat:"Librería", precioDetal:4,   precioMayor:2.8, img:"📐"},
  {id:1021, nombre:"Bolígrafos azul/negro/rojo (x3)",             cat:"Librería", precioDetal:1.5, precioMayor:1,   img:"🖊️"},
  {id:1022, nombre:"Resaltador",                                  cat:"Librería", precioDetal:1.2, precioMayor:0.8, img:"🟢"},
  {id:1023, nombre:"Foami carta (paquete de colores)",            cat:"Librería", precioDetal:3,   precioMayor:2,   img:"🟦"},
  {id:1024, nombre:"Plastilina x12",                              cat:"Librería", precioDetal:2.5, precioMayor:1.7, img:"🌈"},
];

/* ============================================================
   COLEGIOS — listas oficiales por grado.
   Cada item: {id: <id de ARTICULOS>, q: <cantidad que pide el colegio>}
   Agrega colegios o grados copiando el formato.
   ============================================================ */
const COLEGIOS = [
  {id:"cef", nombre:"CEF", lema:"Centro Educativo", grados:[
    {nombre:"Preescolar", items:[
      {id:1006,q:2},{id:1011,q:3},{id:1009,q:1},{id:1013,q:2},{id:1014,q:2},
      {id:1017,q:1},{id:1018,q:2},{id:1024,q:2},{id:1023,q:1},{id:1015,q:3}
    ]},
    {nombre:"1er Grado", items:[
      {id:1002,q:4},{id:1004,q:1},{id:1005,q:1},{id:1007,q:2},{id:1008,q:1},
      {id:1011,q:2},{id:1019,q:1},{id:1015,q:4},{id:1003,q:1},{id:1016,q:1}
    ]},
    {nombre:"4to Grado", items:[
      {id:1001,q:5},{id:1021,q:2},{id:1022,q:2},{id:1020,q:1},{id:1003,q:1},
      {id:1012,q:1},{id:1015,q:5},{id:1016,q:1},{id:1010,q:1}
    ]},
  ]},
  {id:"sanagustin", nombre:"San Agustín", lema:"Colegio San Agustín", grados:[
    {nombre:"Preescolar", items:[
      {id:1005,q:1},{id:1006,q:2},{id:1011,q:2},{id:1009,q:1},{id:1017,q:1},
      {id:1024,q:2},{id:1013,q:2},{id:1023,q:1},{id:1015,q:2}
    ]},
    {nombre:"2do Grado", items:[
      {id:1002,q:3},{id:1004,q:1},{id:1005,q:1},{id:1007,q:2},{id:1008,q:1},
      {id:1011,q:2},{id:1019,q:1},{id:1016,q:1},{id:1015,q:3},{id:1003,q:1}
    ]},
    {nombre:"5to Grado", items:[
      {id:1001,q:6},{id:1021,q:3},{id:1022,q:2},{id:1020,q:1},{id:1012,q:1},
      {id:1003,q:2},{id:1015,q:6},{id:1016,q:1},{id:1010,q:1}
    ]},
  ]},
  {id:"sanignacio", nombre:"San Ignacio", lema:"Colegio San Ignacio de Loyola", grados:[
    {nombre:"Preescolar", items:[
      {id:1006,q:3},{id:1011,q:3},{id:1009,q:1},{id:1017,q:1},{id:1018,q:2},
      {id:1024,q:2},{id:1013,q:2},{id:1014,q:2},{id:1023,q:2},{id:1015,q:3}
    ]},
    {nombre:"3er Grado", items:[
      {id:1002,q:4},{id:1004,q:1},{id:1005,q:1},{id:1007,q:2},{id:1008,q:1},
      {id:1011,q:2},{id:1019,q:1},{id:1015,q:4},{id:1016,q:1},{id:1003,q:1},{id:1012,q:1}
    ]},
    {nombre:"6to Grado", items:[
      {id:1001,q:6},{id:1021,q:3},{id:1022,q:2},{id:1020,q:1},{id:1012,q:1},
      {id:1003,q:2},{id:1015,q:6},{id:1016,q:1},{id:1010,q:1}
    ]},
  ]},
  {id:"santotomas", nombre:"Santo Tomás", lema:"Colegio Santo Tomás de Aquino", grados:[
    {nombre:"Preescolar", items:[
      {id:1006,q:2},{id:1011,q:2},{id:1009,q:1},{id:1017,q:1},{id:1018,q:1},
      {id:1024,q:2},{id:1013,q:2},{id:1023,q:1},{id:1015,q:2}
    ]},
    {nombre:"2do Grado", items:[
      {id:1002,q:3},{id:1004,q:1},{id:1005,q:1},{id:1007,q:2},{id:1008,q:1},
      {id:1011,q:2},{id:1019,q:1},{id:1015,q:3},{id:1016,q:1},{id:1003,q:1}
    ]},
    {nombre:"5to Grado", items:[
      {id:1001,q:5},{id:1021,q:2},{id:1022,q:2},{id:1020,q:1},{id:1012,q:1},
      {id:1003,q:1},{id:1015,q:5},{id:1016,q:1},{id:1010,q:1}
    ]},
  ]},
];
