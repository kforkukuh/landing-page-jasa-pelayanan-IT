# KUKUHADI TECH - Landing Page Jasa IT & Penjualan Produk

Website landing page modern, elegan, dan berkecepatan tinggi yang memadukan **3 Layanan Jasa IT Profesional** dan **3 Produk IT Unggulan**. Dibuat menggunakan HTML5 semantik, CSS3 murni berstandar modern (dengan mode Gelap/Terang), serta Vanilla JavaScript tanpa dependensi eksternal sehingga dapat langsung dibuka secara offline maupun online.

---

## 🚀 Fitur Unggulan

1. **3 Jasa Pelayanan IT Profesional**:
   - **Jasa Pembuatan Web & Aplikasi Sistem**: Website responsif, e-commerce, sistem kustom, garansi 6 bulan.
   - **Instalasi & Maintenance Jaringan IT**: Penarikan kabel LAN/Fiber, mikrotik router, server rack, WiFi coverage UniFi.
   - **Cloud Migration & Keamanan Siber (Cyber Security)**: Setup Google Workspace/M365, proteksi ransomware, backup otomatis.

2. **3 Penjualan Produk IT Unggulan**:
   - **Laptop & PC Workstation Pro**: Intel Core i7 / Ryzen 7, DDR5, RTX Series, Windows 11 Pro asli (Garansi resmi 2-3 tahun).
   - **Paket Router & Managed Switch Enterprise**: Mikrotik + UniFi Access Point + Switch Gigabit PoE siap pakai (Plug & Play).
   - **Lisensi Software & Antivirus Bisnis Asli**: Windows 11 Pro, Office 365, ESET/Kaspersky asli berfaktur resmi.

3. **Interaktivitas & Konversi Penjualan**:
   - **Filter & Live Search**: Navigasi instan antara "Semua", "Layanan IT", dan "Produk IT", serta kotak pencarian real-time.
   - **Sistem Keranjang Belanja (Cart Drawer)**: Pengunjung dapat menambahkan beberapa produk ke keranjang dan checkout langsung dengan format pesan otomatis ke WhatsApp.
   - **Modal Konsultasi Layanan**: Form terstruktur untuk calon klien memilih layanan IT dan menjadwalkan konsultasi langsung via WhatsApp.
   - **Modal Detail Produk & Jasa**: Pop-up rincian spesifikasi lengkap setiap item.
   - **Dark / Light Mode**: Penggantian tema otomatis disimpan di `localStorage`.
   - **Floating WhatsApp Button**: Tombol melayang untuk fast response customer service.
   - **Formulir Kontak Cepat**: Terintegrasi langsung membuka chat WhatsApp dengan pesan terformat.
   - **Desain 100% Responsif**: Tampilan optimal di smartphone, tablet, laptop, dan monitor desktop.

---

## 📁 Struktur Berkas

```
KUKUHADI/
├── index.html     # Halaman utama landing page
├── style.css      # Desain CSS modern, variabel tema (dark/light), layout responsif
├── script.js      # Data katalog, filter, keranjang, modal, dan integrasi WhatsApp
└── README.md      # Panduan dokumentasi dan kustomisasi
```

---

## 🛠️ Cara Membuka & Menjalankan

Anda tidak perlu menginstal server khusus atau Node.js:
1. Cukup klik ganda (double click) file `index.html` untuk langsung membukanya di browser favorit Anda (Google Chrome, Microsoft Edge, Mozilla Firefox, dll).
2. Atau jika menggunakan ekstensi VS Code / IDE: Klik kanan `index.html` lalu pilih **Open with Live Server**.

---

## ⚙️ Cara Kustomisasi

### 1. Mengubah Nomor WhatsApp Admin
Buka file `script.js` pada variabel `WHATSAPP_NUMBER`:
```javascript
const WHATSAPP_NUMBER = "6283833621956"; // Nomor WhatsApp aktif
```

Dan di `index.html` pada tombol kontak serta floating WA:
```html
<a href="https://wa.me/6283833621956..." ...>
```

### 2. Mengubah / Menambah Layanan atau Produk
Buka file `script.js` pada array `catalogData`:
```javascript
const catalogData = [
  {
    id: "srv-1",
    type: "service", // atau "product"
    title: "Nama Layanan / Produk",
    category: "Layanan IT",
    badge: "Populer",
    price: 2500000,
    priceFormatted: "Rp 2.500.000",
    priceNote: "Mulai dari / proyek",
    shortDesc: "Deskripsi singkat...",
    features: ["Fitur 1", "Fitur 2", ...],
    details: "Rincian penjelasan mendalam...",
    icon: `<svg>...</svg>`
  },
  ...
];
```

---

## 📄 Lisensi & Hak Cipta
Dibuat untuk **Kukuhadi Tech Solutions**. Bebas disesuaikan dan dikembangkan sesuai kebutuhan bisnis Anda.
