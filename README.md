# The Devs - Bennett University PYQ Platform

**BETH Stack** • Node.js + ElysiaJS + TailwindCSS + HTMX

## 🚀 Tech Stack

- **Runtime**: Node.js 24.x
- **Backend**: ElysiaJS
- **Frontend**: HTMX + Alpine.js
- **Styling**: TailwindCSS
- **Database**: PostgreSQL (Neon) + Drizzle ORM
- **Auth**: Session-based with bcryptjs

## 🛠️ Getting Started

### Prerequisites
- Node.js 24.x (use `nvm use` if you have nvm installed)
- PostgreSQL database (Neon, Supabase, local PostgreSQL, etc.)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment:**
   ```bash
   cp .env.example .env
   # Add your DATABASE_URL to .env
   ```

3. **Push database schema:**
   ```bash
   npm run db:push
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

   Server runs at `http://localhost:3000`

## 🚀 Deploy

### Railway
1. Connect your GitHub repo
2. Add `DATABASE_URL` environment variable
3. Deploy!

### Render
1. Create a new Web Service
2. Connect your GitHub repo
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add `DATABASE_URL` environment variable

### Fly.io
```bash
fly launch
fly deploy
```

## 📁 Project Structure

```
devs-online/
├── src/
│   ├── index.ts           # Main server entry
│   ├── components/        # Server-side rendered components
│   ├── pages/             # Page renderers
│   ├── db/                # Database schema & connection
│   └── services/          # Auth service
├── logo.png               # Static asset
├── package.json
└── tsconfig.json
```

## 🚦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run start` | Start production server |
| `npm run db:push` | Push schema to database |
| `npm run db:studio` | Open Drizzle Studio |

