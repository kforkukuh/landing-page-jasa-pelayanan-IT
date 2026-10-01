/**
 * Kukuhadi Tech Solutions & IT Store - Interactive Script
 * Features: Catalog rendering, filtering, search, cart drawer, 
 * consultation modal, dark/light theme, WhatsApp integration & notifications.
 */

// Data Layanan IT (3 Jasa Utama) & Produk IT (3 Produk Unggulan)
const catalogData = [
  // --- 3 JASA PELAYANAN IT ---
  {
    id: "srv-1",
    type: "service",
    title: "Jasa Pembuatan Web & Aplikasi",
    category: "Layanan IT",
    badge: "Populer",
    price: 2500000,
    priceFormatted: "Rp 2.500.000",
    priceNote: "Mulai dari / proyek",
    shortDesc: "Solusi pembuatan website profil perusahaan, toko online (e-commerce), dan aplikasi sistem manajemen kustom yang responsif, cepat, dan SEO-friendly.",
    features: [
      "Desain UI/UX Modern & Mobile Responsive",
      "Optimasi SEO & Kecepatan Tinggi (Google PageSpeed 90+)",
      "Integrasi WhatsApp Chat, Payment Gateway & Admin Panel",
      "Gratis Domain & Cloud Hosting 1 Tahun",
      "Garansi Maintenance & Support Teknis 6 Bulan"
    ],
    details: "Layanan pengembangan website dan sistem informasi profesional yang disesuaikan dengan alur bisnis Anda. Menggunakan teknologi modern (React, Node, Laravel, Tailwind) yang aman, scalable, dan mudah dikelola oleh staf Anda sendiri.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`
  },
  {
    id: "srv-2",
    type: "service",
    title: "Instalasi & Maintenance Jaringan IT",
    category: "Layanan IT",
    badge: "Enterprise",
    price: 1200000,
    priceFormatted: "Rp 1.200.000",
    priceNote: "Mulai dari / titik/proyek",
    shortDesc: "Jasa perancangan, penarikan kabel LAN/Fiber Optic, konfigurasi Router Mikrotik/Cisco, Access Point WiFi kantor, CCTV IP, serta kontrak maintenance rutin.",
    features: [
      "Penataan Kabel Server Rack & Pemasangan Patch Panel Rapi",
      "Konfigurasi Mikrotik (Bandwidth Management, Failover, VPN)",
      "Setup WiFi Coverage Tanpa Blank Spot (Mesh / UniFi)",
      "Integrasi CCTV IP & Akses Pintu Smart Doorlock",
      "Laporan Monitoring Kesehatan Jaringan & Kunjungan Berkala"
    ],
    details: "Pastikan koneksi internet dan jaringan kantor Anda stabil tanpa gangguan down-time. Tim teknisi bersertifikat kami menangani mulai dari audit jaringan awal, instalasi fisik berstandar industri, hingga pemantauan berkala.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></svg>`
  },
  {
    id: "srv-3",
    type: "service",
    title: "Cloud Migration & Cyber Security",
    category: "Layanan IT",
    badge: "Keamanan Tinggi",
    price: 3000000,
    priceFormatted: "Rp 3.000.000",
    priceNote: "Mulai dari / implementasi",
    shortDesc: "Layanan migrasi server on-premise ke Cloud (AWS / Google Cloud / VPS), konfigurasi email korporat (Google Workspace / M365), dan proteksi keamanan ransomware.",
    features: [
      "Setup Google Workspace / Microsoft 365 Domain Resmi",
      "Migrasi Database & Sistem ke VPS / Cloud Server Aman",
      "Sistem Automated Disaster Recovery & Backup Terenkripsi",
      "Audit Kerentanan Sistem (Vulnerability & Penetration Test)",
      "Proteksi Endpoint Antivirus & Firewall Anti-Ransomware"
    ],
    details: "Lindungi data krusial perusahaan Anda dari ancaman kehilangan data, ransomware, maupun downtime server. Kami menyusun strategi cloud computing yang hemat biaya operasional dan memenuhi standar keamanan ISO/GDPR.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  },

  // --- 3 PENJUALAN PRODUK IT ---
  {
    id: "prd-1",
    type: "product",
    title: "Laptop Workstation & PC Rakitan Pro",
    category: "Produk IT",
    badge: "Best Seller",
    price: 14500000,
    priceFormatted: "Rp 14.500.000",
    priceNote: "Garansi Resmi 2-3 Tahun",
    shortDesc: "Unit PC Rakitan & Laptop kelas bisnis berdaya komputasi tinggi untuk software development, desain grafis 3D, analitik data, dan kebutuhan kantor multi-tasking.",
    features: [
      "Processor: Intel Core i7 13th Gen / AMD Ryzen 7 7000 Series",
      "Memory: 16GB - 32GB DDR5 5600MHz Dual Channel",
      "Storage: 1TB NVMe M.2 SSD Gen4 Ultra High Speed",
      "Graphic: NVIDIA GeForce RTX Series / Dedicated GPU",
      "Sudah Terinstal Windows 11 Pro Original + Office Siap Pakai"
    ],
    details: "Setiap unit telah melalui 24 jam stress-test ketat sebelum pengiriman. Dilengkapi sistem pendingin hening, casing airflow optimal, dan garansi pergantian unit jika terjadi kerusakan komponen bawaan.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>`
  },
  {
    id: "prd-2",
    type: "product",
    title: "Paket Router & Managed Switch Enterprise",
    category: "Produk IT",
    badge: "Ready Stock",
    price: 3750000,
    priceFormatted: "Rp 3.750.000",
    priceNote: "Bundling Lengkap",
    shortDesc: "Perangkat keras jaringan kelas enterprise (Mikrotik Cloud Router + Gigabit PoE Switch + UniFi AP) siap pakai untuk performa koneksi tanpa hambatan.",
    features: [
      "Router: Mikrotik Hex / RB4011 Dual-Core High Throughput",
      "Switch: 8-Port Gigabit PoE Managed Switch (802.3af/at)",
      "Access Point: UniFi 6 Lite / Long Range WiFi 6 Technology",
      "Kabel: 1 Roll UTP Cat6 Original Pure Copper 305 Meter",
      "Sudah Termasuk Konfigurasi Awal Tinggal Colok (Plug & Play)"
    ],
    details: "Solusi praktis untuk kantor, kafe, ruko, ataupun instansi pendidikan yang membutuhkan koneksi internet stabil hingga 100+ perangkat aktif secara simultan tanpa throttling.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>`
  },
  {
    id: "prd-3",
    type: "product",
    title: "Lisensi Software & Antivirus Bisnis Asli",
    category: "Produk IT",
    badge: "100% Genuine",
    price: 850000,
    priceFormatted: "Rp 850.000",
    priceNote: "Lisensi Resmi & Sertifikat",
    shortDesc: "Paket lisensi resmi seumur hidup dan tahunan untuk Microsoft Windows 11 Pro, Office 365 Business, dan Antivirus Endpoint ESET/Kaspersky Internet Security.",
    features: [
      "Microsoft Windows 11 Pro 64-Bit Retail Digital License",
      "Microsoft 365 Apps for Business (Word, Excel, PPT, 1TB Cloud)",
      "ESET Protect Entry / Kaspersky Endpoint Security (1 Tahun)",
      "Aktivasi Online Resmi Langsung ke Server Microsoft / Vendor",
      "Dukungan Faktur Pajak Perusahaan & Sertifikat Keaslian"
    ],
    details: "Hindari denda audit lisensi piranti lunak dan proteksi aset digital Anda dengan produk lisensi resmi bergaransi 100% aktivasi sukses dengan faktur resmi.",
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/></svg>`
  }
];

// App State
let currentTab = "all";
let searchQuery = "";
let cart = JSON.parse(localStorage.getItem("kukuhadi_cart") || "[]");

// Kontak WhatsApp Admin
const WHATSAPP_NUMBER = "6283833621956";

// DOM Elements
const catalogGrid = document.getElementById("catalogGrid");
const tabButtons = document.querySelectorAll(".tab-btn");
const searchInput = document.getElementById("searchInput");
const cartBtn = document.getElementById("cartBtn");
const cartBadge = document.getElementById("cartBadge");
const cartDrawerOverlay = document.getElementById("cartDrawerOverlay");
const closeCartBtn = document.getElementById("closeCartBtn");
const drawerItemsContainer = document.getElementById("drawerItems");
const drawerTotalEl = document.getElementById("drawerTotal");
const checkoutCartBtn = document.getElementById("checkoutCartBtn");
const clearCartBtn = document.getElementById("clearCartBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const mobileToggleBtn = document.getElementById("mobileToggleBtn");
const navLinks = document.getElementById("navLinks");
const toastContainer = document.getElementById("toastContainer");

// Modal Elements
const detailModal = document.getElementById("detailModal");
const detailModalContent = document.getElementById("detailModalContent");
const closeDetailBtn = document.getElementById("closeDetailBtn");
const consultModal = document.getElementById("consultModal");
const closeConsultBtn = document.getElementById("closeConsultBtn");
const consultForm = document.getElementById("consultForm");
const consultServiceSelect = document.getElementById("consultService");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderCatalog();
  updateCartBadge();
  setupEventListeners();
  populateConsultationDropdown();
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem("kukuhadi_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const newTheme = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("kukuhadi_theme", newTheme);
  updateThemeIcon(newTheme);
  showToast(`Tema diganti ke mode ${newTheme === 'dark' ? 'Gelap' : 'Terang'}`);
}

function updateThemeIcon(theme) {
  if (!themeToggleBtn) return;
  if (theme === "dark") {
    themeToggleBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  } else {
    themeToggleBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
}

// Render Catalog Cards
function renderCatalog() {
  if (!catalogGrid) return;

  const filtered = catalogData.filter(item => {
    const matchesTab = currentTab === "all" || item.type === currentTab;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  if (filtered.length === 0) {
    catalogGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1.5" style="margin-bottom:1rem;"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Tidak Ada Layanan atau Produk Ditemukan</h3>
        <p style="color: var(--text-muted);">Coba gunakan kata kunci pencarian yang lain atau ganti kategori tab.</p>
      </div>
    `;
    return;
  }

  catalogGrid.innerHTML = filtered.map(item => {
    const isService = item.type === "service";
    const badgeClass = isService ? "badge-service" : "badge-product";
    const actionBtn = isService 
      ? `<button class="btn btn-primary btn-sm" onclick="openConsultModal('${item.id}')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Konsultasi
         </button>`
      : `<button class="btn btn-accent btn-sm" onclick="addToCart('${item.id}')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          + Keranjang
         </button>`;

    return `
      <div class="card-item" data-id="${item.id}">
        <span class="card-badge-top ${badgeClass}">${item.badge}</span>
        <div class="card-header-visual">
          <div class="card-icon-wrapper">
            ${item.icon}
          </div>
        </div>
        <div class="card-body">
          <span style="font-size: 0.8rem; font-weight: 700; color: ${isService ? 'var(--secondary)' : 'var(--accent)'}; margin-bottom: 0.25rem;">
            ${item.category.toUpperCase()}
          </span>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-desc">${item.shortDesc}</p>
          
          <ul class="feature-list">
            ${item.features.slice(0, 3).map(feat => `
              <li class="feature-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span>${feat}</span>
              </li>
            `).join('')}
          </ul>

          <div class="card-footer">
            <div class="price-box">
              <span class="price-sub">${item.priceNote}</span>
              <span class="price-val">${item.priceFormatted}</span>
            </div>
            <div style="display: flex; gap: 0.4rem;">
              <button class="btn btn-secondary btn-sm" onclick="openDetailModal('${item.id}')" title="Lihat Detail Lengkap">
                Detail
              </button>
              ${actionBtn}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Populate Consultation Select Options
function populateConsultationDropdown() {
  if (!consultServiceSelect) return;
  const services = catalogData.filter(i => i.type === "service");
  consultServiceSelect.innerHTML = services.map(s => `
    <option value="${s.title}">${s.title} (${s.priceFormatted})</option>
  `).join("") + `<option value="Lainnya / Custom IT Project">Lainnya / Kebutuhan IT Custom</option>`;
}

// Event Listeners
function setupEventListeners() {
  // Tabs
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentTab = btn.getAttribute("data-tab");
      renderCatalog();
    });
  });

  // Search
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderCatalog();
    });
  }

  // Theme
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }

  // Mobile menu
  if (mobileToggleBtn && navLinks) {
    mobileToggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
    // Close on click link
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => navLinks.classList.remove("active"));
    });
  }

  // Cart Drawer
  if (cartBtn) cartBtn.addEventListener("click", openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCartDrawer);
  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener("click", (e) => {
      if (e.target === cartDrawerOverlay) closeCartDrawer();
    });
  }

  // Checkout
  if (checkoutCartBtn) checkoutCartBtn.addEventListener("click", checkoutWhatsApp);
  if (clearCartBtn) clearCartBtn.addEventListener("click", clearCart);

  // Modal Closers
  if (closeDetailBtn) closeDetailBtn.addEventListener("click", closeDetailModal);
  if (detailModal) {
    detailModal.addEventListener("click", (e) => {
      if (e.target === detailModal) closeDetailModal();
    });
  }
  if (closeConsultBtn) closeConsultBtn.addEventListener("click", closeConsultModal);
  if (consultModal) {
    consultModal.addEventListener("click", (e) => {
      if (e.target === consultModal) closeConsultModal();
    });
  }

  // Consultation Form
  if (consultForm) {
    consultForm.addEventListener("submit", handleConsultSubmit);
  }

  // Contact Page Form
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit);
  }

  // FAQ Accordion
  setupFaqAccordion();
}

// FAQ Accordion
function setupFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach(i => i.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// Cart Operations
function addToCart(itemId) {
  const product = catalogData.find(p => p.id === itemId);
  if (!product) return;

  const existing = cart.find(c => c.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      priceFormatted: product.priceFormatted,
      type: product.type,
      qty: 1
    });
  }

  saveCart();
  updateCartBadge();
  showToast(`"${product.title}" ditambahkan ke keranjang`);
}

function removeFromCart(itemId) {
  cart = cart.filter(c => c.id !== itemId);
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  showToast("Item dihapus dari keranjang");
}

function clearCart() {
  if (cart.length === 0) return;
  cart = [];
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  showToast("Keranjang berhasil dikosongkan");
}

function saveCart() {
  localStorage.setItem("kukuhadi_cart", JSON.stringify(cart));
}

function updateCartBadge() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartBadge) {
    cartBadge.textContent = totalQty;
    cartBadge.style.display = totalQty > 0 ? "flex" : "none";
  }
}

function openCartDrawer() {
  renderCartDrawer();
  cartDrawerOverlay.classList.add("active");
}

function closeCartDrawer() {
  cartDrawerOverlay.classList.remove("active");
}

function renderCartDrawer() {
  if (!drawerItemsContainer || !drawerTotalEl) return;

  if (cart.length === 0) {
    drawerItemsContainer.innerHTML = `
      <div class="drawer-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        <p style="margin-top: 1rem; font-weight: 500;">Keranjang belanja Anda masih kosong.</p>
        <p style="font-size: 0.85rem; color: var(--text-muted);">Pilih produk atau layanan yang Anda butuhkan dari katalog.</p>
      </div>
    `;
    drawerTotalEl.textContent = "Rp 0";
    if (checkoutCartBtn) checkoutCartBtn.disabled = true;
    return;
  }

  if (checkoutCartBtn) checkoutCartBtn.disabled = false;

  let totalPrice = 0;
  drawerItemsContainer.innerHTML = cart.map(item => {
    const subtotal = item.price * item.qty;
    totalPrice += subtotal;
    return `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <h4>${item.title}</h4>
          <p>${formatCurrency(item.price)} x ${item.qty} = ${formatCurrency(subtotal)}</p>
        </div>
        <button class="cart-item-delete" onclick="removeFromCart('${item.id}')" title="Hapus item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    `;
  }).join("");

  drawerTotalEl.textContent = formatCurrency(totalPrice);
}

function checkoutWhatsApp() {
  if (cart.length === 0) return;

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let message = `Halo Kukuhadi Tech Solutions! 👋\nSaya ingin memesan produk/layanan berikut melalui website:\n\n`;

  cart.forEach((item, index) => {
    message += `${index + 1}. *${item.title}* (${item.qty}x) - ${formatCurrency(item.price * item.qty)}\n`;
  });

  message += `\n*Total Estimasi: ${formatCurrency(total)}*\n`;
  message += `\nMohon info ketersediaan stok & prosedur pembayarannya. Terima kasih!`;

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
  closeCartDrawer();
  showToast("Membuka WhatsApp untuk konfirmasi pesanan...");
}

// Modal Detail
function openDetailModal(itemId) {
  const item = catalogData.find(i => i.id === itemId);
  if (!item || !detailModalContent) return;

  const isService = item.type === "service";
  const actionButton = isService
    ? `<button class="btn btn-primary btn-full" onclick="closeDetailModal(); openConsultModal('${item.id}');">
        Jadwalkan Konsultasi Gratis
       </button>`
    : `<button class="btn btn-accent btn-full" onclick="addToCart('${item.id}'); closeDetailModal();">
        Tambah ke Keranjang (${item.priceFormatted})
       </button>`;

  detailModalContent.innerHTML = `
    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem;">
      <div class="card-icon-wrapper" style="width: 3.5rem; height: 3.5rem;">
        ${item.icon}
      </div>
      <div>
        <span class="card-badge-top ${isService ? 'badge-service' : 'badge-product'}" style="position: static; display: inline-block; margin-bottom: 0.3rem;">
          ${item.category} • ${item.badge}
        </span>
        <h3 style="font-size: 1.35rem;">${item.title}</h3>
      </div>
    </div>

    <div style="background-color: var(--bg-card-subtle); padding: 1rem; border-radius: 0.75rem; margin-bottom: 1.25rem; border: 1px solid var(--border-color);">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.85rem; color: var(--text-muted);">${item.priceNote}</span>
        <span style="font-size: 1.4rem; font-weight: 800; color: var(--primary);">${item.priceFormatted}</span>
      </div>
    </div>

    <h4 style="font-size: 1rem; margin-bottom: 0.5rem;">Deskripsi Lengkap:</h4>
    <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.25rem; line-height: 1.6;">
      ${item.details}
    </p>

    <h4 style="font-size: 1rem; margin-bottom: 0.6rem;">Fitur & Spesifikasi Unggulan:</h4>
    <ul class="feature-list" style="margin-bottom: 1.75rem;">
      ${item.features.map(f => `
        <li class="feature-item" style="font-size: 0.9rem;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          <span>${f}</span>
        </li>
      `).join('')}
    </ul>

    ${actionButton}
  `;

  detailModal.classList.add("active");
}

function closeDetailModal() {
  detailModal.classList.remove("active");
}

// Modal Consultation
function openConsultModal(preselectedServiceId = null) {
  if (preselectedServiceId && consultServiceSelect) {
    const item = catalogData.find(i => i.id === preselectedServiceId);
    if (item) {
      consultServiceSelect.value = item.title;
    }
  }
  consultModal.classList.add("active");
}

function closeConsultModal() {
  consultModal.classList.remove("active");
}

function handleConsultSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("consultName").value.trim();
  const company = document.getElementById("consultCompany").value.trim() || "-";
  const service = consultServiceSelect.value;
  const note = document.getElementById("consultNote").value.trim() || "-";

  let message = `Halo Kukuhadi Tech Solutions! 🚀\nSaya ingin konsultasi layanan IT berikut:\n\n`;
  message += `👤 *Nama:* ${name}\n`;
  message += `🏢 *Perusahaan/Usaha:* ${company}\n`;
  message += `🛠️ *Layanan IT:* ${service}\n`;
  message += `📝 *Kebutuhan/Kendala:* ${note}\n\n`;
  message += `Mohon info jadwal konsultasi dan ketersediaan tim teknis. Terima kasih!`;

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");

  consultForm.reset();
  closeConsultModal();
  showToast("Formulir konsultasi terkirim via WhatsApp!");
}

// Contact Form Handler
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const phone = document.getElementById("contactPhone").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  let text = `Halo Kukuhadi Tech Solutions! 👋\nSaya mengirim pesan melalui website:\n\n`;
  text += `👤 *Nama:* ${name}\n`;
  text += `📧 *Email:* ${email}\n`;
  text += `📱 *Telepon/WA:* ${phone}\n`;
  text += `💬 *Pesan:* ${message}\n`;

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(waUrl, "_blank");

  document.getElementById("contactForm").reset();
  showToast("Pesan Anda telah dikirim via WhatsApp!");
}

// Helper Utilities
function formatCurrency(amount) {
  return "Rp " + amount.toLocaleString("id-ID");
}

function showToast(message) {
  if (!toastContainer) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.25s ease";
    setTimeout(() => toast.remove(), 250);
  }, 3000);
}
