import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="w-600 h-620 mx-auto my-30 bg-white shadow-md relative">
            <Header title="List" />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}
