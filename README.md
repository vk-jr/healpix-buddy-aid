# 🩺 Healpix Buddy Aid

**Healpix Buddy Aid** is an AI-powered medical assistant web app that helps users by analyzing medical images and providing basic first aid suggestions. Built using a modern and efficient tech stack, it delivers excellent developer experience and blazing-fast performance.

---

## 🧩 Tech Stack

- **Frontend**: React.js (with TypeScript)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Compiler**: SWC (via `@vitejs/plugin-react-swc`)
- **Development Tools**: HMR, Component Tagger
- **Alias Support**: `@` mapped to `src/`

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/yourusername/healpix-buddy-aid.git
cd healpix-buddy-aid
npm install   # or yarn / pnpm install
````

### Run Development Server

```bash
npm run dev
```

Starts the app at `http://[::1]:8080` (IPv6 enabled by default)

---

## 🛠️ Project Structure

```bash
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── styles/
│   └── main.tsx
├── index.html
├── tsconfig.json
└── vite.config.ts
```

* `@` alias maps to the `src/` directory to simplify imports.

---

## 💡 Features

### ✅ Core Functionality

* Upload medical images for AI analysis
* Receive first aid suggestions instantly
* Responsive, clean UI for a smooth experience

### ⚙️ Developer Experience

* Type-safe development using TypeScript
* Hot Module Replacement (HMR) for fast iteration
* Tailwind CSS for styling with utility-first classes
* Path aliasing for better file import management

### 🚧 Error Handling

* Custom 404 page (`NotFound.tsx`) for missing routes
* Console logging for debugging in development
* Friendly error messages for users

---

## 🏗️ Production

### Build the App

```bash
npm run build
```

Generates an optimized production build for modern browsers.

### Preview Production Build

```bash
npm run preview
```

Launches a local server to test the built version.

---
