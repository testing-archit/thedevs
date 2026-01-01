# The Devs - Bennett University PYQ Platform

A modern placement preparation platform built with **Next.js 14+** using the App Router architecture.

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Runtime**: Node.js 24.x
- **Frontend**: React 19 with Server Components
- **Styling**: Tailwind CSS v3
- **Database**: PostgreSQL (Neon) with Drizzle ORM
- **Auth**: Server Actions with bcryptjs & HTTP-only cookies
- **Language**: TypeScript

## ✨ Features

- 🔐 **Secure Authentication**
  - JWT-based session management with HTTP-only cookies
  - Password hashing with bcryptjs (10 salt rounds)
  - Password visibility toggle for better UX
  - Protected routes with session validation
- 🎨 **Modern UI/UX**
  - Glassmorphism design with dark theme
  - Fully responsive layout (mobile, tablet, desktop)
  - Smooth animations and transitions
  - Custom gradient color scheme
- ⚡ **Performance**
  - Server-side rendering with React Server Components
  - Optimized static assets and code splitting
  - Edge-ready architecture
- 📚 **Platform Features** (Coming Soon)
  - Previous Year Questions (PYQs) from top companies
  - Company-wise problem categorization
  - Topic-based filtering
  - Code submission and testing
  - Progress tracking and analytics

## 🛠️ Getting Started

### Prerequisites
- Node.js 24.x (use `nvm use` if you have nvm installed)
- PostgreSQL database (Neon recommended)

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

## 📁 Project Structure

```
devs-online/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── (auth)/           # Auth routes (login, signup)
│   │   ├── dashboard/        # Protected dashboard
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Landing page
│   │   └── globals.css       # Global styles
│   ├── components/           # React components
│   │   ├── auth/             # Auth-related components
│   │   └── *.tsx             # UI components
│   ├── actions/              # Server Actions
│   │   └── auth.ts           # Authentication actions
│   ├── lib/                  # Utilities
│   │   └── auth.ts           # Auth helper functions
│   └── db/                   # Database schema & connection
│       ├── index.ts          # Drizzle client
│       └── schema.ts         # Database schema
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind configuration
├── next.config.mjs           # Next.js configuration
└── package.json
```

## 🚦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run db:push` | Push schema to database |
| `npm run db:studio` | Open Drizzle Studio |

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add `DATABASE_URL` environment variable
4. Deploy!

### Other Platforms

For Railway, Render, or other platforms:
- Build command: `npm run build`
- Start command: `npm run start`
- Add `DATABASE_URL` environment variable

## 🗄️ Database Schema

The platform uses **Drizzle ORM** with PostgreSQL (Neon serverless):

- **Users**: Student accounts with course and specialization info
- **Sessions**: Secure token-based session management
- **Companies**: Tech companies database for PYQs
- **Topics**: Data structures, algorithms, system design, etc.
- **Problems**: Previous year questions with test cases
- **Submissions**: Code submissions with evaluation results

### Database Commands

```bash
# Push schema changes to database
npm run db:push

# Open Drizzle Studio (database GUI)
npm run db:studio
```

## 🔒 Authentication

The platform uses a secure, cookie-based authentication system:

- **Server Actions** for login/signup
- **bcryptjs** for password hashing
- **HTTP-only cookies** for session tokens
- **Protected routes** using middleware

## 📝 Environment Variables

Create a `.env` file with:

```env
DATABASE_URL=your_neon_database_url
NODE_ENV=development
```

## 🤝 Contributing

This is a private project for Bennett University students.

## 📄 License

Private - All Rights Reserved
