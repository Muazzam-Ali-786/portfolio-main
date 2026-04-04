# Vercel Deployment Repair - TODO Steps

## Approved Plan Steps (progress tracked here)

### 1. [x] Cleanup redundant files
   - Deleted lib/admin-auth-fixed.ts (duplicate of admin-auth.ts)

### 2. [x] Create Vercel config
   - Fixed vercel.json - removed invalid runtime (Vercel error fix), kept maxDuration/headers

### 3. [x] Update README.md
   - Added detailed Vercel deployment guide with env var instructions

### 4. [ ] Improve error handling (optional) - SKIPPED
   - Graceful fallbacks in auth/DB if env missing

### 5. [x] Test build locally
   - Upgraded Next.js to ^15.3.0 (fixes CVE/security warning)
   - Removed @vercel/node (unneeded)
   - npm install && npm run build succeeded

### 6. [ ] Deploy to Vercel
   - Push to GitHub
   - Import to Vercel dashboard
   - Set ALL env vars from env.local.example
   - Deploy and test site/admin/contact

**Next: User approve each step or proceed sequentially.**

Updated on: First step ready
