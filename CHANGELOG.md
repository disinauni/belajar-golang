# Changelog

Semua perubahan penting pada proyek belajar-golang dicatat di file ini. Format mengikuti [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Changed
- Migrasi organisasi GitHub dari akun personal `zedfar` ke org [`disinauni`](https://github.com/disinauni) (`github.com/disinauni/belajar-golang`), termasuk migrasi domain production dari `varnimyr.my.id` ke `disinauni.my.id`.
- Favicon & og-image diganti dari desain generik `</>` (sebelumnya identik persis dengan belajar-cpp dan belajar-python) menjadi wajah gopher minimalis warna cyan, terinspirasi maskot resmi Go tanpa meniru artwork-nya persis.
- Sistem warna `primary` di seluruh UI situs diganti dari biru generik (`#3b82f6`, identik dengan belajar-cpp/python/sql) ke scale cyan resmi Tailwind (`#22d3ee`/`#0891b2`), konsisten dengan favicon baru — mencakup `tailwind.config.ts`, `theme-color` meta tag, state tombol snippet aktif di playground, warna inline-code di prosa lesson, dan gradient/grid/pills di og-image. Warna `accent` (ungu) sengaja dipertahankan.
- README diseragamkan strukturnya dengan keluarga situs belajar-* lainnya: badge Deploy & E2E ditambahkan, paragraf keanggotaan [ekosistem disinauni](https://disinauni.my.id).

### Fixed
- Tombol "Mulai Belajar" di homepage mengarah ke slug lesson yang salah (`01-apa-itu-programming`, seharusnya `01-apa-itu-go` sesuai `curriculum.ts` & nama file MDX) — broken link (404) yang sudah ada sejak lama, ketahuan tidak sengaja saat investigasi sistem warna.
- CI E2E test berisiko gagal random ("strict mode violation: locator('h1') resolved to 5 elements") — Astro Dev Toolbar (aktif karena CI menjalankan `astro dev`, bukan build production; adapter Vercel tidak mendukung `astro preview`) menyuntik elemen `<h1>` tambahan dari panel Islands/Audit/Settings. Diperbaiki dengan `devToolbar.enabled: !process.env.CI` di `astro.config.mjs` — toolbar tetap aktif untuk dev lokal biasa.

### Added
- Scaffold awal platform (Astro + React + Tailwind v4), mengikuti arsitektur `belajar-python`/`belajar-sql`.
- Kurikulum 9 unit (`unit-0` s.d. `unit-8`) terdaftar di `src/lib/curriculum.ts`, termasuk dua unit khas Go (`unit-7` Concurrency, `unit-8` Practical Go) tanpa padanan di keluarga situs cpp/python/sql.
- Konten lengkap Bahasa Indonesia untuk seluruh 9 unit (49 lesson, semua `isAvailable: true`).
- Terjemahan Inggris lengkap untuk seluruh 49 lesson (`translationStatus: "complete"`) — bukan cuma prosa, tapi kode contoh dan Exercise juga dilokalisasi penuh (identifier & string), dengan setiap `expectedOutput` diverifikasi ulang langsung ke Judge0.
- Eksekusi kode Go via Judge0 (`language_id: 60`) dan CodeMirror `@codemirror/lang-go`.
- `.github/workflows/ci.yml` — typecheck, unit test, build, dan Playwright E2E otomatis di setiap push/PR ke `main`.

### Fixed
- `public/og-default.svg`/`.png`, `public/manifest.json`, dan `public/robots.txt` yang sebelumnya masih membawa branding "Belajar Python" dari proses scaffolding awal — sekarang seluruhnya Go-branded.
- `getNextLesson`/`getPrevLesson` di `curriculum.ts` dibatasi hanya ke unit yang `isAvailable`, supaya navigasi "Selanjutnya" tidak pernah mengarah ke lesson yang belum ada kontennya.
- Badge "Master Go" di `progress.ts` tidak lagi bisa ke-unlock prematur sebelum semua unit benar-benar selesai.
- Beberapa file `lessons-en` sempat punya atribut JSX dengan backslash-escaped quote tidak valid (`\'` di dalam atribut berkutip tunggal) dan artefak baris `</content>` nyasar di akhir file (bocoran dari proses penulisan otomatis) — keduanya bikin build MDX gagal, sudah diperbaiki dan build diverifikasi hijau kembali.
- `npm audit`: upgrade `@vercel/og` 0.11.1 → 1.0.1 (patch CVE `sharp`/libvips), lalu setelah ketahuan `/api/og-image` selalu 500 di Vercel production (WASM bundling issue, endpoint sebenarnya dead code — `og:image` selalu pakai `og-default.png` statis) — file dan dependency-nya dihapus sepenuhnya. Sisa 3 finding `path-to-regexp`/`@vercel/routing-utils` dibiarkan (build-time only, belum ada fix non-breaking dari upstream Astro).
- **Vercel production build sempat gagal** ("no longer installed by default now that Sätteri is the default Markdown processor") karena `@astrojs/markdown-remark` cuma ke-resolve transitif (bukan top-level) setelah dependency tree berubah dari fix `@vercel/og` di atas — dipasang sebagai dependency langsung untuk memastikan resolusi deterministik di semua environment.
