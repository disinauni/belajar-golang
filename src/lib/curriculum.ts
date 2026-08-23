import type { Language } from '@/types/lesson'
import type { UnitMetadata } from '@/types/lesson'

export const CURRICULUM_ID: UnitMetadata[] = [
  {
    id: 0,
    slug: 'unit-0',
    title: { id: 'Persiapan', en: 'Getting Started' },
    description: {
      id: 'Kenali apa itu Go dan siapkan lingkungan belajarmu.',
      en: 'Learn what Go is and set up your learning environment.',
    },
    estimatedHours: '1-2',
    projectTitle: { id: 'Tour Playground', en: 'Playground Tour' },
    isAvailable: true,
    lessons: [
      { slug: 'unit-0/01-apa-itu-go', title: { id: 'Apa itu Go?', en: 'What is Go?' }, estimatedTime: 20, isProject: false },
      { slug: 'unit-0/02-setup-lingkungan', title: { id: 'Setup Lingkungan', en: 'Environment Setup' }, estimatedTime: 20, isProject: false },
      { slug: 'unit-0/03-tour-playground', title: { id: 'Tour Playground', en: 'Playground Tour' }, estimatedTime: 10, isProject: true },
    ],
  },
  {
    id: 1,
    slug: 'unit-1',
    title: { id: 'Dasar-Dasar', en: 'Fundamentals' },
    description: {
      id: 'Pelajari konsep dasar Go: variabel, tipe data statis, konstanta, dan input/output.',
      en: 'Learn Go fundamentals: variables, static types, constants, and I/O.',
    },
    estimatedHours: '8-10',
    projectTitle: { id: 'Kalkulator Sederhana', en: 'Simple Calculator' },
    isAvailable: true,
    lessons: [
      { slug: 'unit-1/01-hello-world', title: { id: 'Hello, World!', en: 'Hello, World!' }, estimatedTime: 25, isProject: false },
      { slug: 'unit-1/02-komentar-variabel', title: { id: 'Komentar & Variabel', en: 'Comments & Variables' }, estimatedTime: 25, isProject: false },
      { slug: 'unit-1/03-tipe-data', title: { id: 'Tipe Data', en: 'Data Types' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-1/04-konstanta-iota', title: { id: 'Konstanta & iota', en: 'Constants & iota' }, estimatedTime: 25, isProject: false },
      { slug: 'unit-1/05-input-output', title: { id: 'Input & Output', en: 'Input & Output' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-1/06-operasi-aritmatika', title: { id: 'Operasi Aritmatika', en: 'Arithmetic Operations' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-1/07-string-dasar', title: { id: 'String Dasar', en: 'Basic Strings' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-1/08-konversi-tipe', title: { id: 'Konversi Tipe Data', en: 'Type Conversion' }, estimatedTime: 20, isProject: false },
      { slug: 'unit-1/09-project-kalkulator', title: { id: 'Project: Kalkulator Sederhana', en: 'Project: Simple Calculator' }, estimatedTime: 60, isProject: true },
    ],
  },
  {
    id: 2,
    slug: 'unit-2',
    title: { id: 'Percabangan', en: 'Decision Making' },
    description: {
      id: 'Buat program yang bisa mengambil keputusan berdasarkan kondisi dengan if dan switch.',
      en: 'Create programs that make decisions based on conditions using if and switch.',
    },
    estimatedHours: '5-7',
    projectTitle: { id: 'Game Tebak Angka', en: 'Number Guessing Game' },
    isAvailable: true,
    lessons: [
      { slug: 'unit-2/01-operator-perbandingan-logika', title: { id: 'Operator Perbandingan & Logika', en: 'Comparison & Logical Operators' }, estimatedTime: 25, isProject: false },
      { slug: 'unit-2/02-if-else', title: { id: 'If-Else', en: 'If-Else' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-2/03-switch', title: { id: 'Switch', en: 'Switch' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-2/04-project-tebak-angka', title: { id: 'Project: Game Tebak Angka', en: 'Project: Number Guessing Game' }, estimatedTime: 60, isProject: true },
    ],
  },
  {
    id: 3,
    slug: 'unit-3',
    title: { id: 'Perulangan', en: 'Loops' },
    description: {
      id: 'Otomasi tugas berulang dengan for — satu-satunya konstruk loop di Go.',
      en: 'Automate repetitive tasks with for — Go\'s only loop construct.',
    },
    estimatedHours: '6-8',
    projectTitle: { id: 'Pola Bintang Generator', en: 'Star Pattern Generator' },
    isAvailable: true,
    lessons: [
      { slug: 'unit-3/01-for-loop', title: { id: 'For Loop', en: 'For Loop' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-3/02-range', title: { id: 'Range', en: 'Range' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-3/03-break-continue-label', title: { id: 'Break, Continue & Label', en: 'Break, Continue & Labels' }, estimatedTime: 25, isProject: false },
      { slug: 'unit-3/04-nested-loops', title: { id: 'Nested Loops', en: 'Nested Loops' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-3/05-project-pola-bintang', title: { id: 'Project: Pola Bintang', en: 'Project: Star Patterns' }, estimatedTime: 60, isProject: true },
    ],
  },
  {
    id: 4,
    slug: 'unit-4',
    title: { id: 'Fungsi', en: 'Functions' },
    description: {
      id: 'Pecah program menjadi fungsi reusable dengan multiple return values, variadic, dan defer.',
      en: 'Break programs into reusable functions with multiple return values, variadics, and defer.',
    },
    estimatedHours: '8-10',
    projectTitle: { id: 'Batu Gunting Kertas', en: 'Rock Paper Scissors' },
    isAvailable: true,
    lessons: [
      { slug: 'unit-4/01-apa-itu-fungsi', title: { id: 'Apa itu Fungsi?', en: 'What is a Function?' }, estimatedTime: 25, isProject: false },
      { slug: 'unit-4/02-parameter-return', title: { id: 'Parameter & Return', en: 'Parameters & Return' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-4/03-multiple-return-values', title: { id: 'Multiple Return Values', en: 'Multiple Return Values' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-4/04-variadic-functions', title: { id: 'Variadic Functions', en: 'Variadic Functions' }, estimatedTime: 25, isProject: false },
      { slug: 'unit-4/05-defer', title: { id: 'Defer', en: 'Defer' }, estimatedTime: 25, isProject: false },
      { slug: 'unit-4/06-closures', title: { id: 'Closures', en: 'Closures' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-4/07-project-batu-gunting-kertas', title: { id: 'Project: Batu Gunting Kertas', en: 'Project: Rock Paper Scissors' }, estimatedTime: 75, isProject: true },
    ],
  },
  {
    id: 5,
    slug: 'unit-5',
    title: { id: 'Struktur Data', en: 'Data Structures' },
    description: {
      id: 'Simpan dan proses kumpulan data dengan array, slice, map, dan string/rune/byte.',
      en: 'Store and process collections of data with arrays, slices, maps, and strings/runes/bytes.',
    },
    estimatedHours: '8-10',
    projectTitle: { id: 'Buku Nilai Siswa', en: 'Student Grade Book' },
    isAvailable: true,
    lessons: [
      { slug: 'unit-5/01-array', title: { id: 'Array', en: 'Arrays' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-5/02-slice', title: { id: 'Slice', en: 'Slices' }, estimatedTime: 45, isProject: false },
      { slug: 'unit-5/03-map', title: { id: 'Map', en: 'Maps' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-5/04-string-rune-byte', title: { id: 'String, Rune & Byte', en: 'String, Rune & Byte' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-5/05-project-buku-nilai', title: { id: 'Project: Buku Nilai Siswa', en: 'Project: Grade Book' }, estimatedTime: 90, isProject: true },
    ],
  },
  {
    id: 6,
    slug: 'unit-6',
    title: { id: 'Struct & Interface', en: 'Structs & Interfaces' },
    description: {
      id: 'Organisir data dengan struct dan method, lalu tangani error dengan gaya khas Go.',
      en: 'Organize data with structs and methods, then handle errors the Go way.',
    },
    estimatedHours: '9-11',
    projectTitle: { id: 'Bank Account Sederhana', en: 'Simple Bank Account' },
    isAvailable: true,
    lessons: [
      { slug: 'unit-6/01-struct', title: { id: 'Struct', en: 'Structs' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-6/02-method-receiver', title: { id: 'Method & Receiver', en: 'Methods & Receivers' }, estimatedTime: 40, isProject: false },
      { slug: 'unit-6/03-embedding', title: { id: 'Struct Embedding', en: 'Struct Embedding' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-6/04-interface', title: { id: 'Interface', en: 'Interfaces' }, estimatedTime: 40, isProject: false },
      { slug: 'unit-6/05-error-handling', title: { id: 'Error Handling', en: 'Error Handling' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-6/06-panic-recover-defer', title: { id: 'Panic, Recover & Defer', en: 'Panic, Recover & Defer' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-6/07-project-bank-account', title: { id: 'Project: Bank Account', en: 'Project: Bank Account' }, estimatedTime: 90, isProject: true },
    ],
  },
  {
    id: 7,
    slug: 'unit-7',
    title: { id: 'Concurrency', en: 'Concurrency' },
    description: {
      id: 'Jalankan banyak proses sekaligus dengan goroutine dan channel — fitur andalan Go.',
      en: 'Run many processes at once with goroutines and channels — Go\'s headline feature.',
    },
    estimatedHours: '8-10',
    projectTitle: { id: 'Worker Pool', en: 'Worker Pool' },
    isAvailable: true,
    lessons: [
      { slug: 'unit-7/01-goroutines', title: { id: 'Goroutine', en: 'Goroutines' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-7/02-channels', title: { id: 'Channel', en: 'Channels' }, estimatedTime: 40, isProject: false },
      { slug: 'unit-7/03-select-buffered-channel', title: { id: 'Select & Buffered Channel', en: 'Select & Buffered Channels' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-7/04-sync-waitgroup-mutex', title: { id: 'sync.WaitGroup & Mutex', en: 'sync.WaitGroup & Mutex' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-7/05-project-worker-pool', title: { id: 'Project: Worker Pool', en: 'Project: Worker Pool' }, estimatedTime: 90, isProject: true },
    ],
  },
  {
    id: 8,
    slug: 'unit-8',
    title: { id: 'Practical Go', en: 'Practical Go' },
    description: {
      id: 'Package, module, testing, dan JSON — bekal siap pakai untuk project Go nyata.',
      en: 'Packages, modules, testing, and JSON — the toolkit for real-world Go projects.',
    },
    estimatedHours: '8-10',
    projectTitle: { id: 'Final Project', en: 'Final Project' },
    isAvailable: true,
    lessons: [
      { slug: 'unit-8/01-package-module', title: { id: 'Package & Module', en: 'Packages & Modules' }, estimatedTime: 35, isProject: false },
      { slug: 'unit-8/02-testing', title: { id: 'Testing dengan go test', en: 'Testing with go test' }, estimatedTime: 40, isProject: false },
      { slug: 'unit-8/03-json-encoding', title: { id: 'JSON Encoding', en: 'JSON Encoding' }, estimatedTime: 30, isProject: false },
      { slug: 'unit-8/04-final-project', title: { id: 'Final Project', en: 'Final Project' }, estimatedTime: 120, isProject: true },
    ],
  },
]

export function getCurriculum(_lang: Language): UnitMetadata[] {
  return CURRICULUM_ID
}

export function getUnit(slug: string): UnitMetadata | undefined {
  return CURRICULUM_ID.find(u => u.slug === slug)
}

export function getTotalLessons(): number {
  return CURRICULUM_ID.reduce((sum, unit) => sum + unit.lessons.length, 0)
}

export function getNextLesson(currentSlug: string): { slug: string; unitSlug: string } | null {
  // Only navigate within units that actually have published content.
  const allLessons = CURRICULUM_ID.filter(u => u.isAvailable).flatMap(unit =>
    unit.lessons.map(l => ({ ...l, unitSlug: unit.slug }))
  )
  const idx = allLessons.findIndex(l => l.slug === currentSlug)
  if (idx === -1 || idx >= allLessons.length - 1) return null
  const next = allLessons[idx + 1]
  if (!next) return null
  return { slug: next.slug, unitSlug: next.unitSlug }
}

export function getPrevLesson(currentSlug: string): { slug: string; unitSlug: string } | null {
  // Only navigate within units that actually have published content.
  const allLessons = CURRICULUM_ID.filter(u => u.isAvailable).flatMap(unit =>
    unit.lessons.map(l => ({ ...l, unitSlug: unit.slug }))
  )
  const idx = allLessons.findIndex(l => l.slug === currentSlug)
  if (idx <= 0) return null
  const prev = allLessons[idx - 1]
  if (!prev) return null
  return { slug: prev.slug, unitSlug: prev.unitSlug }
}

export function getLessonUrl(lang: Language, lessonSlug: string): string {
  const parts = lessonSlug.split('/')
  if (parts.length !== 2) return `/${lang}/curriculum`
  const [unitSlug, lessonId] = parts
  return `/${lang}/learn/${unitSlug}/${lessonId}`
}
