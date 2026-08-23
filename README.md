<div align="center">

  <img src="public/favicon.svg" width="64" height="64" alt="Belajar Golang Logo" />

  <h1>Belajar Golang</h1>

  <p>Platform pembelajaran Go (Golang) gratis, interaktif, dan bilingual untuk siswa SMP & SMA Indonesia.</p>

  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
  [![Version](https://img.shields.io/badge/version-v0.1.0--beta.1-orange)](./CHANGELOG.md)
  [![Astro](https://img.shields.io/badge/Astro-v7-FF5D01?logo=astro&logoColor=white)](https://astro.build)
  [![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## Tentang Project

**Belajar Golang** adalah anggota terbaru keluarga situs [Belajar C++](https://github.com/zedfar/belajar-cpp), [Belajar Python](https://github.com/zedfar/belajar-python), dan [Belajar SQL](https://github.com/zedfar/belajar-sql) — mengajarkan **Go (Golang)** dari nol dalam Bahasa Indonesia, langsung bisa dicoba di browser tanpa install apapun.

Kurikulumnya tidak sekadar menyalin urutan bahasa lain: dua unit terakhir (**Concurrency** dan **Practical Go**) dirancang khusus untuk fitur khas Go — goroutine, channel, dan error handling ala Go — yang tidak punya padanan di keluarga situs C++/Python/SQL.

**Ditujukan untuk:**
- Siswa SMP & SMA yang belajar Go untuk pertama kali
- Siapapun yang ingin memahami dasar backend/cloud programming modern (Go dipakai di Docker, Kubernetes, dan banyak infrastruktur cloud)
- Siapapun yang ingin belajar Go dalam Bahasa Indonesia

---

## Fitur

- **Interaktif** — Editor kode langsung di browser (CodeMirror + `@codemirror/lang-go`), jalankan Go tanpa install compiler
- **Exercise per lesson** — Setiap lesson punya latihan interaktif (fill-blank, multiple-choice, code-output) dengan hint dan penjelasan
- **Bilingual** — Konten tersedia dalam Bahasa Indonesia dan English
- **Progresif** — Kurikulum 9 unit dari pemula hingga concurrency, 1 proyek mini per unit
- **Gratis** — Selamanya, tanpa akun, tanpa iklan
- **Progress tracking** — Pantau kemajuan belajar, streak harian, dan badge pencapaian secara lokal
- **Glosarium** — Kamus istilah Go bilingual dengan definisi, contoh kode, dan tautan antar istilah
- **Aksesibel** — Skip link, ARIA roles, keyboard navigable

---

## Kurikulum

| Unit | Topik | Lessons | Status |
|------|-------|:-------:|--------|
| 0 | Persiapan | 3 | ✅ Tersedia |
| 1 | Dasar-Dasar Go | 9 | ✅ Tersedia |
| 2 | Percabangan | 4 | 🔜 Segera |
| 3 | Perulangan | 5 | 🔜 Segera |
| 4 | Fungsi | 7 | 🔜 Segera |
| 5 | Struktur Data (Slice, Map) | 5 | 🔜 Segera |
| 6 | Struct & Interface | 7 | 🔜 Segera |
| 7 | Concurrency (Goroutine & Channel) | 5 | 🔜 Segera |
| 8 | Practical Go (Module, Testing, JSON) | 4 | 🔜 Segera |

Unit 7 (Concurrency) dan Unit 8 (Practical Go) tidak ada di kurikulum keluarga situs C++/Python/SQL — ditambahkan khusus karena goroutine, channel, dan *error-as-value* adalah identitas inti Go.

---

## Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Framework | [Astro v7](https://astro.build) + React islands |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Code Editor | CodeMirror 6 (`@codemirror/lang-go`) |
| Syntax Highlight | Shiki (one-dark-pro theme) |
| MDX Directives | remark-directive |
| Go Execution | [Judge0 API](https://judge0.com) (server-side proxy, `language_id: 60`) |
| Unit Testing | Vitest + jsdom |
| E2E Testing | Playwright |
| Deployment | Vercel |

---

## Memulai Development

### Prerequisites

- Node.js 22+
- Judge0 API key ([RapidAPI](https://rapidapi.com/judge0-official/api/judge0-ce) atau self-hosted) — opsional, public instance tersedia tanpa key

### Instalasi

```bash
# Clone repository
git clone https://github.com/zedfar/belajar-golang.git
cd belajar-golang

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env jika memakai Judge0 API key sendiri

# Jalankan development server
npm run dev
```

Buka **http://localhost:4321** di browser.

### Environment Variables

| Variable | Keterangan | Contoh |
|----------|------------|--------|
| `JUDGE0_API_URL` | Judge0 endpoint | `https://ce.judge0.com` |
| `JUDGE0_API_KEY` | API key / auth token (opsional untuk public instance) | `your-key-here` |
| `PUBLIC_SITE_URL` | URL production | `https://belajar-golang.varnimyr.my.id` |

### Scripts

```bash
npm run dev        # Development server (localhost:4321)
npm run build      # Production build
npm run preview    # Preview production build
npm run typecheck  # TypeScript type checking
npm test           # Unit tests (vitest)
npm run test:e2e   # E2E tests (playwright) — butuh dev server aktif
```

---

## Struktur Project

```
belajar-golang/
├── public/
│   ├── images/              # SVG diagrams (hero code editor, dst.)
│   ├── robots.txt           # SEO — allow all, referensi sitemap
│   └── og-default.svg       # Default Open Graph image
├── src/
│   ├── __tests__/
│   │   ├── lib/             # Unit tests — progress.test.ts, i18n.test.ts
│   │   └── e2e/             # E2E smoke tests — smoke.test.ts (Playwright)
│   ├── components/
│   │   ├── ui/              # Button, Card, Tabs
│   │   ├── layout/          # Header, Sidebar, Footer, MobileNav
│   │   ├── learn/           # CodePlayground, CodeBlock, Exercise, QuizCard, InfoBox, ErrorBoundary
│   │   └── common/          # ThemeToggle, LanguageToggle, TableOfContents
│   ├── content/
│   │   ├── lessons-id/      # Lesson Bahasa Indonesia (MDX, unit-0 & unit-1 tersedia)
│   │   └── lessons-en/      # Lesson English (MDX, stub — terjemahan menyusul)
│   ├── data/
│   │   └── glossary.ts      # Istilah Go bilingual untuk halaman Glosarium
│   ├── layouts/             # BaseLayout, PageLayout, LessonLayout
│   ├── lib/                 # i18n, progress, code-runner, curriculum
│   ├── pages/                # File-based routing Astro
│   │   └── [lang]/          # /id/* dan /en/* — curriculum, glossary, lesson, playground, progress
│   ├── plugins/              # Custom remark plugins (infobox directives)
│   ├── styles/                # global.css
│   └── types/                # TypeScript type definitions
├── vitest.config.ts          # Konfigurasi Vitest (jsdom + path alias)
├── playwright.config.ts      # Konfigurasi Playwright E2E
├── CHANGELOG.md               # Riwayat perubahan
└── tailwind.config.ts         # Tailwind design tokens
```

---

## Berkontribusi

Kontribusi sangat welcome! Beberapa cara untuk berkontribusi:

- 🐛 **Laporkan bug** — [Buka issue](https://github.com/zedfar/belajar-golang/issues)
- ✍️ **Tulis lesson** — Tambah konten unit-2 s.d. unit-8 di `src/content/lessons-id/` (metadata sudah terdaftar di `src/lib/curriculum.ts`, tandai `isAvailable: true` setelah kontennya lengkap)
- 🌐 **Terjemahan** — Bantu terjemahkan lesson ke English di `src/content/lessons-en/`
- 💡 **Saran fitur** — Diskusikan di [Issues](https://github.com/zedfar/belajar-golang/issues)

### Menulis Lesson Baru

Lesson ditulis dalam format MDX di `src/content/lessons-id/unit-X/`, dengan pola tetap: hook pembuka → snippet kode + output → bedah baris → callout `:::note`/`:::tip`/`:::warning` → `## Kesalahan Umum` → `## Latihan` (2-3 `<Exercise>`) → `## Ringkasan` (tabel) → kalimat penghubung ke lesson berikutnya.

```markdown
---
title: "Judul Lesson"
unit: 2
lesson: 1
description: "Deskripsi singkat"
objectives:
  - "Tujuan pembelajaran 1"
estimatedTime: 30
prerequisites: ["unit-1/09-project-kalkulator"]
difficulty: "beginner"
tags: ["tag1", "tag2"]
---

# Judul Lesson

Konten lesson...

:::tip
Gunakan directive ini untuk callout penting.
:::
```

> ⚠️ Operator `<`, `>`, `<=`, `>=` di teks prosa (bukan di code block) harus dibungkus backtick: `` `<=` ``

Setiap lesson sebaiknya menyertakan minimal 2 **Exercise interaktif** di bagian akhir:

```mdx
import { Exercise } from '@/components/learn/Exercise'

<Exercise client:load
  id="u2l1-ex1"
  title="Judul Exercise"
  description="Pertanyaan atau instruksi"
  type="multiple-choice"
  options={["Opsi A", "Opsi B", "Opsi C", "Opsi D"]}
  correctIndex={0}
  hints={["Petunjuk 1", "Petunjuk 2"]}
  explanation="Penjelasan jawaban yang benar"
  lang="id"
/>
```

Tipe exercise yang tersedia: `multiple-choice`, `fill-blank`, `code-output`, `free-code`.

---

## Deployment

Project ini ditujukan untuk deploy ke **belajar-golang.varnimyr.my.id** via Vercel.

```bash
# Build production
npm run build

# Preview sebelum deploy
npm run preview
```

Set environment variables di **Vercel Dashboard → Settings → Environment Variables**.

---

## Lisensi

Dirilis di bawah [MIT License](./LICENSE). Bebas digunakan, dimodifikasi, dan didistribusikan.

---

<div align="center">
  <sub>Dibuat dengan ❤️ untuk pelajar Indonesia</sub>
</div>
