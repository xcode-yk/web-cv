# Rencana Implementasi: Website Portofolio Ryan Fahri Atanto

Rencana ini menggunakan pendekatan *vertical slicing* untuk memastikan setiap fase menghasilkan fungsionalitas yang dapat diverifikasi dan terlihat oleh pengguna.

## Dependency Graph

```mermaid
graph TD
    A[Slice 1: Setup & Hero] --> B(Slice 2: Static Sections);
    A --> C(Slice 3: Dynamic Sections);
    B --> D(Slice 4: Core Interactivity);
    C --> D;
    D --> E(Slice 5: Responsive Polish & Finalization);
```

- **Slice 1** adalah fondasi.
- **Slice 2 & 3** dapat dikerjakan secara paralel setelah Slice 1 selesai.
- **Slice 4** bergantung pada semua section dari Slice 2 & 3 untuk diimplementasikan (untuk scrollspy dan animations).
- **Slice 5** adalah fase final yang memoles keseluruhan website.

---

## ▶️ Slice 1: Foundational Setup & Hero Section

Tujuan: Membuat struktur dasar proyek, styling awal, dan mengimplementasikan section pertama yang paling menonjol (Hero).

| ID | Tugas | Kriteria Penerimaan (Acceptance Criteria) | Langkah Verifikasi (Verification) |
|---|---|---|---|
| **1.1** | **Setup Proyek** | - Struktur folder (`/src`, `/dist`, `/assets`) dibuat. <br> - `package.json` diinisialisasi. <br> - `tailwindcss` diinstal. <br> - Konfigurasi `tailwind.config.js` dibuat dengan tema (warna, font). <br> - `index.html` dan `src/input.css` dibuat. | `ls -R` menunjukkan struktur direktori yang benar.<br>`cat package.json` menunjukkan `tailwindcss` sebagai dev dependency.<br>`npx tailwindcss -i ./src/input.css -o ./dist/output.css` berhasil membuat `output.css`. |
| **1.2** | **Struktur HTML Dasar & Hero** | - `index.html` memiliki `<head>` (dengan link ke `dist/output.css`) dan `<body>`. <br> - Section `#hero` ada dengan konten placeholder (nama, title, CTA). <br> - Latar belakang gelap sesuai palet warna diterapkan pada `<body>`. | Buka `index.html` di browser. <br> - Latar belakang harus berwarna gelap. <br> - Teks placeholder dari section Hero terlihat. |
| **1.3** | **Styling Glassmorphism & Hero Card**| - Utility class `.glass` dibuat di `input.css` menggunakan `@layer utilities`. <br> - Section `#hero` menggunakan style glassmorphism. <br> - Teks di dalam Hero Card (nama, title) ditata sesuai `PROJECT_DESIGN.md`. <br> - Tombol CTA ("View My Work", "Contact Me") ditata tetapi belum fungsional. | Buka `index.html` di browser. <br> - Hero section memiliki efek blur transparan (glass). <br> - Tipografi dan warna teks sesuai desain. <br> - Tombol CTA terlihat benar. |

---

## ▶️ Slice 2: Static Content Sections

Tujuan: Menambahkan section-section yang sebagian besar berisi konten statis.

| ID | Tugas | Kriteria Penerimaan (Acceptance Criteria) | Langkah Verifikasi (Verification) |
|---|---|---|---|
| **2.1** | **Implementasi Section "About"** | - Section `#about` ditambahkan di `index.html` setelah `#hero`. <br> - Menggunakan komponen `.glass-card`. <br> - Konten dari `/tmp/cv-ryan.txt` dimasukkan. | Buka `index.html`, scroll ke bawah Hero. <br> - Section "About" terlihat dengan style glass. <br> - Konten sesuai dengan CV. |
| **2.2** | **Implementasi Section "Education"** | - Section `#education` ditambahkan di `index.html`. <br> - Menggunakan komponen `.glass-card`. <br> - Konten (Universitas, Sertifikasi) dari `/tmp/cv-ryan.txt` dimasukkan. | Scroll ke section "Education". <br> - Section terlihat dengan style glass. <br> - Konten sesuai dengan CV. |
| **2.3** | **Implementasi Footer & Contact** | - Section `#contact` (sebagai `<footer>`) ditambahkan di akhir. <br> - Link WhatsApp (`wa.me`) dan Email (`mailto`) fungsional. <br> - Alamat ditampilkan sebagai teks biasa. | Scroll ke bagian paling bawah. <br> - Klik link WhatsApp dan Email, pastikan URL benar. <br> - Alamat terlihat dan tidak bisa diklik. |

---

## ▶️ Slice 3: Dynamic & Interactive Sections

Tujuan: Membangun section dengan layout yang lebih kompleks dan interaktivitas awal.

