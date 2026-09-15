const WA = "628111700773";

/* =========================
   PRODUCTS (base data)
   ========================= */
const PRODUCTS = [
  {
    id: "orange-blossom",
    name: { en: "Orange Blossom", id: "Orange Blossom" },
    kind: { en: "Body perfume oil · 30 ml", id: "Body perfume oil · 30 ml" },
    price: "",
    notice: { en: "AVAILABLE SOON", id: "SEGERA HADIR" },
    img: "assets/img/product/orange-blossom.jpeg",
    tag: { en: "The opening", id: "Pembuka" },
    blurb: {
      en: "Bright, clean, sun on white petals. A morning oil that still behaves at dusk.",
      id: "Cerah, bersih, matahari di kelopak putih. Minyak pagi yang tetap tenang di senja."
    },
    notes: {
      en: ["Neroli / orange blossom", "Soft green leaf", "Light woods", "Jojoba · argan · squalane"],
      id: ["Neroli / orange blossom", "Daun hijau lembut", "Kayu ringan", "Jojoba · argan · squalane"]
    },
    use: {
      en: "Warm 2–3 drops in the palms. Press into arms, décolleté and legs after bath.",
      id: "Hangatkan 2–3 tetes di telapak tangan. Tekan ke lengan, décolleté, dan kaki setelah mandi."
    }
  },
  {
    id: "jasmine-veil",
    name: { en: "Jasmine Veil", id: "Jasmine Veil" },
    kind: { en: "Body perfume oil · 30 ml", id: "Body perfume oil · 30 ml" },
    price: "",
    notice: { en: "AVAILABLE SOON", id: "SEGERA HADIR" },
    img: "assets/img/product/jasmine-veil.jpeg",
    tag: { en: "The night ritual", id: "Ritual malam" },
    blurb: {
      en: "A soft floral trail, like evening air through a window. The oil the house began with.",
      id: "Jejak floral yang lembut, seperti udara malam melalui jendela. Minyak yang memulai rumah ini."
    },
    notes: {
      en: ["Jasmine", "White floral veil", "Warm skin woods", "Jojoba · argan · squalane"],
      id: ["Jasmine", "Tirai floral putih", "Kayu kulit hangat", "Jojoba · argan · squalane"]
    },
    use: {
      en: "The original gesture: warm, press, breathe, rest.",
      id: "Gestur asli: hangatkan, tekan, tarik napas, istirahat."
    }
  },
  {
    id: "moist",
    name: { en: "Moist", id: "Moist" },
    kind: { en: "Body perfume oil · 30 ml", id: "Body perfume oil · 30 ml" },
    price: "",
    notice: { en: "AVAILABLE SOON", id: "SEGERA HADIR" },
    img: "assets/img/product/moist.jpeg",
    tag: { en: "After rain", id: "Setelah hujan" },
    blurb: {
      en: "Green, damp hush after rain. Wet forest. The soul of the garden.",
      id: "Hijau, keheningan basah setelah hujan. Hutan basah. Jiwa taman."
    },
    notes: {
      en: ["Crushed leaf", "Lemongrass air", "Mossy woods", "Jojoba · grapeseed · squalane"],
      id: ["Daun remuk", "Udara serai", "Kayu lumut", "Jojoba · grapeseed · squalane"]
    },
    use: {
      en: "For evenings when the body wants the garden more than the room.",
      id: "Untuk malam ketika tubuh lebih menginginkan taman daripada ruangan."
    }
  },
  {
    id: "milk-soap",
    name: { en: "Milk Soap", id: "Milk Soap" },
    kind: { en: "Cleansing bar", id: "Sabun pembersih" },
    price: "",
    notice: { en: "AVAILABLE SOON", id: "SEGERA HADIR" },
    img: "assets/img/milk-soap.jpg",
    tag: { en: "Morning", id: "Pagi" },
    blurb: {
      en: "A hydrating cleanse before oil. Soft, simple, no perfume shout.",
      id: "Pembersihan melembapkan sebelum minyak. Lembut, sederhana, tanpa teriakan parfum."
    },
    notes: {
      en: ["Milk fats", "Gentle botanical oils"],
      id: ["Lemak susu", "Minyak botani lembut"]
    },
    use: {
      en: "Morning cleanse, then dry body oil.",
      id: "Pembersihan pagi, lalu body oil kering."
    }
  },
  {
    id: "salt-scrub",
    name: { en: "Eucalyptus Salt", id: "Eucalyptus Salt" },
    kind: { en: "Body scrub · 200 g", id: "Body scrub · 200 g" },
    price: "",
    notice: { en: "AVAILABLE SOON", id: "SEGERA HADIR" },
    img: "assets/img/salt-scrub.jpg",
    tag: { en: "After movement", id: "Setelah bergerak" },
    blurb: {
      en: "Salt and eucalyptus to refresh the skin before oil.",
      id: "Garam dan eucalyptus untuk menyegarkan kulit sebelum minyak."
    },
    notes: {
      en: ["Sea salt", "Eucalyptus", "Light oil"],
      id: ["Garam laut", "Eucalyptus", "Minyak ringan"]
    },
    use: {
      en: "On damp skin after exercise or heat. Rinse. Follow with oil.",
      id: "Pada kulit lembap setelah olahraga atau panas. Bilas. Lanjutkan dengan minyak."
    }
  },
  {
    id: "pillow-mist",
    name: { en: "Pillow Mist", id: "Pillow Mist" },
    kind: { en: "Room & linen mist · 50 ml", id: "Room & linen mist · 50 ml" },
    price: "",
    notice: { en: "AVAILABLE SOON", id: "SEGERA HADIR" },
    img: "assets/img/pillow-mist.jpg",
    tag: { en: "Before rest", id: "Sebelum istirahat" },
    blurb: {
      en: "Lavender and kenanga. The last gesture of the day.",
      id: "Lavender dan kenanga. Gestur terakhir hari itu."
    },
    notes: {
      en: ["Lavender", "Kenanga", "Soft green"],
      id: ["Lavender", "Kenanga", "Hijau lembut"]
    },
    use: {
      en: "Two sprays on pillow or linen before sleep.",
      id: "Dua semprotan pada bantal atau linen sebelum tidur."
    }
  }
];

