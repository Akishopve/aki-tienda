/* ============================================================
   AKI · CARRITO COMPARTIDO
   Lo usan index.html (tienda) y libreria.html. Depende de catalogo.js
   (PRODUCTOS, ARTICULOS, WHATSAPP, MIN_MAYOR, MONEDA), que debe
   cargarse ANTES que este archivo.

   Cada página define:
     - onModeChange()  -> qué re-pintar al cambiar detal/mayor
     - su propio init() al final
   ============================================================ */

/* ---------------- estado ---------------- */
let modo = "detal";
let cart = {}; // {id: qty}  (se guarda en localStorage, se comparte entre páginas)

const $ = s => document.querySelector(s);
const CATALOGO = [...PRODUCTOS, ...ARTICULOS];     // tienda + librería
const getProd  = id => CATALOGO.find(x => x.id == id);
const precioDe = p => modo === "mayor" ? p.precioMayor : p.precioDetal;
const fmt      = n => MONEDA + (Math.round(n*100)/100);

/* ---------------- modo detal/mayor ---------------- */
function setMode(m){
  modo = m;
  const bd=$("#btnDetal"), bm=$("#btnMayor"), nt=$("#modeNote");
  if(bd) bd.classList.toggle("active", m==="detal");
  if(bm) bm.classList.toggle("active", m==="mayor");
  if(nt) nt.textContent = m==="mayor"
    ? `Precios al mayor — pedido mínimo ${MIN_MAYOR} unidades en total.`
    : "Precios al detal — compra desde 1 unidad.";
  renderCart();
  if(typeof onModeChange === "function") onModeChange();
}

/* ---------------- carrito ---------------- */
function addToCart(id){
  cart[id] = (cart[id]||0) + 1;
  save(); renderCart(); updateCount();
  const p = getProd(id);
  toast(`✓ ${p.nombre} agregado`);
}
function changeQty(id, d){
  cart[id] = (cart[id]||0) + d;
  if(cart[id] <= 0) delete cart[id];
  save(); renderCart(); updateCount();
}
function removeItem(id){ delete cart[id]; save(); renderCart(); updateCount(); }

function totalUnidades(){ return Object.values(cart).reduce((a,b)=>a+b,0); }
function totalPrecio(){
  return Object.entries(cart).reduce((sum,[id,q])=>{
    const p = getProd(id); return sum + precioDe(p)*q;
  },0);
}
function updateCount(){ const el=$("#cartCount"); if(el) el.textContent = totalUnidades(); }

function renderCart(){
  const box = $("#drawerItems"); if(!box) return;
  const ids = Object.keys(cart);
  if(ids.length===0){
    box.innerHTML = `<div class="empty">Tu carrito está vacío.<br>Agrega productos para empezar.</div>`;
  } else {
    box.innerHTML = ids.map(id=>{
      const p = getProd(id); const q = cart[id];
      return `<div class="ci">
        <div class="ci-thumb">${p.img}</div>
        <div class="ci-info">
          <h4>${p.nombre}</h4>
          <div class="ci-price">${fmt(precioDe(p))} c/u</div>
          <div class="qty">
            <button onclick="changeQty(${id},-1)">−</button>
            <span>${q}</span>
            <button onclick="changeQty(${id},1)">+</button>
          </div>
          <button class="rm" onclick="removeItem(${id})">Quitar</button>
        </div>
        <div style="font-weight:800;color:var(--navy)">${fmt(precioDe(p)*q)}</div>
      </div>`;
    }).join("");
  }
  const tot = $("#cartTotal"); if(tot) tot.textContent = fmt(totalPrecio());

  // mínimo al mayor
  const u = totalUnidades();
  const btn = $("#checkoutBtn"); const note = $("#footNote");
  if(!btn) return;
  if(u===0){ btn.disabled = true; note.textContent = ""; }
  else if(modo==="mayor" && u < MIN_MAYOR){
    btn.disabled = true;
    note.textContent = `⚠️ Al mayor el mínimo es ${MIN_MAYOR} unidades. Te faltan ${MIN_MAYOR-u}.`;
  } else {
    btn.disabled = false;
    note.textContent = `${u} ${u===1?'unidad':'unidades'} · compra al ${modo}.`;
  }
}

/* ---------------- drawer ---------------- */
function openCart(){ $("#drawer").classList.add("open"); $("#overlay").classList.add("open"); }
function closeCart(){ $("#drawer").classList.remove("open"); $("#overlay").classList.remove("open"); }

/* ---------------- checkout WhatsApp ---------------- */
function checkout(){
  const ids = Object.keys(cart); if(ids.length===0) return;
  let msg = `¡Hola AKI! 🛒 Quiero hacer este pedido (al ${modo}):\n\n`;
  ids.forEach(id=>{
    const p = getProd(id); const q = cart[id];
    msg += `• ${q}x ${p.nombre} — ${fmt(precioDe(p))} c/u = ${fmt(precioDe(p)*q)}\n`;
  });
  msg += `\nTotal: ${fmt(totalPrecio())} (${totalUnidades()} unidades)`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
}

/* ---------------- persistencia ---------------- */
function save(){ localStorage.setItem("aki_cart", JSON.stringify(cart)); }
function load(){ try{ cart = JSON.parse(localStorage.getItem("aki_cart"))||{}; }catch(e){ cart={}; } }

/* ---------------- toast ---------------- */
let toastT;
function toast(t){
  const el=$("#toast"); if(!el) return;
  el.textContent=t; el.classList.add("show");
  clearTimeout(toastT); toastT=setTimeout(()=>el.classList.remove("show"),1800);
}
