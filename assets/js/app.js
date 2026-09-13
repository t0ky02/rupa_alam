const WA = "628111700773";
const PRODUCTS = [
  {
    id: "orange-blossom",
    name: "Orange Blossom",
    kind: "Body perfume oil · 30 ml",
    price: "",
    img: "assets/img/orange-blossom.jpg",
    tag: "The opening",
    blurb: "Bright, clean, sun on white petals. A morning oil that still behaves at dusk.",
    notes: ["Neroli / orange blossom", "Soft green leaf", "Light woods", "Jojoba · argan · squalane"],
    use: "Warm 2–3 drops in the palms. Press into arms, décolleté and legs after bath."
  },
  {
    id: "jasmine-veil",
    name: "Jasmine Veil",
    kind: "Body perfume oil · 30 ml",
    price: "",
    img: "assets/img/jasmine-veil.jpg",
    tag: "The night ritual",
    blurb: "A soft floral trail, like evening air through a window. The oil the house began with.",
    notes: ["Jasmine", "White floral veil", "Warm skin woods", "Jojoba · argan · squalane"],
    use: "The original gesture: warm, press, breathe, rest."
  },
  {
    id: "moist",
    name: "Moist",
    kind: "Body perfume oil · 30 ml",
    price: "",
    img: "assets/img/moist.jpg",
    tag: "After rain",
    blurb: "Green, damp hush after rain. Wet forest. The soul of the garden.",
    notes: ["Crushed leaf", "Lemongrass air", "Mossy woods", "Jojoba · grapeseed · squalane"],
    use: "For evenings when the body wants the garden more than the room."
  },
  {
    id: "milk-soap",
    name: "Milk Soap",
    kind: "Cleansing bar",
    price: "",
    img: "assets/img/milk-soap.jpg",
    tag: "Morning",
    blurb: "A hydrating cleanse before oil. Soft, simple, no perfume shout.",
    notes: ["Milk fats", "Gentle botanical oils"],
    use: "Morning cleanse, then dry body oil."
  },
  {
    id: "salt-scrub",
    name: "Eucalyptus Salt",
    kind: "Body scrub · 200 g",
    price: "",
    img: "assets/img/salt-scrub.jpg",
    tag: "After movement",
    blurb: "Salt and eucalyptus to refresh the skin before oil.",
    notes: ["Sea salt", "Eucalyptus", "Light oil"],
    use: "On damp skin after exercise or heat. Rinse. Follow with oil."
  },
  {
    id: "pillow-mist",
    name: "Pillow Mist",
    kind: "Room & linen mist · 50 ml",
    price: "",
    img: "assets/img/pillow-mist.jpg",
    tag: "Before rest",
    blurb: "Lavender and kenanga. The last gesture of the day.",
    notes: ["Lavender", "Kenanga", "Soft green"],
    use: "Two sprays on pillow or linen before sleep."
  }
];

const fmt = (n) => "Rp " + n.toLocaleString("id-ID");

function cart() {
  try { return JSON.parse(localStorage.getItem("ra-cart") || "[]"); }
  catch { return []; }
}
function saveCart(items) {
  localStorage.setItem("ra-cart", JSON.stringify(items));
  paintCount();
}
function addToCart(id, qty = 1) {
  const items = cart();
  const found = items.find((i) => i.id === id);
  if (found) found.qty += qty;
  else items.push({ id, qty });
  saveCart(items);
}
function setQty(id, qty) {
  let items = cart();
  if (qty <= 0) items = items.filter((i) => i.id !== id);
  else {
    const f = items.find((i) => i.id === id);
    if (f) f.qty = qty;
  }
  saveCart(items);
}
function cartDetailed() {
  return cart().map((i) => {
    const p = PRODUCTS.find((x) => x.id === i.id);
    return p ? { ...p, qty: i.qty, line: p.price * i.qty } : null;
  }).filter(Boolean);
}
function cartTotal() {
  return cartDetailed().reduce((s, i) => s + i.line, 0);
}
function paintCount() {
  const n = cart().reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = n;
    el.classList.toggle("show", n > 0);
  });
}

