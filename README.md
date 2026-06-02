# Mongolian Under Water — Website

Marketing website and self-service CMS for **Mongolian Under Water**, a CMAS member finswimming and underwater target shooting club in Ulaanbaatar, Mongolia.

Built with **Payload CMS 3 + Next.js 16 (App Router)** and **PostgreSQL**.

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript) |
| CMS | Payload CMS 3 |
| Database | PostgreSQL (via `@payloadcms/db-postgres`) |
| Rich text | Lexical editor |
| Package manager | npm |

---

## Local setup

### Prerequisites

- Node.js ≥ 20.9
- PostgreSQL running locally

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

| Variable | Description | Example |
|---|---|---|
| `DATABASE_URL` | PostgreSQL connection string | `postgres://user@localhost:5432/mongolian_underwater` |
| `PAYLOAD_SECRET` | Random secret for Payload JWT | `any-long-random-string` |
| `NEXT_PUBLIC_SERVER_URL` | Public URL of the app | `http://localhost:3000` |

### 3. Create the database

```bash
createdb mongolian_underwater
```

### 4. Run migrations / push schema

Start the dev server once — Payload will auto-push the schema on first boot:

```bash
npm run dev
```

Open `http://localhost:3000/admin` and create the first admin user.

### 5. Seed sample data (optional)

```bash
npm run seed
```

This inserts 3 news posts, 3 pricing tiers, and 3 teacher profiles so the site isn't empty.

---

## Development

```bash
npm run dev        # start dev server (http://localhost:3000)
npm run build      # production build
npm start          # start production server
npm run seed       # seed sample content
npm run generate:types   # regenerate payload-types.ts after collection changes
```

---

## Collections (Admin panel)

| Slug | Mongolian label | Purpose |
|---|---|---|
| `users` | Хэрэглэгч | Admin login accounts |
| `media` | Медиа | Image uploads (thumbnail / card / hero sizes) |
| `news` | Мэдээ | News posts with rich text, categories, cover image |
| `pricing` | Үнийн багц | Pricing tiers with feature lists |
| `teachers` | Багш нар | Coach profiles with certifications |

Non-technical staff can log in to `/admin` and manage news, pricing, and teacher profiles without touching code.

---

## Public pages

| Route | Page |
|---|---|
| `/` | Нүүр (Home) |
| `/about` | Бидний тухай (About) |
| `/training` | Сургалт & Хуваарь (Training & Schedule) |
| `/pricing` | Үнэ (Pricing) |
| `/teachers` | Багш нар (Teachers) |
| `/news` | Мэдээ list (with category filter) |
| `/news/[slug]` | Мэдээ detail |
| `/contact` | Холбоо барих (Contact) |
| `/sitemap.xml` | Auto-generated sitemap |
| `/robots.txt` | robots.txt |

---

## VPS deployment (cloud.mn or any Ubuntu VPS)

### 1. Server requirements

- Ubuntu 22.04+
- Node.js 20+ (install via `nvm` or NodeSource)
- PostgreSQL 15+
- Nginx
- PM2 (`npm install -g pm2`)
- Certbot for HTTPS

### 2. Clone and install

```bash
git clone <your-repo> /var/www/underwater
cd /var/www/underwater
npm install
```

### 3. Environment variables

Create `/var/www/underwater/.env`:

```env
DATABASE_URL=postgres://dbuser:password@localhost:5432/mongolian_underwater
PAYLOAD_SECRET=<long-random-secret>
NEXT_PUBLIC_SERVER_URL=https://yourdomain.mn
```

### 4. Run migrations and build

```bash
# Let Payload push/create the schema:
npm run dev   # start once, wait for "ready", then Ctrl+C

# Seed initial content (once):
npm run seed

# Production build:
npm run build
```

### 5. Keep alive with PM2

```bash
pm2 start npm --name underwater -- start
pm2 save
pm2 startup   # follow the printed command to register on boot
```

### 6. Nginx reverse proxy

Create `/etc/nginx/sites-available/underwater`:

```nginx
server {
    listen 80;
    server_name yourdomain.mn www.yourdomain.mn;

    client_max_body_size 50m;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 120s;   # important for /admin routes
    }
}
```

```bash
ln -s /etc/nginx/sites-available/underwater /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

### 7. HTTPS with Let's Encrypt

```bash
apt install certbot python3-certbot-nginx
certbot --nginx -d yourdomain.mn -d www.yourdomain.mn
```

### 8. Media storage in production

Local disk storage is fine for development but **not** recommended for production (files won't survive deploys). Use S3-compatible object storage:

```bash
npm install @payloadcms/storage-s3
```

Then add to `src/payload.config.ts`:

```ts
import { s3Storage } from '@payloadcms/storage-s3'

// inside buildConfig({ plugins: [...] })
s3Storage({
  collections: { media: true },
  bucket: process.env.S3_BUCKET!,
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY!,
      secretAccessKey: process.env.S3_SECRET_KEY!,
    },
    region: process.env.S3_REGION || 'us-east-1',
    endpoint: process.env.S3_ENDPOINT, // for non-AWS providers
  },
})
```

Add the corresponding env vars: `S3_BUCKET`, `S3_ACCESS_KEY`, `S3_SECRET_KEY`, `S3_REGION`, `S3_ENDPOINT`.

> **Important:** Register the domain under the **client's** account, not yours, to ensure ownership.

---

## Adding new collections after deployment

1. Edit `src/collections/` and `src/payload.config.ts`
2. Run `npm run generate:types`
3. Run `npm run payload migrate:create -- --name <migration-name>`
4. Run `npm run payload migrate`
5. Run `npm run build` and restart: `pm2 restart underwater`
