// Import necessary modules and components
import "./globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from '@/utils/theme-provider';

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


// App component
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <div className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />



          <Component {...pageProps} />



          <Footer />
        </ThemeProvider>
      </div>

    </>
  );
}

export default MyApp;

