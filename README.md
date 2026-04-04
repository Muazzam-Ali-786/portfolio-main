# Muazzam Portfolio

## 🚀 Quick Start (Local Development)

1. Clone/Fork this repo
2. `npm install`
3. Copy `.env.local.example` → `.env.local` and fill required values (MongoDB Atlas, Gmail app password, admin hash, etc.)
4. `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

**Required `.env.local` (never commit!)**  
See `env.local.example` for full list. Minimum for basic site:
```
MONGO_URI=your_mongodb_atlas_connection_string
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD_HASH=base64_bcrypt_hash_of_password
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Admin Hash**: Run `node encode-hash.js` after setting `hash` in that file.

## 🌐 Vercel Deployment (Now Fixed!)

✅ **Project is Vercel-ready** (tested config).

### Steps:
1. **Push to GitHub**:
   ```
   git add .
   git commit -m "Vercel deploy ready"
   git push origin main
   ```

2. **Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com), login → New Project
   - Import your GitHub repo
   - **Critical: Add Environment Variables** (Settings → Environment Variables):
     | Key | Value | Notes |
     |-----|-------|-------|
     | `MONGO_URI` | Full Atlas connection string | Server-only |
     | `EMAIL_USER` | Gmail address | Server-only |
     | `EMAIL_PASS` | Gmail App Password | Server-only |
     | `ADMIN_EMAIL` | e.g. admin@example.com | Server-only (for /admin) |
     | `ADMIN_PASSWORD_HASH` | Base64 bcrypt hash | Server-only |
     | `NEXTAUTH_SECRET` | `openssl rand -base64 32` | Server-only |
     | `NEXT_PUBLIC_SUPABASE_URL` | From Supabase | All envs |
     | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | From Supabase | All envs |
     | `CONTACT_TO_EMAIL` | Your inbox | Server-only |

     **Redeploy** after adding vars (automatic on git push).

3. **Test**:
   - Visit deployed URL
   - Test contact form (/ → contact)
   - Admin: /admin (login with your ADMIN_EMAIL/pass)
   - Quiz: /learn

### Features:
- ✅ Public portfolio (projects, skills)
- ✅ Contact form (MongoDB + email)
- ✅ Admin dashboard (/admin) - view analytics/contacts
- ✅ Persona quiz (/learn) - Supabase storage
- Responsive, dark/light theme, smooth animations

## 🔧 Customization
- Tailwind/shadcn: Edit `tailwind.config.ts`, components/
- Projects: `app/page.tsx` → creative-hero, project cards
- Admin: `app/admin/dashboard/`
- Quiz: `app/learn/`

## 📱 Preview
Live demo: [Soon on Vercel!](https://your-project.vercel.app)

---

Built with ❤️ using Next.js 15, TypeScript, shadcn/ui, Framer Motion
