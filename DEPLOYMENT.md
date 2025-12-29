# Deployment Guide

## Node.js Version Configuration

The project is configured to use **Node.js 20.x**:

- `package.json` → `"engines": { "node": "20.x" }`
- `.nvmrc` → `20` (for nvm users)
- `.node-version` → `20` (for asdf/nodenv users)

## Platform-Specific Settings

### Railway
- **Node Version**: Automatically detected from `package.json` engines
- **Build Command**: Not needed (or `npm install`)
- **Start Command**: `npm start`
- **Environment Variables**: Add `DATABASE_URL`

### Render
- **Node Version**: Set to `20` in dashboard (or auto-detected)
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment Variables**: Add `DATABASE_URL`

### Fly.io
- **Node Version**: Auto-detected from `.node-version` or `package.json`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment Variables**: `fly secrets set DATABASE_URL=...`

### DigitalOcean App Platform
- **Node Version**: Set to `20` in settings
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment Variables**: Add `DATABASE_URL`

### Heroku
- **Node Version**: Auto-detected from `package.json` engines
- **Build Command**: `npm install`
- **Start Command**: `npm start` (from Procfile)
- **Environment Variables**: `heroku config:set DATABASE_URL=...`

## Environment Variables Required

- `DATABASE_URL` - PostgreSQL connection string (required)
- `NODE_ENV` - Set to `production` in production (optional)
- `PORT` - Automatically set by platform (optional)

## Quick Deploy Commands

### Railway
```bash
railway login
railway init
railway up
```

### Render
1. Connect GitHub repo in dashboard
2. Set start command: `npm start`
3. Add environment variables

### Fly.io
```bash
fly launch
fly secrets set DATABASE_URL="your-connection-string"
fly deploy
```

