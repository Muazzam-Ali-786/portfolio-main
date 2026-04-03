import { NextResponse } from 'next/server'
import { verifyCredentials, createSession } from '@/lib/admin-auth'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  try {
    // Early env check
    const email = process.env.ADMIN_EMAIL
    const hashB64 = process.env.ADMIN_PASSWORD_HASH
    if (!email || !hashB64) {
      return NextResponse.json(
        { error: 'Server configuration incomplete' },
        { status: 500 }
      )
    }

    const { email: formEmail, password } = await request.json()

    const isValid = await verifyCredentials(formEmail, password)

    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const token = await createSession(formEmail)
    const cookieStore = await cookies()
    
    cookieStore.set('admin-session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
      path: '/',
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