| ID | Tugas | Kriteria Penerimaan (Acceptance Criteria) | Langkah Verifikasi (Verification) |
|---|---|---|---|
| **3.1** | **Implementasi Section "Experience"** | - Section `#experience` ditambahkan di `index.html`. <br> - Membuat layout timeline vertikal. <br> - Setiap item pengalaman kerja adalah sebuah `.glass-card`. <br> - Konten (perusahaan, jabatan, tanggal) dari `/tmp/cv-ryan.txt` dimasukkan. | Scroll ke section "Experience". <br> - Tampilan menyerupai timeline. <br> - Semua data pengalaman kerja dari CV ada dan akurat. |
| **3.2** | **Implementasi Section "Skills"** | - Section `#skills` ditambahkan di `index.html`. <br> - Setiap skill dari `/tmp/cv-ryan.txt` ditampilkan sebagai "chip". <br> - Chip memiliki style dasar dan efek `hover` (glow) menggunakan CSS transition. | Scroll ke section "Skills". <br> - Semua skill dari CV ditampilkan sebagai chip. <br> - Arahkan kursor ke setiap chip, pastikan efek glow muncul. |

---

## ▶️ Slice 4: Core Interactivity & Animations

Tujuan: Menghidupkan website dengan fungsionalitas JavaScript utama.

| ID | Tugas | Kriteria Penerimaan (Acceptance Criteria) | Langkah Verifikasi (Verification) |
|---|---|---|---|
| **4.1** | **Implementasi Navbar & Scrollspy** | - `src/main.js` dibuat dan di-link di `index.html`. <br> - Navbar sticky dengan style glassmorphism dibuat. <br> - IntersectionObserver digunakan untuk mendeteksi section aktif. <br> - Link di navbar mendapat `active class` saat section-nya di-scroll. <br> - Klik link di navbar melakukan smooth scroll ke section yang sesuai. | - Scroll halaman ke bawah, navbar harus tetap di atas. <br> - Saat scroll, link navigasi yang aktif berubah sesuai section yang terlihat. <br> - Klik setiap link di navbar, halaman harus scroll dengan mulus ke section tersebut. |
| **4.2** | **Implementasi Scroll-Reveal Animations** | - Logika IntersectionObserver di `main.js` diperluas. <br> - Setiap section (`<section>`) diberi class `.hidden-section` secara default (mis: `opacity-0 translate-y-10`). <br> - Saat section masuk viewport, class diubah untuk memicu transisi CSS (fade-in + slide-up). <br> - Animasi harus bisa diputar ulang (re-triggerable). | - Refresh halaman, scroll ke bawah perlahan. <br> - Setiap section harus muncul dengan animasi fade-in dan slide-up. <br> - Scroll ke atas melewati section, lalu scroll ke bawah lagi. Animasi harus terulang. |
| **4.3** | **Fungsionalitas Hero CTAs** | - Event listener ditambahkan ke tombol CTA di section Hero. <br> - Tombol "View My Work" melakukan smooth scroll ke `#experience`. <br> - Tombol "Contact Me" melakukan smooth scroll ke `#contact`. | - Klik tombol "View My Work", pastikan scroll ke section Experience. <br> - Klik tombol "Contact Me", pastikan scroll ke Footer. |

---

## ▶️ Slice 5: Responsive Polish & Finalization

Tujuan: Memastikan website bekerja sempurna di semua perangkat dan melakukan verifikasi akhir.

| ID | Tugas | Kriteria Penerimaan (Acceptance Criteria) | Langkah Verifikasi (Verification) |
|---|---|---|---|
| **5.1** | **Implementasi Hamburger Menu (Mobile)** | - Tampilan navbar berubah di breakpoint mobile (mis: `< 768px`). <br> - Ikon hamburger ditampilkan, link navigasi horizontal disembunyikan. <br> - Klik ikon hamburger akan menampilkan/menyembunyikan menu navigasi vertikal. | Buka DevTools, set lebar viewport ke 320px. <br> - Navbar harus menampilkan ikon hamburger. <br> - Klik ikon tersebut untuk membuka dan menutup menu. |
| **5.2** | **Refinement Responsive Layout** | - Semua section (Hero, About, Experience, Skills, Education, Contact) ditata dengan benar di breakpoint 320px, 768px, 1024px, 1440px. <br> - Tidak ada horizontal scroll yang tidak diinginkan. <br> - Ukuran font dan padding disesuaikan per breakpoint. | Gunakan DevTools Responsive Mode. <br> - Periksa setiap section di keempat breakpoint. <br> - Pastikan layout tidak rusak dan konten tetap terbaca dengan baik. |
| **5.3** | **Final Validation & Performance Check** | - `npx html-validate index.html` berjalan tanpa error. <br> - Periksa LCP (< 2.5s) dan FPS (60fps) menggunakan DevTools Lighthouse/Performance. <br> - Lakukan pengecekan manual terakhir terhadap semua fungsionalitas (link, animasi, scrollspy, responsive). | - Jalankan `html-validate` di terminal. <br> - Buka tab Lighthouse/Performance di DevTools dan jalankan audit. <br> - Lakukan QA manual dari awal hingga akhir seperti pengguna baru. |
