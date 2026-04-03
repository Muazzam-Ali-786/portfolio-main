import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'

export interface AdminSession {
  email: string
  isAdmin: boolean
}

let cachedEmail: string | null = null
let cachedHash: string | null = null
let cachedJWT: Uint8Array | null = null

function getAdminConfig() {
  const email = process.env.ADMIN_EMAIL
  const hashB64 = process.env.ADMIN_PASSWORD_HASH
  const secret = process.env.NEXTAUTH_SECRET

  if (!email || !hashB64 || !secret) {
    throw new Error('Missing required environment variables: ADMIN_EMAIL, ADMIN_PASSWORD_HASH, NEXTAUTH_SECRET')
  }

  if (!cachedEmail) cachedEmail = email
  if (!cachedHash) {
    try {
      cachedHash = Buffer.from(hashB64, 'base64').toString('utf-8')
    } catch {
      throw new Error('Invalid ADMIN_PASSWORD_HASH (must be base64-encoded bcrypt hash)')
    }
  }
  if (!cachedJWT) cachedJWT = new TextEncoder().encode(secret)

  return { email: cachedEmail, hash: cachedHash!, jwt: cachedJWT! }
}

export async function verifyCredentials(email: string, password: string): Promise<boolean> {
  const { email: adminEmail, hash } = getAdminConfig()
  
  if (email !== adminEmail) return false
  
  return bcrypt.compare(password, hash)
}

export async function createSession(email: string): Promise<string> {
  const { jwt } = getAdminConfig()
  
  const token = await new SignJWT({ email, isAdmin: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(jwt)

  return token
}

export async function getSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin-session')?.value

  if (!token) return null

  const { jwt } = getAdminConfig()

  try {
    const verified = await jwtVerify(token, jwt)
    return verified.payload as AdminSession
  } catch {
    return null
  }
}

export async function destroySession() {
  const cookieStore = await cookies()
  cookieStore.delete('admin-session')
}

