export interface GlossaryTerm {
  term: string
  termEn?: string       // English name if different
  category: 'dasar' | 'tipe-data' | 'kontrol' | 'fungsi' | 'struct-koleksi' | 'concurrency' | 'error-handling' | 'io' | 'kompilasi'
  definition: {
    id: string
    en: string
  }
  example?: string      // Short code snippet
  seeAlso?: string[]    // Other term keys
}

export const GLOSSARY: GlossaryTerm[] = [
  // ── COMPILER & RUNTIME ────────────────────────────────────
  {
    term: 'Compiler',
    category: 'kompilasi',
    definition: {
      id: 'Program yang menerjemahkan kode Go menjadi file executable biner sebelum dijalankan — beda dari bahasa interpreted seperti Python yang dijalankan baris per baris.',
      en: 'A program that translates Go source code into a binary executable before it runs — unlike interpreted languages like Python that execute line by line.',
    },
    example: 'go build main.go',
  },
  {
    term: 'go run',
    category: 'kompilasi',
    definition: {
      id: 'Perintah yang meng-compile dan langsung menjalankan program Go dalam satu langkah, tanpa meninggalkan file biner permanen. Praktis untuk development.',
      en: 'A command that compiles and immediately runs a Go program in one step, without leaving a permanent binary file. Handy for development.',
    },
    example: 'go run main.go',
    seeAlso: ['Compiler', 'go build'],
  },
  {
    term: 'go build',
    category: 'kompilasi',
    definition: {
      id: 'Perintah yang meng-compile program Go menjadi file executable biner yang bisa dijalankan langsung, tanpa perlu Go terinstall di komputer target.',
      en: 'A command that compiles a Go program into a standalone binary executable that can run directly, without Go installed on the target machine.',
    },
    example: 'go build -o kalkulator main.go',
    seeAlso: ['go run'],
  },
  {
    term: 'Runtime',
    category: 'kompilasi',
    definition: {
      id: 'Saat program sedang berjalan (dieksekusi). Error yang terjadi saat program berjalan disebut runtime error — misalnya index out of range atau nil pointer dereference.',
      en: 'When the program is actively running (executing). Errors that occur while the program runs are called runtime errors — e.g. index out of range or nil pointer dereference.',
    },
  },
  {
    term: 'Statically Typed',
    category: 'kompilasi',
    definition: {
      id: 'Sifat Go dimana tipe setiap variabel sudah ditentukan dan diperiksa saat compile, bukan saat program berjalan. Ini membuat banyak bug tertangkap sebelum program dijalankan.',
      en: 'A property of Go where every variable\'s type is fixed and checked at compile time, not while the program runs. This catches many bugs before the program executes.',
    },
    seeAlso: ['Type Conversion'],
  },

  // ── DASAR ────────────────────────────────────
  {
    term: 'package main',
    category: 'dasar',
    definition: {
      id: 'Deklarasi wajib di baris pertama setiap file Go yang bisa dijalankan langsung. `main` adalah nama package khusus yang menandakan "ini program yang bisa dieksekusi", bukan library.',
      en: 'A required declaration at the top of every directly-runnable Go file. `main` is a special package name meaning "this is an executable program," not a library.',
    },
    example: 'package main',
    seeAlso: ['func main()', 'Package'],
  },
  {
    term: 'func main()',
    category: 'dasar',
    definition: {
      id: 'Fungsi pintu masuk (entry point) program Go. Setiap program executable harus punya persis satu fungsi `main()` di package `main` — di sinilah eksekusi dimulai.',
      en: 'The entry-point function of a Go program. Every executable must have exactly one `main()` function in package `main` — this is where execution begins.',
    },
    example: 'func main() {\n    fmt.Println("Halo, Go!")\n}',
    seeAlso: ['package main'],
  },
  {
    term: 'Package',
    category: 'dasar',
    definition: {
      id: 'Unit organisasi kode di Go — kumpulan file .go dalam satu folder yang saling berbagi nama package. Mirip modul di Python, tapi wajib dideklarasikan di setiap file.',
      en: 'Go\'s unit of code organization — a collection of .go files in one folder sharing the same package name. Similar to a Python module, but mandatory in every file.',
    },
    example: 'package main',
  },
  {
    term: 'Import',
    category: 'dasar',
    definition: {
      id: 'Pernyataan untuk menyertakan package lain agar fungsinya bisa dipakai. Go akan error kalau ada import yang tidak dipakai — beda dari banyak bahasa lain yang hanya memberi warning.',
      en: 'A statement that brings in another package so its functions can be used. Go raises a compile error for unused imports — unlike many languages that only warn.',
    },
    example: 'import "fmt"',
  },
  {
    term: 'Variabel',
    termEn: 'Variable',
    category: 'dasar',
    definition: {
      id: 'Tempat penyimpanan data yang diberi nama dan tipe. Go punya dua cara deklarasi: `var nama tipe = nilai` (eksplisit) atau `nama := nilai` (short declaration, tipe disimpulkan otomatis).',
      en: 'A named, typed storage location for data. Go has two declaration styles: `var name type = value` (explicit) or `name := value` (short declaration, type inferred).',
    },
    example: 'var umur int = 17\nnama := "Budi"',
    seeAlso: [':=', 'Zero Value'],
  },
  {
    term: ':=',
    category: 'dasar',
    definition: {
      id: 'Short variable declaration — cara ringkas mendeklarasikan sekaligus memberi nilai awal ke variabel, dengan tipe disimpulkan otomatis dari nilainya. Hanya bisa dipakai di dalam fungsi.',
      en: 'Short variable declaration — a concise way to declare and initialize a variable in one step, with the type inferred from the value. Only usable inside functions.',
    },
    example: 'umur := 17  // sama dengan: var umur int = 17',
    seeAlso: ['Variabel'],
  },
  {
    term: 'Zero Value',
    category: 'dasar',
    definition: {
      id: 'Nilai default yang otomatis diberikan Go ke variabel yang dideklarasikan tanpa nilai awal — 0 untuk angka, "" untuk string, false untuk bool, nil untuk pointer/slice/map. Go tidak mengenal variabel "undefined".',
      en: 'The default value Go automatically assigns to a variable declared without an initial value — 0 for numbers, "" for strings, false for bool, nil for pointers/slices/maps. Go has no concept of an "undefined" variable.',
    },
    example: 'var jumlah int  // jumlah bernilai 0',
    seeAlso: ['Variabel'],
  },
  {
    term: 'Statement',
    category: 'dasar',
    definition: {
      id: 'Satu instruksi lengkap dalam Go. Berbeda dari C++/Java, Go tidak mewajibkan titik koma di akhir baris — compiler menyisipkannya otomatis berdasarkan aturan newline.',
      en: 'One complete instruction in Go. Unlike C++/Java, Go doesn\'t require a semicolon at line end — the compiler inserts it automatically based on newline rules.',
    },
  },
  {
    term: 'Komentar',
    termEn: 'Comment',
    category: 'dasar',
    definition: {
      id: 'Teks yang diabaikan compiler, dipakai untuk menjelaskan kode. Go pakai `//` untuk komentar satu baris dan `/* ... */` untuk komentar banyak baris.',
      en: 'Text ignored by the compiler, used to explain code. Go uses `//` for single-line comments and `/* ... */` for multi-line comments.',
    },
    example: '// ini komentar satu baris',
  },

  // ── TIPE DATA ────────────────────────────────────
  {
    term: 'int',
    category: 'tipe-data',
    definition: {
      id: 'Tipe data untuk bilangan bulat (tanpa desimal). Ukurannya (32-bit atau 64-bit) tergantung platform. Ada juga varian ukuran tetap seperti int8, int32, int64.',
      en: 'Data type for whole numbers (no decimals). Its size (32-bit or 64-bit) depends on the platform. Fixed-size variants exist too, like int8, int32, int64.',
    },
    example: 'var umur int = 17',
    seeAlso: ['float64', 'Statically Typed'],
  },
  {
    term: 'float64',
    category: 'tipe-data',
    definition: {
      id: 'Tipe data untuk bilangan desimal dengan presisi 64-bit. Ini tipe angka desimal default di Go — kebanyakan tutorial memakai float64 kecuali ada alasan khusus memakai float32.',
      en: 'Data type for decimal numbers with 64-bit precision. This is Go\'s default decimal number type — most tutorials use float64 unless there\'s a specific reason to use float32.',
    },
    example: 'var tinggi float64 = 165.5',
    seeAlso: ['int'],
  },
  {
    term: 'string',
    category: 'tipe-data',
    definition: {
      id: 'Tipe data untuk teks. Di Go, string bersifat immutable (tidak bisa diubah setelah dibuat) dan secara internal adalah rangkaian byte yang meng-encode teks UTF-8.',
      en: 'Data type for text. In Go, strings are immutable (can\'t be changed after creation) and are internally a sequence of bytes encoding UTF-8 text.',
    },
    example: 'nama := "Budi"',
    seeAlso: ['rune', 'byte'],
  },
  {
    term: 'bool',
    category: 'tipe-data',
    definition: {
      id: 'Tipe data untuk nilai benar/salah: `true` atau `false`. Beda dari Python, Go tidak menganggap 0 atau string kosong sebagai "falsy" — hanya bool asli yang valid untuk kondisi.',
      en: 'Data type for true/false values: `true` or `false`. Unlike Python, Go doesn\'t treat 0 or an empty string as "falsy" — only an actual bool is valid in a condition.',
    },
    example: 'var lulus bool = true',
  },
  {
    term: 'rune',
    category: 'tipe-data',
    definition: {
      id: 'Tipe data untuk satu karakter Unicode (alias dari int32). Dipakai saat perlu mengakses karakter individual dari string, terutama string yang mengandung karakter non-ASCII.',
      en: 'Data type for a single Unicode character (an alias for int32). Used when you need to access individual characters from a string, especially strings with non-ASCII characters.',
    },
    example: "var huruf rune = 'A'",
    seeAlso: ['string', 'byte'],
  },
  {
    term: 'byte',
    category: 'tipe-data',
    definition: {
      id: 'Tipe data untuk satu byte mentah (alias dari uint8). String di Go pada dasarnya adalah slice byte — mengindeks string dengan `[]` mengembalikan byte, bukan karakter.',
      en: 'Data type for a single raw byte (an alias for uint8). Go strings are essentially byte slices — indexing a string with `[]` returns a byte, not a character.',
    },
    example: 'var b byte = str[0]',
    seeAlso: ['string', 'rune'],
  },
  {
    term: 'Konstanta',
    termEn: 'Constant',
    category: 'tipe-data',
    definition: {
      id: 'Nilai yang ditentukan sekali dan tidak bisa diubah, dideklarasikan dengan keyword `const`. Berbeda dari Python yang tidak punya const asli, Go menegakkannya di level compiler.',
      en: 'A value set once and never changed, declared with the `const` keyword. Unlike Python which has no true const, Go enforces this at the compiler level.',
    },
    example: 'const Pi = 3.14159',
  },
  {
    term: 'iota',
    category: 'tipe-data',
    definition: {
      id: 'Identifier khusus Go yang otomatis bertambah 1 di setiap baris dalam blok `const` — dipakai untuk membuat urutan konstanta bernomor otomatis, seperti enum di bahasa lain.',
      en: 'A special Go identifier that auto-increments by 1 on each line within a `const` block — used to create auto-numbered constant sequences, like enums in other languages.',
    },
    example: 'const (\n    Senin = iota  // 0\n    Selasa        // 1\n    Rabu          // 2\n)',
    seeAlso: ['Konstanta'],
  },
  {
    term: 'Type Conversion',
    category: 'tipe-data',
    definition: {
      id: 'Mengubah nilai dari satu tipe ke tipe lain secara eksplisit, misalnya `int` ke `float64`. Go tidak melakukan konversi implisit sama sekali — bahkan int dan float64 tidak bisa dioperasikan langsung.',
      en: 'Explicitly converting a value from one type to another, e.g. `int` to `float64`. Go performs zero implicit conversion — you can\'t even operate on an int and a float64 directly.',
    },
    example: 'var f float64 = float64(umur)',
    seeAlso: ['Statically Typed'],
  },

  // ── KONTROL ALUR ────────────────────────────────────
  {
    term: 'if-else',
    category: 'kontrol',
    definition: {
      id: 'Struktur percabangan kondisi. Sintaks Go tidak memakai tanda kurung di sekitar kondisi, tapi kurung kurawal `{}` wajib — bahkan untuk satu baris statement.',
      en: 'Conditional branching structure. Go\'s syntax skips parentheses around the condition, but curly braces `{}` are mandatory — even for a single-statement body.',
    },
    example: 'if nilai >= 90 {\n    grade = "A"\n} else {\n    grade = "B"\n}',
  },
  {
    term: 'switch',
    category: 'kontrol',
    definition: {
      id: 'Percabangan multi-kondisi yang lebih ringkas dari deretan if-else. Beda penting dari C++/Java: setiap case di Go otomatis "break" — tidak ada fallthrough kecuali ditulis eksplisit dengan keyword `fallthrough`.',
      en: 'Multi-condition branching, more concise than a chain of if-else. Key difference from C++/Java: every case in Go breaks automatically — no fallthrough unless written explicitly with the `fallthrough` keyword.',
    },
    example: 'switch grade {\ncase "A":\n    fmt.Println("Istimewa")\ndefault:\n    fmt.Println("Lainnya")\n}',
  },
  {
    term: 'for',
    category: 'kontrol',
    definition: {
      id: 'Satu-satunya keyword perulangan di Go — tidak ada while atau do-while terpisah. Bentuknya fleksibel: bisa dengan tiga klausa (init;cond;post), hanya kondisi (seperti while), atau tanpa apapun (infinite loop).',
      en: 'Go\'s only looping keyword — there\'s no separate while or do-while. It\'s flexible: it can take three clauses (init;cond;post), just a condition (like while), or nothing at all (infinite loop).',
    },
    example: 'for i := 0; i < 5; i++ {\n    fmt.Println(i)\n}',
  },
  {
    term: 'range',
    category: 'kontrol',
    definition: {
      id: 'Klausa `for` khusus untuk iterasi atas slice, array, map, string, atau channel. Mengembalikan index+nilai (untuk slice/array) atau key+value (untuk map) di setiap iterasi.',
      en: 'A special `for` clause for iterating over a slice, array, map, string, or channel. Returns index+value (for slice/array) or key+value (for map) on each iteration.',
    },
    example: 'for i, v := range nilai {\n    fmt.Println(i, v)\n}',
    seeAlso: ['for'],
  },
  {
    term: 'break & continue',
    category: 'kontrol',
    definition: {
      id: '`break` menghentikan loop sepenuhnya, `continue` melompat ke iterasi berikutnya. Keduanya bisa dipasangkan dengan label untuk mengontrol loop bersarang dari level luar.',
      en: '`break` stops a loop entirely, `continue` skips to the next iteration. Both can be paired with a label to control a nested loop from an outer level.',
    },
    example: 'if n == 5 {\n    break\n}',
  },

  // ── FUNGSI ────────────────────────────────────
  {
    term: 'Fungsi',
    termEn: 'Function',
    category: 'fungsi',
    definition: {
      id: 'Blok kode bernama, dideklarasikan dengan keyword `func`, yang bisa dipanggil berkali-kali. Tipe setiap parameter dan return value harus dideklarasikan eksplisit.',
      en: 'A named block of code, declared with the `func` keyword, that can be called repeatedly. Every parameter and return type must be declared explicitly.',
    },
    example: 'func tambah(a int, b int) int {\n    return a + b\n}',
  },
  {
    term: 'Multiple Return Values',
    category: 'fungsi',
    definition: {
      id: 'Kemampuan khas Go untuk mengembalikan lebih dari satu nilai dari satu fungsi. Pola paling umum: mengembalikan (hasil, error) — dipakai di hampir semua fungsi standard library Go.',
      en: 'A Go-signature feature: returning more than one value from a single function. The most common pattern is (result, error) — used throughout Go\'s standard library.',
    },
    example: 'func bagi(a, b int) (int, error) {\n    if b == 0 {\n        return 0, errors.New("dibagi nol")\n    }\n    return a / b, nil\n}',
    seeAlso: ['error'],
  },
  {
    term: 'Variadic Function',
    category: 'fungsi',
    definition: {
      id: 'Fungsi yang bisa menerima jumlah argumen yang berubah-ubah, ditandai dengan `...` sebelum tipe parameter terakhir. `fmt.Println` sendiri adalah fungsi variadic.',
      en: 'A function that accepts a variable number of arguments, marked with `...` before the last parameter\'s type. `fmt.Println` itself is a variadic function.',
    },
    example: 'func jumlahkan(angka ...int) int {\n    total := 0\n    for _, n := range angka {\n        total += n\n    }\n    return total\n}',
  },
  {
    term: 'Defer',
    category: 'fungsi',
    definition: {
      id: 'Keyword yang menunda eksekusi sebuah pemanggilan fungsi sampai fungsi yang membungkusnya selesai (return). Umum dipakai untuk cleanup, seperti menutup file atau koneksi.',
      en: 'A keyword that delays a function call\'s execution until the enclosing function is about to return. Commonly used for cleanup, like closing a file or connection.',
    },
    example: 'file, _ := os.Open("data.txt")\ndefer file.Close()',
  },
  {
    term: 'Closure',
    category: 'fungsi',
    definition: {
      id: 'Fungsi anonim yang "mengingat" dan bisa mengakses variabel dari scope tempat ia didefinisikan, bahkan setelah scope tersebut selesai. Berguna untuk membuat counter atau generator kustom.',
      en: 'An anonymous function that "remembers" and can access variables from the scope it was defined in, even after that scope has ended. Useful for building counters or custom generators.',
    },
    example: 'func counter() func() int {\n    n := 0\n    return func() int {\n        n++\n        return n\n    }\n}',
  },
  {
    term: 'Parameter',
    category: 'fungsi',
    definition: {
      id: 'Variabel yang dideklarasikan di dalam tanda kurung fungsi, lengkap dengan tipenya. Go bisa mempersingkat penulisan jika beberapa parameter berurutan bertipe sama.',
      en: 'A variable declared inside a function\'s parentheses, complete with its type. Go lets you shorten the syntax when consecutive parameters share the same type.',
    },
    example: 'func luasPersegi(panjang, lebar float64) float64 {\n    return panjang * lebar\n}',
  },

  // ── STRUCT & KOLEKSI ────────────────────────────────────
  {
    term: 'Array',
    category: 'struct-koleksi',
    definition: {
      id: 'Koleksi data bertipe sama dengan ukuran tetap yang ditentukan saat deklarasi. Karena ukurannya tidak fleksibel, array jarang dipakai langsung — slice jauh lebih umum.',
      en: 'A fixed-size collection of same-typed data, with the size set at declaration. Because the size is inflexible, arrays are rarely used directly — slices are far more common.',
    },
    example: 'var nilai [5]int',
    seeAlso: ['Slice'],
  },
  {
    term: 'Slice',
    category: 'struct-koleksi',
    definition: {
      id: 'Struktur data koleksi yang fleksibel dan bisa tumbuh, dibangun di atas array. Punya length (jumlah elemen terisi) dan capacity (kapasitas array di baliknya). Dipakai jauh lebih sering daripada array biasa.',
      en: 'A flexible, growable collection structure built on top of an array. Has a length (filled elements) and a capacity (the underlying array\'s size). Used far more often than a plain array.',
    },
    example: 'nilai := []int{85, 92, 78}\nnilai = append(nilai, 95)',
    seeAlso: ['Array'],
  },
  {
    term: 'Map',
    category: 'struct-koleksi',
    definition: {
      id: 'Struktur data key-value, mirip dictionary di Python. Urutan iterasi map di Go tidak dijamin — beda dari dict Python 3.7+ yang mempertahankan urutan insert.',
      en: 'A key-value data structure, similar to a Python dictionary. Go map iteration order is not guaranteed — unlike Python 3.7+ dicts, which preserve insertion order.',
    },
    example: 'siswa := map[string]int{"Budi": 88, "Ani": 92}',
  },
  {
    term: 'Struct',
    category: 'struct-koleksi',
    definition: {
      id: 'Tipe data kustom yang mengelompokkan beberapa field bernama menjadi satu unit. Go tidak punya class — struct plus method adalah cara Go merepresentasikan objek.',
      en: 'A custom data type that groups several named fields into one unit. Go has no class — struct plus methods is how Go represents objects.',
    },
    example: 'type Siswa struct {\n    Nama  string\n    Umur  int\n}',
    seeAlso: ['Method & Receiver'],
  },
  {
    term: 'Method & Receiver',
    category: 'struct-koleksi',
    definition: {
      id: 'Method adalah fungsi yang "menempel" pada sebuah tipe lewat receiver — parameter khusus sebelum nama fungsi. Receiver bisa berupa value (salinan) atau pointer (mengubah data asli).',
      en: 'A method is a function "attached" to a type via a receiver — a special parameter before the function name. The receiver can be a value (a copy) or a pointer (mutates the original data).',
    },
    example: 'func (s Siswa) Sapa() string {\n    return "Halo, " + s.Nama\n}',
    seeAlso: ['Struct'],
  },
  {
    term: 'Interface',
    category: 'struct-koleksi',
    definition: {
      id: 'Tipe abstrak yang mendefinisikan sekumpulan method tanpa implementasi. Sebuah tipe otomatis "memenuhi" interface cukup dengan mengimplementasikan semua method-nya — tidak perlu deklarasi eksplisit seperti `implements` di Java.',
      en: 'An abstract type defining a set of methods with no implementation. A type automatically "satisfies" an interface just by implementing all its methods — no explicit `implements` declaration like in Java.',
    },
    example: 'type Bentuk interface {\n    Luas() float64\n}',
  },
  {
    term: 'Struct Embedding',
    category: 'struct-koleksi',
    definition: {
      id: 'Menyisipkan satu struct ke dalam struct lain tanpa nama field eksplisit, sehingga field dan method struct dalam bisa diakses langsung dari struct luar. Ini cara Go menggantikan pewarisan (inheritance).',
      en: 'Embedding one struct inside another without an explicit field name, so the inner struct\'s fields and methods can be accessed directly from the outer struct. This is Go\'s replacement for inheritance.',
    },
    example: 'type Pegawai struct {\n    Siswa       // embedded\n    Gaji  float64\n}',
  },

  // ── ERROR HANDLING ────────────────────────────────────
  {
    term: 'error',
    category: 'error-handling',
    definition: {
      id: 'Tipe interface bawaan Go untuk merepresentasikan kegagalan sebagai nilai biasa, bukan exception. Konvensinya: fungsi yang bisa gagal mengembalikan error sebagai nilai return terakhir, dan pemanggil wajib memeriksanya.',
      en: 'Go\'s built-in interface type for representing failure as an ordinary value, not an exception. Convention: a function that can fail returns error as its last return value, and the caller must check it.',
    },
    example: 'hasil, err := bagi(10, 0)\nif err != nil {\n    fmt.Println("Error:", err)\n}',
    seeAlso: ['Multiple Return Values'],
  },
  {
    term: 'panic & recover',
    category: 'error-handling',
    definition: {
      id: '`panic` menghentikan alur normal program secara paksa (untuk error fatal yang tak terduga), `recover` menangkap panic itu agar program tidak crash total. Dipakai jauh lebih jarang daripada error biasa — bukan pengganti try/except.',
      en: '`panic` forcibly halts a program\'s normal flow (for unexpected, fatal errors); `recover` catches that panic so the program doesn\'t crash entirely. Used far less often than ordinary errors — not a try/except replacement.',
    },
    example: 'defer func() {\n    if r := recover(); r != nil {\n        fmt.Println("Ditangani:", r)\n    }\n}()',
  },

  // ── CONCURRENCY ────────────────────────────────────
  {
    term: 'Goroutine',
    category: 'concurrency',
    definition: {
      id: 'Thread ringan yang dikelola Go runtime, dijalankan dengan menambahkan keyword `go` di depan pemanggilan fungsi. Bisa menjalankan ribuan goroutine sekaligus karena overhead-nya sangat kecil dibanding thread OS biasa.',
      en: 'A lightweight thread managed by the Go runtime, launched by prefixing a function call with the `go` keyword. Thousands can run at once because the overhead is far smaller than a regular OS thread.',
    },
    example: 'go prosesData(item)',
  },
  {
    term: 'Channel',
    category: 'concurrency',
    definition: {
      id: 'Jalur komunikasi antar goroutine yang aman dari race condition. Satu goroutine mengirim nilai ke channel, goroutine lain menerimanya — ini pengganti Go untuk shared-memory locking manual.',
      en: 'A communication pipe between goroutines that\'s safe from race conditions. One goroutine sends a value into a channel, another receives it — Go\'s alternative to manual shared-memory locking.',
    },
    example: 'ch := make(chan int)\ngo func() { ch <- 42 }()\nhasil := <-ch',
    seeAlso: ['Goroutine'],
  },
  {
    term: 'sync.WaitGroup',
    category: 'concurrency',
    definition: {
      id: 'Struct dari package `sync` untuk menunggu sekumpulan goroutine selesai sebelum program melanjutkan. Dipakai lewat tiga method: `Add`, `Done`, dan `Wait`.',
      en: 'A struct from the `sync` package used to wait for a group of goroutines to finish before the program continues. Used via three methods: `Add`, `Done`, and `Wait`.',
    },
    example: 'var wg sync.WaitGroup\nwg.Add(1)\ngo func() {\n    defer wg.Done()\n    // kerja...\n}()\nwg.Wait()',
    seeAlso: ['Goroutine'],
  },

  // ── INPUT/OUTPUT ────────────────────────────────────
  {
    term: 'fmt.Println',
    category: 'io',
    definition: {
      id: 'Fungsi dari package `fmt` untuk mencetak nilai ke layar (stdout), otomatis memisahkan tiap argumen dengan spasi dan menambahkan baris baru di akhir.',
      en: 'A function from the `fmt` package that prints values to the screen (stdout), automatically separating each argument with a space and adding a newline at the end.',
    },
    example: 'fmt.Println("Halo,", nama)',
  },
  {
    term: 'fmt.Printf',
    category: 'io',
    definition: {
      id: 'Fungsi format-string dari package `fmt`, mirip printf di C. Memakai verb seperti `%d` (integer), `%s` (string), `%.2f` (desimal 2 angka) untuk menyisipkan nilai ke dalam teks.',
      en: 'A format-string function from the `fmt` package, similar to C\'s printf. Uses verbs like `%d` (integer), `%s` (string), `%.2f` (2-decimal float) to embed values into text.',
    },
    example: 'fmt.Printf("Nama: %s, Umur: %d\\n", nama, umur)',
    seeAlso: ['fmt.Println'],
  },
  {
    term: 'bufio.Scanner',
    category: 'io',
    definition: {
      id: 'Alat dari package `bufio` untuk membaca input baris per baris, paling umum dipakai untuk membaca input keyboard dari `os.Stdin` di Go.',
      en: 'A tool from the `bufio` package for reading input line by line, most commonly used to read keyboard input from `os.Stdin` in Go.',
    },
    example: 'scanner := bufio.NewScanner(os.Stdin)\nscanner.Scan()\nnama := scanner.Text()',
  },
]

export type GlossaryCategory = GlossaryTerm['category']

export const CATEGORY_LABELS: Record<GlossaryCategory, { id: string; en: string }> = {
  'dasar': { id: 'Dasar', en: 'Basics' },
  'tipe-data': { id: 'Tipe Data', en: 'Data Types' },
  'kontrol': { id: 'Kontrol Alur', en: 'Flow Control' },
  'fungsi': { id: 'Fungsi', en: 'Functions' },
  'struct-koleksi': { id: 'Struct & Koleksi', en: 'Structs & Collections' },
  'concurrency': { id: 'Concurrency', en: 'Concurrency' },
  'error-handling': { id: 'Error Handling', en: 'Error Handling' },
  'io': { id: 'Input/Output', en: 'Input/Output' },
  'kompilasi': { id: 'Compiler & Runtime', en: 'Compiler & Runtime' },
}

export const CATEGORY_ORDER: GlossaryCategory[] = [
  'kompilasi', 'dasar', 'tipe-data', 'kontrol', 'fungsi', 'struct-koleksi', 'error-handling', 'concurrency', 'io',
]
