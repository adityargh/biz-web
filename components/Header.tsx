import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between">
      <h1 className="font-bold text-xl">AI UMKM</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}