function waOrder(extra = "") {
  const lines = cartDetailed();
  if (!lines.length && !extra) return;
  let msg = "Halo Rupa Alam, saya ingin memesan:%0A%0A";
  lines.forEach((i) => {
    msg += `• ${i.name} x${i.qty} — ${fmt(i.line)}%0A`;
  });
  if (lines.length) msg += `%0ATotal: ${fmt(cartTotal())}%0A`;
  if (extra) msg += `%0A${encodeURIComponent(extra)}`;
  window.open(`https://wa.me/${WA}?text=${msg}`, "_blank");
}

function productCard(p) {
  return `<article class="card">
    <a href="product.html?id=${p.id}"><img src="${p.img}" alt="${p.name}"></a>
    <div class="pad">
      <div class="tag">${p.tag}</div>
      <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <div class="meta">${p.kind}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
        <!--<span class="price">${fmt(p.price)}</span>-->
        <!--<button class="btn btn-dark" data-add="${p.id}">Add</button>-->
      </div>
    </div>
  </article>`;
}

function mountShop(el, ids) {
  const list = ids ? PRODUCTS.filter((p) => ids.includes(p.id)) : PRODUCTS;
  el.innerHTML = list.map(productCard).join("");
}

document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) {
    addToCart(add.dataset.add, 1);
    add.textContent = "Added";
    setTimeout(() => (add.textContent = "Add"), 900);
  }
});

function injectChrome(active) {
  const header = document.getElementById("topbar");
  if (header) header.innerHTML = `
    <a class="brand" href="index.html">
      <span class="brand-mark">
        <img src="assets/img/brand-logo.png"/>
      </span>
      <b>RUPA ALAM</b>
    </a>
    <nav class="topnav">
      <a href="index.html" class="${active==="home"?"active":""}">Home</a>
      <a href="shop.html" class="${active==="shop"?"active":""}">Shop</a>
      <a href="story.html" class="${active==="story"?"active":""}">Story</a>
      <a href="sanctuary.html" class="${active==="place"?"active":""}">Place</a>
      <a href="https://wa.me/${WA}?text=Halo%20Rupa%20Alam%2C%20saya%20ingin%20bertanya%20tentang%20produk%20atau%20ritual" target="_blank" rel="noopener">Chat</a>
    </nav>
    <div class="topbar-right">
      <a class="icon-btn" href="cart.html" aria-label="Cart" style="margin-top:10px;">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 7h15l-1.5 9h-12z"/><path d="M6 7 5 4H2"/><circle cx="9" cy="20" r="1.2"/><circle cx="18" cy="20" r="1.2"/></svg>
        <span class="cart-count" data-cart-count>0</span>
      </a>
    </div>`;
  const tabs = document.getElementById("tabs");
  if (tabs) tabs.innerHTML = `
    <a href="index.html" class="${active==="home"?"active":""}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>
      Home
    </a>
    <a href="shop.html" class="${active==="shop"?"active":""}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>
      Shop
    </a>
    <a href="sanctuary.html" class="${active==="place"?"active":""}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3c4 4 7 7.2 7 11a7 7 0 1 1-14 0c0-3.8 3-7 7-11z"/></svg>
      Place
    </a>
    <a href="cart.html" class="${active==="cart"?"active":""}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 7h15l-1.5 9h-12z"/><path d="M6 7 5 4H2"/></svg>
      Cart
    </a>
    <a href="https://wa.me/${WA}?text=Halo%20Rupa%20Alam%2C%20saya%20ingin%20bertanya%20tentang%20produk%20atau%20ritual" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 18 5 21l3.2-1.2A8.5 8.5 0 1 0 6 18z"/></svg>
      Chat
    </a>`;
}

document.addEventListener("DOMContentLoaded", () => {
  injectChrome(document.body.dataset.page || "home");
  paintCount();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
