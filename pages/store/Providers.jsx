'use client';

import Footer from "./_components/Footer";
import Header from "./_components/Header";
import CartContextProvider from "./providers/CartContextProvider";

export default function Providers({ children }) {
    return (
        <CartContextProvider>
            <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
                <Header />
                {children}
                <Footer />
            </div>
        </CartContextProvider>
    );
}
