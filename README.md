# Frontend Developer Test &mdash; Jiwo Kristi

### 1. npm install

### 2. npm run dev

<br />

## Essay

### 1. Jelaskan perbedaan cookies dan local storage? kapan menggunakan cookies / local storage?

**Cookies:**

Cookies adalah data kecil yang disimpan dalam browser pengguna (biasanya sekitar 4kb) dan memiliki masa kadaluarsa yang dapat diatur. Cookies biasanya digunakan untuk menyimpan informasi pengguna, seperti preferensi, data sesi, dan informasi otentikasi.

**Local Storage:**

Local Storage adalah fitur di browser yang memungkinkan aplikasi web menyimpan data dalam jumlah yang lebih besar (biasanya beberapa mb). Data disimpan dalam local storage tetap ada bahkan setelah browser ditutup dan komputer direstart. Local Storage biasanya digunakan untuk menyimpan data aplikasi yang perlu dipertahankan di antara sesi, seperti riwayat, atau data cache.

**Kapan Menggunakan Cookies / Local Storage:**

Gunakan Cookies ketika:

- Membutuhkan data yang harus berada dalam ukuran yang kecil dan bersifat sementara.
- Membutuhkan mekanisme otentikasi atau penandaan sesi.

Gunakan Local Storage ketika:

- Membutuhkan penyimpanan data yang lebih besar dan bersifat persisten antara sesi.
- Tidak perlu khawatir tentang batasan ukuran atau masa kadaluarsa data.

<br />

### 2. Jelaskan bagaimana kamu mengamankan GUI dari serangan siber. Hal apa saja yang perlu diperhatikan?

Untuk mengamankan GUI dari serangan siber, beberapa hal yang perlu diperhatikan adalah:

- **Validasi Input:** Pastikan semua input dari pengguna divalidasi secara ketat untuk mencegah serangan injeksi seperti SQL injection atau XSS (Cross-Site Scripting).

- **Penggunaan HTTPS:** Selalu gunakan HTTPS untuk mengenkripsi data yang dikirimkan antara browser dan server, sehingga mencegah serangan peretasan data atau pengintipan.

- **Pembaruan Keamanan:** Pastikan perangkat lunak yang digunakan untuk membangun GUI selalu diperbarui dengan patch keamanan terbaru untuk mengatasi kerentanan yang diketahui.

<br />

### 3. Apakah sebuah aplikasi front-end web dapat dijadikan aplikasi desktop / mobile? Jelaskan.

Ya, sebuah aplikasi front-end web dapat dijadikan aplikasi desktop atau mobile dengan menggunakan teknologi seperti:

- **Aplikasi Desktop:** Dengan menggunakan teknologi seperti Electron atau NW.js, sebuah aplikasi web dapat diubah menjadi aplikasi desktop yang dapat diinstal dan berjalan secara independen di komputer pengguna, menggunakan fitur-fitur seperti akses sistem file dan notifikasi.

- **Aplikasi Mobile:** Dengan menggunakan kerangka kerja seperti React Native atau Ionic, sebuah aplikasi web dapat diubah menjadi aplikasi mobile yang dapat diinstal di perangkat Android atau iOS, memanfaatkan API dan fitur-fitur perangkat mobile.

<br />

### 4. Misalkan pada sebuah website, terdapat sebuah div kecil A yang berada dalam div yang lebih besar B. Jelaskan bagaimana cara kamu menempatkan div A berada di tengah-tengah div B sehingga posisinya tepat di tengah secara vertikal. Apa saja yang perlu diperhatikan?

Untuk menempatkan div A di tengah-tengah div B secara vertikal, kita dapat menggunakan CSS dengan beberapa langkah sebagai berikut:

```css
.B {
  position: relative;
}

.A {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

Pada HTML, pastikan div B memiliki posisi relatif, dan div A memiliki posisi absolut. Dengan menggunakan properti top: 50%, div A akan berada di tengah div B secara vertikal, di mana sisi atas div A akan tepat berada di tengah div B. Properti transform: translateY(-50%) akan menyesuaikan posisi div A agar berada persis di tengah secara vertikal dengan cara menaikan posisi div A sebesar 50% dari tinggi elemen itu sendiri.

<br />

### 5. Sebutkan sebuah framework UI yang kamu sangat sukai, jelaskan mengapa kamu menyukainya.

Sebagai pengguna Next.js, saya sangat menyukainya karena beberapa alasan berikut:

- **Server-side Rendering (SSR):** Next.js secara bawaan mendukung server-side rendering, yang memungkinkan kita membuat aplikasi web yang lebih cepat. Sehingga konten di-render di server sebelum dikirimkan ke browser pengguna, meningkatkan kecepatan tampilan halaman.

- **Routing yang Intuitif:** Next.js menyediakan sistem routing yang intuitif dan mudah digunakan dengan adanya **App Router**, sehingga developer bisa membuat _routes_ hanya dengan membuat folder yang memiliki file dengan nama spesial _page.ts_ di dalam folder app. Tidak memerlukan konfigurasi komponen yang panjang.

- **Dukungan Penuh untuk React:** Next.js didesain untuk bekerja secara langsung dengan React, sehingga kita dapat memanfaatkan semua fitur dan fungsionalitas yang dimiliki React dalam pengembangan aplikasi web kita.

- **Server Actions & Components:** Next.js memungkinkan kita untuk membuat aplikasi full stack monorepo di mana logika server dapat dibuat secara langsung tanpa usaha berat membuat _endpoint_. Kita bisa berinteraksi langsung dengan _database_ menggunakan ORM seperti Prisma tanpa terlihat sisi klien.

- **Partial Prerendering:** Partial prerendering dalam Next.js memungkinkan kita untuk menghasilkan halaman secara statis atau dengan server-side rendering (SSR) hanya untuk bagian-bagian tertentu dari situs web kita, sehingga waktu loading tidak akan membuat kita menunggu untuk semua data masuk sebelum menampilkan sesuatu pada layar dikarenakan komponen-komponen yang datanya sampai terlebih dahulu akan dimunculkan lebih dulu, selagi komponen _fallback_ akan ditampilkan di tempat komponen yang datanya belum masuk.

- **Satu Sumber Kebenaran:** Saat membangun aplikasi yang mementingkan _type safety_ tantangan yang perlu kita hadapi adalah 2 sumber kebenaran (type yang dibuat oleh FE dan yang dibuat oleh BE bisa berbeda). Next.js memungkinkan kita untuk memiliki 1 sumber kebenaran dikarenakan kita mampu membuat aplikasi full stack monorepo.
