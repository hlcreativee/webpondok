export interface NewsArticle {
    id: string;
    title: string;
    summary: string;
    content: string[];
    category: string;
    author: string;
    date: string;
    svgType:
    | "announcement"
    | "trophy"
    | "tahfidz"
    | "academic"
    | "sports"
    | "graduation";
}

export const newsArticles: NewsArticle[] = [
    {
        id: "1",
        title: "Penerimaan Santri Baru Tahun Ajaran 2026/2027",
        summary: "Pendaftaran santri baru resmi dibuka.",
        category: "Pengumuman",
        author: "Admin",
        date: "16 Juli 2026",
        svgType: "announcement",
        content: [
            "Pondok Modern Darul Ihsan membuka pendaftaran santri baru tahun ajaran 2026/2027.",
            "Pendaftaran dapat dilakukan secara online maupun langsung ke sekretariat pondok.",
            "Informasi lengkap tersedia pada halaman pendaftaran."
        ]
    },
    {
        id: "2",
        title: "Wisuda Tahfidz Angkatan Ke-10",
        summary: "Sebanyak 40 santri mengikuti wisuda tahfidz.",
        category: "Berita",
        author: "Admin",
        date: "10 Juli 2026",
        svgType: "graduation",
        content: [
            "Wisuda tahfidz dilaksanakan di aula utama pondok.",
            "Acara dihadiri wali santri dan masyarakat.",
            "Para santri berhasil menyelesaikan target hafalan."
        ]
    }
];

export interface ProgramItem {
    id: number;
    title: string;
    desc: string;
    iconName: string;
}

export const programsData: ProgramItem[] = [
    {
        id: 1,
        title: "Tahfidz Al-Qur'an",
        desc: "Program menghafal Al-Qur'an.",
        iconName: "book",
    },
    {
        id: 2,
        title: "Pendidikan Formal",
        desc: "Kurikulum nasional dan kepesantrenan.",
        iconName: "cap",
    },
    {
        id: 3,
        title: "Bahasa Arab",
        desc: "Pembiasaan komunikasi Bahasa Arab.",
        iconName: "lang-ar",
    },
    {
        id: 4,
        title: "Teknologi Informasi",
        desc: "Pembelajaran komputer dan teknologi.",
        iconName: "cpu",
    },
];
export interface CurriculumItem {
    id: number;
    title: string;
    desc: string;
    focus: string[];
}

export const curriculumData: CurriculumItem[] = [
    {
        id: 1,
        title: "Tahap Dasar",
        desc: "Membangun pondasi akidah, ibadah, akhlak, serta kemampuan membaca Al-Qur'an dengan benar sebagai bekal awal santri.",
        focus: [
            "Tahsin Al-Qur'an",
            "Aqidah",
            "Fiqih Dasar",
            "Adab Islami",
        ],
    },
    {
        id: 2,
        title: "Tahap Menengah",
        desc: "Mengembangkan kemampuan akademik, bahasa, dan hafalan Al-Qur'an melalui pembelajaran terpadu.",
        focus: [
            "Tahfidz",
            "Bahasa Arab",
            "Bahasa Inggris",
            "Matematika",
        ],
    },
    {
        id: 3,
        title: "Tahap Lanjutan",
        desc: "Memperdalam ilmu syariah, kepemimpinan, serta keterampilan hidup untuk mempersiapkan santri menjadi pribadi mandiri.",
        focus: [
            "Tafsir",
            "Hadits",
            "Kepemimpinan",
            "Public Speaking",
        ],
    },
    {
        id: 4,
        title: "Tahap Pengabdian",
        desc: "Membentuk jiwa pengabdian kepada masyarakat melalui praktik dakwah, pendidikan, dan pelayanan sosial.",
        focus: [
            "Dakwah",
            "Pengabdian",
            "Kewirausahaan",
            "Teknologi",
        ],
    },
];
export interface ExtraItem {
    id: number;
    title: string;
    desc: string;
    iconName: string;
}

