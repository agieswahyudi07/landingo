
---

```markdown
# 🚀 Vue Landing Starter

Modern, fast, and Docker-ready starter template for building landing pages using **Vue 3**, **Tailwind CSS**, and **Vite**. Perfect for rapid development and easy deployment.

---

## ✨ Features

- ✅ Vue 3 with Composition API
- 🎨 Tailwind CSS pre-configured
- ⚡ Vite for fast development
- 🐳 Docker-ready (development & production)
- 📁 Clean folder structure for landing pages
- 🔥 Hot reload works out of the box (even in Docker)

---

## 🧱 Folder Structure


vue-landing-starter/
├── src/
│   ├── assets/         # Styles, images, etc.
│   ├── components/     # Section components (Hero, Footer, etc.)
│   │   ├── common
│   │   └── section
│   ├── layouts
│   ├── pages
│   ├── App.vue
│   └── main.js
├── public/
├── Dockerfile.dev
├── docker-compose.yml
├── vite.config.js
├── .dockerignore
└── package.json

````

---

## 🚀 Getting Started

### 1. Clone This Repo

```bash
git clone https://github.com/agieswahyudi07/codebase-landingpage.git
cd vue-landing-starter
````

### 2. Run in Docker (Development)

```bash
docker-compose up --build
```

Open in browser: [http://localhost:5173](http://localhost:5173)

> ✨ All changes will auto-reload thanks to hot module replacement.

## 📦 Tech Stack

* [Vue 3](https://vuejs.org/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Docker](https://www.docker.com/)
* [Nginx](https://www.nginx.com/) (for production)

---

## 📄 License

[MIT](LICENSE)

---

## 🙋‍♂️ Author

Built with 💙 by [Agies Wahyudi](https://agieswahyudi.vercel.app)
