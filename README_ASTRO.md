# 🚀 Landingo - Migrasi ke Astro

Landing page profesional untuk UMKM, sekarang dengan **Astro SSG** untuk performa dan SEO yang lebih baik!

## ✨ Fitur

- ⚡ **Static Site Generation** - HTML pre-rendered untuk performa optimal
- 🎯 **Zero JS by Default** - Hanya hydrate komponen yang benar-benar interaktif
- 🔍 **SEO Optimized** - Meta tags dinamis per halaman, structured data
- 📱 **Mobile-First** - Responsive design untuk semua device
- 🎨 **Modern UI** - Design yang clean dan profesional

## 🛠️ Tech Stack

- **Astro** - Static site generator
- **Vue 3** - Untuk komponen interaktif
- **Tailwind CSS** - Styling
- **GSAP** - Animations (hanya untuk komponen interaktif)
- **Iconify** - Icons

## 📦 Installation

```bash
npm install
```

## 🚀 Development

```bash
npm run dev
```

Server akan berjalan di `http://localhost:4321`

## 🏗️ Build

```bash
npm run build
```

Output akan ada di folder `dist/`

## 📁 Struktur Project

```
src/
├── components/
│   ├── section/          # Komponen section
│   │   ├── *.astro       # Komponen statis (zero JS)
│   │   └── *.vue         # Komponen interaktif
│   └── preview/          # Komponen preview
├── layouts/
│   └── Layout.astro      # Layout utama dengan SEO
├── pages/
│   ├── index.astro       # Homepage
│   ├── gallery.astro     # Gallery page
│   └── preview/
│       └── [designId].astro  # Dynamic routes
└── data/
    └── designs.js        # Data designs
```

## 🎯 Performance

### Bundle Size
- **Sebelum (Vue SPA)**: ~210KB JavaScript
- **Sekarang (Astro SSG)**: ~50-80KB JavaScript

### Metrics
- **FCP**: 50-60% lebih cepat
- **LCP**: 60-70% lebih cepat
- **TTI**: 50-60% lebih cepat
- **Lighthouse Score**: 95-100

## 📚 Dokumentasi

- [Analisis Migrasi](./ANALISIS_ASTRO.md) - Analisis lengkap performa dan SEO
- [Panduan Migrasi](./MIGRASI_ASTRO.md) - Panduan migrasi dan troubleshooting

## 🔧 Scripts

- `npm run dev` - Development server
- `npm run build` - Build production
- `npm run preview` - Preview production build
- `npm run dev:vite` - Development dengan Vite (legacy)
- `npm run build:vite` - Build dengan Vite (legacy)

## 📝 Notes

- Komponen statis menggunakan `.astro` (zero JavaScript)
- Komponen interaktif menggunakan `.vue` dengan `client:visible` directive
- Routing menggunakan file-based routing di `src/pages/`

## 🎉 Benefits

1. ✅ **Performance** - Bundle size lebih kecil, loading lebih cepat
2. ✅ **SEO** - HTML pre-rendered, meta tags optimal
3. ✅ **Developer Experience** - File-based routing, simpler structure
4. ✅ **User Experience** - Faster FCP, LCP, TTI

---

**Happy coding! 🚀**