export const extraData: ExtraItem[] = [
    {
        id: 1,
        title: "Pramuka",
        desc: "Melatih kemandirian, kepemimpinan, kedisiplinan, dan kerja sama melalui kegiatan kepramukaan.",
        iconName: "users",
    },
    {
        id: 2,
        title: "Muhadharah",
        desc: "Melatih kemampuan berbicara di depan umum dan berdakwah menggunakan bahasa yang baik.",
        iconName: "volume",
    },
    {
        id: 3,
        title: "Kajian Kitab",
        desc: "Memperdalam pemahaman kitab kuning dan ilmu-ilmu keislaman bersama para ustadz.",
        iconName: "book",
    },
    {
        id: 4,
        title: "Olimpiade Sains",
        desc: "Pembinaan santri untuk mengikuti kompetisi Matematika, IPA, dan bidang akademik lainnya.",
        iconName: "award",
    },
    {
        id: 5,
        title: "Tahfidz Club",
        desc: "Program tambahan bagi santri untuk mempercepat hafalan Al-Qur'an dan murojaah.",
        iconName: "heart",
    },
    {
        id: 6,
        title: "English Club",
        desc: "Melatih kemampuan komunikasi Bahasa Inggris melalui diskusi dan praktik sehari-hari.",
        iconName: "msg",
    },
    {
        id: 7,
        title: "Komputer & IT",
        desc: "Belajar dasar komputer, internet, desain, dan pemrograman sebagai bekal di era digital.",
        iconName: "laptop",
    },
    {
        id: 8,
        title: "Kaligrafi",
        desc: "Mengembangkan kreativitas santri melalui seni menulis kaligrafi Arab.",
        iconName: "palette",
    },
    {
        id: 9,
        title: "Paskibra",
        desc: "Melatih kedisiplinan, tanggung jawab, dan jiwa nasionalisme melalui latihan baris-berbaris.",
        iconName: "shield",
    },
    {
        id: 10,
        title: "Olahraga",
        desc: "Berbagai kegiatan olahraga seperti futsal, voli, badminton, dan atletik untuk menjaga kebugaran.",
        iconName: "activity",
    },
];

export interface GalleryItem {
    id: number;
    title: string;
    category: string;
    svgType:
    | "classroom"
    | "dormitory"
    | "speech"
    | "quran"
    | "leadership"
    | "sports"
    | "graduation"
    | "tahfidz";
}

export const galleryItems: GalleryItem[] = [
    {
        id: 1,
        title: "Kegiatan Belajar di Kelas",
        category: "belajar",
        svgType: "classroom",
    },
    {
        id: 2,
        title: "Belajar Kitab Kuning",
        category: "belajar",
        svgType: "classroom",
    },
    {
        id: 3,
        title: "Kegiatan Asrama Putra",
        category: "asrama",
        svgType: "dormitory",
    },
    {
        id: 4,
        title: "Kegiatan Asrama Putri",
        category: "asrama",
        svgType: "dormitory",
    },
    {
        id: 5,
        title: "Muhadloroh Bahasa Arab",
        category: "muhadloroh",
        svgType: "speech",
    },
    {
        id: 6,
        title: "Muhadloroh Bahasa Inggris",
        category: "muhadloroh",
        svgType: "speech",
    },
    {
        id: 7,
        title: "Sorogan Al-Qur'an",
        category: "sorogan",
        svgType: "quran",
    },
    {
        id: 8,
        title: "Sorogan Kitab",
        category: "sorogan",
        svgType: "quran",
    },
    {
        id: 9,
        title: "Rapat OPMADA",
        category: "opmada",
        svgType: "leadership",
    },
    {
        id: 10,
        title: "Latihan Kepemimpinan Santri",
        category: "opmada",
        svgType: "leadership",
    },
    {
        id: 11,
        title: "Setoran Hafalan Al-Qur'an",
        category: "tahfidz",
        svgType: "tahfidz",
    },
    {
        id: 12,
        title: "Murojaah Bersama",
        category: "tahfidz",
        svgType: "tahfidz",
    },
    {
        id: 13,
        title: "Wisuda Tahfidz",
        category: "wisuda",
        svgType: "graduation",
    },
    {
        id: 14,
        title: "Pelepasan Santri Akhir",
        category: "wisuda",
        svgType: "graduation",
    },
    {
        id: 15,
        title: "Turnamen Futsal Santri",
        category: "belajar",
        svgType: "sports",
    },
    {
        id: 16,
        title: "Lomba Antar Santri",
        category: "belajar",
        svgType: "sports",
    },
];