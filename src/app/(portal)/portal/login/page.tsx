import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { ShieldCheck } from 'lucide-react'
import { checkPassword, setAuthCookie, isAuthed } from '@/lib/qc/auth'

export const metadata: Metadata = {
  title: 'Zenith QC Portal — Sign in',
  robots: { index: false, follow: false },
}

const NAVY = '#0D1F3C'
const MUTED = '#6B7A8D'
const BORDER = '#E4E9F0'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  if (await isAuthed()) redirect('/portal/qc')
  const { error } = await searchParams

  async function login(formData: FormData) {
    'use server'
    const pw = String(formData.get('password') ?? '')
    if (!checkPassword(pw)) redirect('/portal/login?error=1')
    await setAuthCookie()
    redirect('/portal/qc')
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 380, backgroundColor: '#fff', border: `1px solid ${BORDER}`, borderRadius: 16, padding: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 4 }}>
          <ShieldCheck size={20} color="#2A7FBC" />
          <span style={{ color: '#2A7FBC', fontSize: 11.5, fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase' }}>
            Zenith QC Portal
          </span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 24, fontWeight: 700, color: NAVY, margin: '0 0 4px' }}>
          Sign in
        </h1>
        <p style={{ fontSize: 13.5, color: MUTED, margin: '0 0 20px' }}>Internal access only.</p>

        <form action={login}>
          <label style={{ fontSize: 12.5, color: MUTED, display: 'block', marginBottom: 6 }}>Password</label>
          <input
            type="password"
            name="password"
            autoFocus
            required
            style={{ width: '100%', padding: '10px 12px', fontSize: 15, borderRadius: 9, border: `1px solid ${error ? '#DC2626' : BORDER}`, outline: 'none', boxSizing: 'border-box' }}
          />
          {error && (
            <p style={{ color: '#DC2626', fontSize: 12.5, margin: '8px 0 0' }}>Incorrect password. Try again.</p>
          )}
          <button
            type="submit"
            style={{ width: '100%', marginTop: 16, padding: '11px 12px', fontSize: 14.5, fontWeight: 600, color: '#fff', backgroundColor: NAVY, border: 'none', borderRadius: 9, cursor: 'pointer' }}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}
