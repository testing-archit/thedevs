# The Devs - Bennett University PYQ Platform

A comprehensive placement preparation platform built with **Next.js 14+** for Bennett University students, featuring company-wise PYQs, progress tracking, and collaborative learning tools.

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Runtime**: Node.js 24.x
- **Frontend**: React 19 with Server Components
- **Styling**: Tailwind CSS v3
- **Database**: PostgreSQL (Neon) with Drizzle ORM
- **Auth**: Server Actions with bcryptjs & HTTP-only cookies
- **Notifications**: Sonner (Toast notifications)
- **Language**: TypeScript

## ✨ Features

### 🔐 Authentication & Security
- JWT-based session management with HTTP-only cookies
- Password hashing with bcryptjs (10 salt rounds)
- Password visibility toggle for improved UX
- Protected routes with session validation
- Secure server actions for all mutations

### 📚 Problem Bank & Learning
- **Company-wise Problems**: Curated PYQs from top tech companies
- **Topic-based Organization**: Browse by data structures, algorithms, system design, and more
- **Problem Difficulty Levels**: Easy, Medium, and Hard categorization
- **Rich Problem Details**: Comprehensive descriptions, constraints, and examples
- **Problem Timer**: Built-in timer to track solving duration
- **Progress Tracking**: Mark problems as Todo, In Progress, or Completed
- **User Statistics**: Track solved problems, accuracy, and topic-wise progress

### 🔍 Search & Discovery
- **Global Search**: Intelligent search across problems, companies, and topics
- **Real-time Results**: Instant search with keyboard navigation support
- **Filter Options**: Advanced filtering by company, topic, and difficulty
- **Smart Ranking**: Relevance-based search results

### 💬 Community Features
- **Discussion Forums**: Comment sections on each problem for collaborative learning
- **Nested Comments**: Reply to specific comments with threaded discussions
- **User Interactions**: Edit and delete your own comments
- **Real-time Updates**: Instant comment posting and updates

### 🎨 UI/UX Excellence
- **Modern Design**: Glassmorphism effects with a sleek dark theme
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Loading States**: Custom skeleton loaders for smooth transitions
- **Error Handling**: Custom 404 and error pages with helpful navigation
- **Toast Notifications**: Non-intrusive feedback for user actions
- **Smooth Animations**: Transitions and micro-interactions throughout

### ⚡ Performance & SEO
- Server-side rendering with React Server Components
- Optimized static assets and code splitting
- Edge-ready architecture
- Dynamic sitemap generation
- SEO-optimized metadata for all pages
- Robots.txt configuration for search engine indexing

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
│   ├── app/                      # Next.js App Router pages
│   │   ├── (auth)/               # Auth routes (login, signup)
│   │   ├── companies/            # Company-wise problem listings
│   │   ├── topics/               # Topic-wise problem categorization
│   │   ├── problems/             # Individual problem pages
│   │   ├── dashboard/            # User dashboard with stats
│   │   ├── profile/              # User profile management
│   │   ├── api/                  # API routes
│   │   ├── layout.tsx            # Root layout with metadata
│   │   ├── page.tsx              # Landing page
│   │   ├── error.tsx             # Error boundary page
│   │   ├── not-found.tsx         # Custom 404 page
│   │   ├── globals.css           # Global styles
│   │   ├── sitemap.ts            # Dynamic sitemap generation
│   │   └── robots.ts             # SEO robots configuration
│   ├── components/               # React components
│   │   ├── auth/                 # Auth-related components
│   │   ├── ui/                   # Reusable UI components
│   │   ├── GlobalSearch.tsx      # Search functionality
│   │   ├── CommentSection.tsx    # Discussion forums
│   │   ├── ProgressButtons.tsx   # Problem progress tracking
│   │   ├── ProblemsTable.tsx     # Problem listings
│   │   ├── ProblemTimer.tsx      # Timer for solving problems
│   │   ├── Skeletons.tsx         # Loading states
│   │   ├── Hero.tsx              # Landing page sections
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── actions/                  # Server Actions
│   │   └── auth.ts               # Authentication actions
│   ├── lib/                      # Utilities
│   │   └── auth.ts               # Auth helper functions
│   └── db/                       # Database schema & connection
│       ├── index.ts              # Drizzle client
│       └── schema.ts             # Database schema
├── public/                       # Static assets
├── tailwind.config.js            # Tailwind configuration
├── next.config.mjs               # Next.js configuration
├── vercel.json                   # Vercel deployment config
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

The platform uses **Drizzle ORM** with PostgreSQL (Neon serverless). The schema includes:

### Core Tables

- **Users**: Student accounts with profile information
  - Email, password hash, name
  - Course, specialization, year of study
  - Role (student/admin) and subscription status
  
- **Companies**: Tech companies database
  - Name, slug, logo URL
  - Industry and year visited at Bennett
  - Problem associations

- **Topics**: Data structures & algorithm topics
  - Name, slug, description
  - Problem categorization (Arrays, Trees, DP, etc.)

- **Problems**: Previous year questions
  - Title, description, difficulty level
  - Company and topic associations
  - Starter code templates (multi-language support)
  - Test cases with hidden/visible flags
  - Constraints and hints
  - Premium flag for subscription-gated content

### User Interaction Tables

- **Submissions**: Code submission tracking
  - User and problem references
  - Code, language, execution status
  - Runtime, memory usage, test results
  - Error messages for debugging

- **User Progress**: Problem-solving progress
  - Status tracking (attempted/solved)
  - Per-user, per-problem granularity
  - Timestamps for analytics

- **Comments**: Discussion forum data
  - User and problem associations
  - Content with upvote counts
  - Timestamps for sorting

- **Comment Votes**: Voting system
  - User-comment associations
  - Prevents duplicate votes

### Session Management

- **Sessions**: Secure authentication
  - Token-based with expiration
  - User associations
  - Automatic cleanup of expired sessions

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
# Database connection string (e.g., from Neon or other PostgreSQL provider)
DATABASE_URL=postgres://user:password@host/database?sslmode=require

# Port for local development (optional)
PORT=3000

# Node environment (Vercel sets this automatically)
NODE_ENV=development

# Web3Forms (for contact form)
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-web3forms-access-key-here
```

## 🤝 Contributing

This is a private project for Bennett University students.

## 📄 License

Private - All Rights Reserved
