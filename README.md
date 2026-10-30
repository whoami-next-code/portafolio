# Luis Fernando (WhoAmI)

Portafolio personal en [whoami.business](https://whoami.business). Next.js 16, App Router, TypeScript.

## Stack

- Next.js 16 (App Router)
- TypeScript, Tailwind CSS v4
- Framer Motion, Lenis, React Three Fiber

## Desarrollo local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno

| Variable | Valor | Requerido |
|----------|-------|-----------|
| `NEXT_PUBLIC_SITE_URL` | `https://whoami.business` | Sí, en producción |

Definirla también en Vercel → Project → Settings → Environment Variables, para Production.

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. En [vercel.com](https://vercel.com) → **Add New** → **Project** → importa el repo.
3. Framework preset: **Next.js**. Build: `npm run build`. Output: automático de Next.js.
4. Añade `NEXT_PUBLIC_SITE_URL=https://whoami.business`.
5. Deploy.

Vercel no usa `npm start`. No hace falta `output: "standalone"`.

## Dominio whoami.business (Hostinger → Vercel)

1. En Vercel → Project → Settings → Domains → añade `whoami.business` y `www.whoami.business`.
2. En Hostinger DNS:
   - Apex (`@`): registro **A** a `76.76.21.21` (IP de Vercel), o los registros que Vercel muestre en ese momento.
   - `www`: registro **CNAME** a `cname.vercel-dns.com`.
3. En Vercel, elige `whoami.business` como dominio primario (redirige `www` → apex, o al revés, según elijas).
4. Espera la propagación DNS y verifica el certificado HTTPS.

No cambies DNS hasta tener el proyecto desplegado y las instrucciones actuales de Vercel a la vista: las IPs/CNAME pueden actualizarse.

## Google Search Console

1. Crea una propiedad de **dominio** `whoami.business`.
2. Copia el registro TXT de verificación.
3. Añádelo en los DNS de Hostinger.
4. Verifica la propiedad.
5. Envía `https://whoami.business/sitemap.xml`.
6. Inspecciona `https://whoami.business/` y solicita indexación cuando Google lo permita.

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servidor local de producción |
| `npm run lint` | ESLint |

## Personalización

- `src/data/site.ts` — datos personales y GitHub
- `src/data/projects.ts` — proyectos del portafolio
- `src/lib/seo.ts` — título y descripción de búsqueda
- `public/images/` — fotos y capturas
