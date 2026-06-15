# Portafolio — Luis Fernando Cunyas Pacheco

Portafolio personal con Next.js 16, animaciones 3D, scroll avanzado y despliegue optimizado para [Railway](https://railway.app).

## Stack

- Next.js 16 (App Router, standalone output)
- TypeScript, Tailwind CSS v4
- Framer Motion, Lenis, React Three Fiber

## Desarrollo local

```bash
npm install
cp .env.example .env.local   # opcional
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Despliegue en Railway (desde GitHub)

### 1. Subir a GitHub

```bash
git init
git add .
git commit -m "feat: portafolio personal Next.js para Railway"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/portafolio.git
git push -u origin main
```

### 2. Conectar en Railway

1. Entra a [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo**
2. Selecciona el repositorio `portafolio`
3. Railway detecta Node.js y usa los scripts de `package.json`

### 3. Variables de entorno (Railway → Settings → Variables)

| Variable | Valor | Requerido |
|----------|-------|-----------|
| `HOSTNAME` | `0.0.0.0` | Sí |
| `NEXT_PUBLIC_SITE_URL` | URL pública de Railway (ej. `https://portafolio-production.up.railway.app`) | Recomendado |
| `RESEND_API_KEY` | API key de Resend | Opcional (contacto) |
| `CONTACT_EMAIL` | Email destino del formulario | Opcional (contacto) |

> `PORT` lo asigna Railway automáticamente. No hace falta definirlo.

### 4. Build y start (ya configurados)

- **Build:** `npm run build` (genera `.next/standalone` + copia assets)
- **Start:** `node .next/standalone/server.js` (definido en `railway.toml` y `package.json`)

### 5. Dominio público

En Railway → tu servicio → **Settings** → **Networking** → **Generate Domain**.

Actualiza `NEXT_PUBLIC_SITE_URL` con la URL generada y redeploya.

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Desarrollo |
| `npm run build` | Build producción |
| `npm run start` | Servidor standalone |
| `npm run lint` | ESLint |

## Personalización

- `src/data/site.ts` — datos personales y GitHub
- `src/data/projects.ts` — proyectos del portafolio
- `public/images/` — fotos y capturas