/* =========================
   i18n CORE
   ========================= */
let currentLang = localStorage.getItem("ra-lang") || "en";
let translations = {};

async function loadLanguage(lang) {
  try {
    const res = await fetch(`locales/${lang}.json`);
    if (!res.ok) throw new Error("Language file not found");
    translations = await res.json();
    currentLang = lang;
    localStorage.setItem("ra-lang", lang);
    document.documentElement.lang = lang;
    applyTranslations();
    // Re-render dynamic parts that depend on language
    if (typeof window.__onLangChange === "function") {
      window.__onLangChange();
    }
  } catch (err) {
    console.error("Failed to load language:", err);
  }
}

function t(key) {
  return translations[key] || key;
}

function applyTranslations() {
  // Text content
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[key]) {
      el.innerHTML = translations[key];
    }
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[key]) {
      el.placeholder = translations[key];
    }
  });

  // Update language switcher active state
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
  });
}

function changeLanguage(lang) {
  if (lang === currentLang) return;
  loadLanguage(lang);
}

/* =========================
   HELPERS
   ========================= */
const fmt = (n) => "Rp " + Number(n).toLocaleString("id-ID");

function cart() {
  try {
    return JSON.parse(localStorage.getItem("ra-cart") || "[]");
  } catch {
    return [];
  }
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
  return cart()
    .map((i) => {
      const p = PRODUCTS.find((x) => x.id === i.id);
      if (!p) return null;
      return {
        ...p,
        name: p.name[currentLang] || p.name.en,
        kind: p.kind[currentLang] || p.kind.en,
        notice: p.notice[currentLang] || p.notice.en,
        tag: p.tag[currentLang] || p.tag.en,
        blurb: p.blurb[currentLang] || p.blurb.en,
        notes: p.notes[currentLang] || p.notes.en,
        use: p.use[currentLang] || p.use.en,
        qty: i.qty,
        line: (Number(p.price) || 0) * i.qty
      };
    })
    .filter(Boolean);
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

/* =========================
   PRODUCT CARD
   ========================= */
function productCard(p) {
  const name = p.name[currentLang] || p.name.en;
  const kind = p.kind[currentLang] || p.kind.en;
  const tag = p.tag[currentLang] || p.tag.en;
  const notice = p.notice[currentLang] || p.notice.en;

  return `<article class="card">
    <a href="product.html?id=${p.id}"><img src="${p.img}" alt="${name}"></a>
    <div class="pad">
      <div class="tag">${tag}</div>
      <h3><a href="product.html?id=${p.id}">${name}</a></h3>
      <div class="meta">${kind}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
        <span>${notice}</span>
      </div>
    </div>
  </article>`;
}

function mountShop(el, ids) {
  if (!el) return;
  const list = ids ? PRODUCTS.filter((p) => ids.includes(p.id)) : PRODUCTS;
  el.innerHTML = list.map(productCard).join("");
}

/* =========================
   INJECT CHROME (header + tabs)
   ========================= */
function injectChrome(active) {
  const header = document.getElementById("topbar");
  if (header) {
    header.innerHTML = `
      <a class="brand" href="index.html">
        <span class="brand-mark">
          <img src="assets/img/brand-logo1.png?v=2" alt="Rupa Alam"/>
        </span>
        <b data-i18n="brand.name">RUPA ALAM</b>
      </a>
      <nav class="topnav">
        <a href="index.html" class="${active === "home" ? "active" : ""}" data-i18n="nav.home">Home</a>
        <a href="shop.html" class="${active === "shop" ? "active" : ""}" data-i18n="nav.shop">Shop</a>
        <a href="story.html" class="${active === "story" ? "active" : ""}" data-i18n="nav.story">Story</a>
        <a href="sanctuary.html" class="${active === "place" ? "active" : ""}" data-i18n="nav.place">Place</a>
        <a href="https://wa.me/${WA}?text=Halo%20Rupa%20Alam%2C%20saya%20ingin%20bertanya%20tentang%20produk%20atau%20ritual" target="_blank" rel="noopener" data-i18n="nav.chat">Chat</a>
      </nav>
      <div class="topbar-right">
        <div class="lang-switch">
          <button type="button" data-lang="en" onclick="changeLanguage('en')" class="${currentLang === "en" ? "active" : ""}">EN</button>
          <button type="button" data-lang="id" onclick="changeLanguage('id')" class="${currentLang === "id" ? "active" : ""}">ID</button>
        </div>
        <a class="icon-btn" href="cart.html" aria-label="Cart" style="margin-top:10px;">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 7h15l-1.5 9h-12z"/><path d="M6 7 5 4H2"/><circle cx="9" cy="20" r="1.2"/><circle cx="18" cy="20" r="1.2"/></svg>
          <span class="cart-count" data-cart-count>0</span>
        </a>
      </div>`;
  }

  const tabs = document.getElementById("tabs");
  if (tabs) {
    tabs.innerHTML = `
      <a href="index.html" class="${active === "home" ? "active" : ""}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>
        <span data-i18n="nav.home">Home</span>
      </a>
      <a href="shop.html" class="${active === "shop" ? "active" : ""}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>
        <span data-i18n="nav.shop">Shop</span>
      </a>
      <a href="sanctuary.html" class="${active === "place" ? "active" : ""}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3c4 4 7 7.2 7 11a7 7 0 1 1-14 0c0-3.8 3-7 7-11z"/></svg>
        <span data-i18n="nav.place">Place</span>
      </a>
      <a href="cart.html" class="${active === "cart" ? "active" : ""}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 7h15l-1.5 9h-12z"/><path d="M6 7 5 4H2"/></svg>
        <span data-i18n="nav.cart">Cart</span>
      </a>
      <a href="https://wa.me/${WA}?text=Halo%20Rupa%20Alam%2C%20saya%20ingin%20bertanya%20tentang%20produk%20atau%20ritual" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 18 5 21l3.2-1.2A8.5 8.5 0 1 0 6 18z"/></svg>
        <span data-i18n="nav.chat">Chat</span>
      </a>`;
  }

  // Apply translations to newly injected elements
  applyTranslations();
}

/* =========================
   INIT
   ========================= */
document.addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) {
    addToCart(add.dataset.add, 1);
    add.textContent = t("product.added");
    setTimeout(() => (add.textContent = t("product.add")), 900);
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  await loadLanguage(currentLang);
  injectChrome(document.body.dataset.page || "home");
  paintCount();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
