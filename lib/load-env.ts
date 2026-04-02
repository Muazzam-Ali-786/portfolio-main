import { existsSync } from "fs"
import { join } from "path"

import { config } from "dotenv"

let done = false

/** Loads `.env.local` before other code reads `process.env` (fixes MONGO_URI missing in some setups). */
export function loadEnvLocal() {
  if (done) return
  done = true

  const candidates = [
    join(process.cwd(), ".env.local"),
    join(process.cwd(), ".env"),
    join(process.cwd(), "portfolio-main", ".env.local"),
    join(process.cwd(), "..", ".env.local"),
    join(process.cwd(), "..", "portfolio-main", ".env.local"),
  ]

  for (const path of candidates) {
    if (existsSync(path)) {
      config({ path, override: true })
      return
    }
  }
}

loadEnvLocal()
