# Changelog

Semua perubahan penting pada proyek belajar-golang dicatat di file ini. Format mengikuti [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added
- Scaffold awal platform (Astro + React + Tailwind v4), mengikuti arsitektur `belajar-python`/`belajar-sql`.
- Kurikulum 9 unit (`unit-0` s.d. `unit-8`) terdaftar di `src/lib/curriculum.ts`, termasuk dua unit khas Go (`unit-7` Concurrency, `unit-8` Practical Go) tanpa padanan di keluarga situs cpp/python/sql.
- Konten lengkap `unit-0` (Persiapan) dan `unit-1` (Dasar-Dasar).
- Eksekusi kode Go via Judge0 (`language_id: 60`) dan CodeMirror `@codemirror/lang-go`.
