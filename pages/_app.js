'use client';
import "@/styles/globals.css";
import "@/styles/fonts.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NextUIProvider } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/router";

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`

export default function App({ Component, pageProps }) {
  const { push } = useRouter()
  return (
    <NextUIProvider navigate={push}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </NextUIProvider>
  );
}
