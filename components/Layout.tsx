import { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}