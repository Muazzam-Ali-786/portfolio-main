import "@/lib/load-env"

import { MongoClient } from "mongodb"

function getMongoUri(): string | undefined {
  const a = process.env.MONGO_URI?.trim()
  const b = process.env.MONGODB_URI?.trim()
  return a || b || undefined
}

declare global {
  // eslint-disable-next-line no-var -- Next.js hot reload cache
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

function getClientPromise(): Promise<MongoClient> {
  const uri = getMongoUri()
  if (!uri) {
    throw new Error(
      "MONGO_URI is not set. Add MONGO_URI to .env.local next to package.json (full Atlas URL). Restart dev server after saving."
    )
  }
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri)
    global._mongoClientPromise = client.connect()
  }
  return global._mongoClientPromise
}

/** Database name comes from MONGO_URI (e.g. …/expense-tracker?…). */
export async function getDb() {
  const client = await getClientPromise()
  return client.db()
}

export type ContactSubmission = {
  name: string
  email: string
  subject: string
  message: string
  createdAt: Date
}

/** Portfolio contact messages; separate from other collections in the same database. */
export async function getContactMessagesCollection() {
  const db = await getDb()
  return db.collection<ContactSubmission>("portfolio_contacts")
}
