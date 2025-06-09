import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from '../components/Layout'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Layout>
        <section className="text-center py-12">
          <h2 className="text-4xl font-bold mb-4">Empower UMKM with AI & Digital Tools</h2>
          <p className="text-lg text-gray-600 mb-6">Simple, practical, and in Bahasa Indonesia 🇮🇩</p>
          <a
            href="https://wa.me/6281234567890"
            className="bg-green-500 text-white px-6 py-3 rounded-xl shadow"
            target="_blank"
          >
            Chat WhatsApp
          </a>
        </section>
      </Layout>
    </>
  );
}
