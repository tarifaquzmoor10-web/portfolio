# Dior Studios — Premium Digital Agency Website

An award-winning, cinematic agency website built with **React + Vite + TypeScript + Tailwind CSS + Framer Motion**.

Pages: Home · Services · Portfolio · Industries · Process · About · Contact · Privacy · Terms · Refund.

---

## 🧰 Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** (single-file static build)
- **Tailwind CSS 4**
- **Framer Motion** (animations, parallax, page transitions)
- Hash-based client routing (no server config needed)

---

## 🚀 Local Development

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → ./dist
npm run preview  # preview the production build locally
```

Requires **Node 20+** (see `.nvmrc`).

---

## 🐙 Deploy with GitHub

1. Create a new repository on GitHub.
2. Push this project:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Dior Studios"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

`node_modules/` and `dist/` are already ignored via `.gitignore`.

---

## ☁️ Deploy with Cloudflare Pages

### Option A — Git integration (recommended)

1. Go to **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git**.
2. Select your GitHub repository.
3. Use these build settings:

   | Setting | Value |
   |---|---|
   | **Framework preset** | `Vite` (or *None*) |
   | **Build command** | `npm run build` |
   | **Build output directory** | `dist` |
   | **Node version** | `20` (set env var `NODE_VERSION=20` if needed) |

4. Click **Save and Deploy**. Done 🎉

### Option B — Direct upload (Wrangler CLI)

```bash
npm run build
npx wrangler pages deploy dist --project-name=dior-studios
```

---

## 📁 Included deployment config

- **`public/_redirects`** — SPA fallback so every route serves `index.html`.
- **`public/_headers`** — security headers + long-term caching for static assets.
- **`.nvmrc`** — pins Node 20 for consistent builds.
- **`.gitignore`** — excludes `node_modules`, `dist`, env files, and Wrangler caches.

These files in `public/` are automatically copied into `dist/` during the build, so Cloudflare picks them up with no extra setup.

---

## 📄 License

© Dior Studios. All rights reserved.
