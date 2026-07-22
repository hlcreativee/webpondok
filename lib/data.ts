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
        desc: "Program pembinaan hafalan Al-Qur'an disertai tahsin dan muroja'ah untuk membentuk generasi Qur'ani yang berakhlak mulia.",
        iconName: "book",
    },
    {
        id: 2,
        title: "Bahasa Arab",
        desc: "Pembiasaan penggunaan Bahasa Arab dalam kegiatan sehari-hari sebagai bekal memahami literatur Islam dan komunikasi internasional.",
        iconName: "lang-ar",
    },
    {
        id: 3,
        title: "Bahasa Inggris",
        desc: "Program pembelajaran dan praktik Bahasa Inggris guna meningkatkan kemampuan komunikasi serta wawasan global santri.",
        iconName: "lang-en",
    },
    {
        id: 4,
        title: "Multimedia",
        desc: "Membekali santri dengan keterampilan desain grafis, fotografi, videografi, dan pengelolaan media digital.",
        iconName: "cpu",
    },
    {
        id: 5,
        title: "Pengelasan",
        desc: "Program keterampilan vokasi yang memberikan pengetahuan dasar dan praktik teknik pengelasan sebagai bekal dunia kerja.",
        iconName: "flame",
    },
    {
        id: 6,
        title: "Tata Boga",
        desc: "Membina keterampilan dalam pengolahan makanan, penyajian, serta kewirausahaan di bidang kuliner.",
        iconName: "key",
    },
    {
        id: 7,
        title: "Tata Busana",
        desc: "Program keterampilan menjahit, desain busana, dan pembuatan pakaian sebagai bekal kemandirian dan wirausaha.",
        iconName: "cap",
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
        title: "Kurikulum Pondok Modern",
        desc: "Membentuk karakter santri melalui pendidikan berasrama yang menanamkan disiplin, kemandirian, kepemimpinan, serta penguasaan bahasa Arab dan Bahasa Inggris.",
        focus: [
            "Pendidikan Karakter",
            "Kepemimpinan",
            "Bahasa Arab",
            "Bahasa Inggris",
        ],
    },
    {
        id: 2,
        title: "Kurikulum Kementerian Agama",
        desc: "Menyelenggarakan pendidikan formal sesuai standar Kementerian Agama untuk jenjang MTs dan MA dengan memadukan ilmu agama dan ilmu pengetahuan umum.",
        focus: [
            "Pendidikan Agama Islam",
            "Matematika",
            "IPA & IPS",
            "Bahasa Indonesia",
        ],
    },
    {
        id: 3,
        title: "Kurikulum Salafiyah",
        desc: "Memperdalam ilmu-ilmu keislaman melalui kajian kitab kuning sebagai bekal memahami ajaran Islam secara komprehensif.",
        focus: [
            "Nahwu & Sharaf",
            "Fiqih",
            "Tafsir",
            "Hadits",
        ],
    },
    {
        id: 4,
        title: "Program Pengembangan Santri",
        desc: "Mengembangkan potensi santri melalui program tahfidz, keterampilan, organisasi, dan kegiatan ekstrakurikuler untuk membentuk pribadi yang mandiri dan siap mengabdi.",
        focus: [
            "Tahfidz Al-Qur'an",
            "Multimedia",
            "Pengelasan",
            "Tata Boga & Tata Busana",
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
        title: "Kepramukaan",
        desc: "Membentuk karakter santri yang disiplin, mandiri, bertanggung jawab, serta memiliki jiwa kepemimpinan dan kerja sama.",
        iconName: "users",
    },
    {
        id: 2,
        title: "Muhadharah",
        desc: "Melatih kemampuan berbicara di depan umum, berdakwah, dan berpidato menggunakan Bahasa Arab, Bahasa Inggris, maupun Bahasa Indonesia.",
        iconName: "volume",
    },
    {
        id: 3,
        title: "Kajian Kitab Kuning",
        desc: "Memperdalam ilmu-ilmu keislaman melalui pembelajaran kitab kuning bersama para asatidz.",
        iconName: "book",
    },
    {
        id: 4,
        title: "Tahfidz Al-Qur'an",
        desc: "Program pembinaan hafalan Al-Qur'an yang disertai tahsin dan muroja'ah secara berkelanjutan.",
        iconName: "book",
    },
    {
        id: 5,
        title: "Klub Bahasa Arab",
        desc: "Membiasakan santri menggunakan Bahasa Arab dalam komunikasi sehari-hari untuk meningkatkan kemampuan berbahasa.",
        iconName: "lang-ar",
    },
    {
        id: 6,
        title: "Klub Bahasa Inggris",
        desc: "Mengembangkan kemampuan komunikasi Bahasa Inggris melalui praktik percakapan, diskusi, dan presentasi.",
        iconName: "lang-en",
    },
    {
        id: 7,
        title: "Multimedia",
        desc: "Mengembangkan keterampilan desain grafis, fotografi, videografi, editing, dan media digital.",
        iconName: "laptop",
    },
    {
        id: 8,
        title: "Pengelasan",
        desc: "Membekali santri dengan keterampilan teknik pengelasan sebagai bekal dunia kerja dan kewirausahaan.",
        iconName: "shield",
    },
    {
        id: 9,
        title: "Tata Boga",
        desc: "Melatih keterampilan mengolah makanan, penyajian, serta dasar-dasar kewirausahaan di bidang kuliner.",
        iconName: "activity",
    },
    {
        id: 10,
        title: "Tata Busana",
        desc: "Mengembangkan keterampilan menjahit, mendesain, dan membuat berbagai jenis busana secara mandiri.",
        iconName: "palette",
    },
];

export interface GalleryItem {
    id: number;
    title: string;
    category: string;
    image: string;
}

export const galleryItems: GalleryItem[] = [
    {
        id: 1,
        title: "Classmeeting Sport Putra",
        category: "santri",
        image: "https://lh3.googleusercontent.com/d/1LPwtufhD6Ykf3eM4lm6jVmWcXHpdp2XE",
    },
    {
        id: 2,
        title: "Classmeeting Sport Putri",
        category: "santri",
        image: "https://lh3.googleusercontent.com/d/13s-_Pv_DPccrbX1q3yhsWvpXZyYwlb-A",
    },
    {
        id: 3,
        title: "Paskibra Putra",
        category: "santri",
        image: "https://lh3.googleusercontent.com/d/1xkTWUuTixs-SVs8NtqPt9LuVcmcVGaiF",
    },
    {
        id: 4,
        title: "Drumband Putra",
        category: "santri",
        image: "https://lh3.googleusercontent.com/d/1jIHvmDtnF6DoeR9fGOp6cO5X4CNL9CsC",
    },
    {
        id: 5,
        title: "Dewan Ustad",
        category: "asatidz",
        image: "https://lh3.googleusercontent.com/d/1NaaPOTeROpSOptkmhWgRGOiM3EvK0B4f",
    },
    {
        id: 6,
        title: "Dewan Ustadzah",
        category: "asatidz",
        image: "https://lh3.googleusercontent.com/d/1fa_xyDZeReHtKS_7yTwaiftGskx7VUcV",
    },
    {
        id: 7,
        title: "Pimpinan Pondok",
        category: "pimpinan",
        image: "https://lh3.googleusercontent.com/d/1rEHWj13C26Sz1qzVe_YL_LnGyRVu3gpk",
    },
];