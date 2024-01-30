import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/utils/theme-provider";
import Navbar from "@/components/Navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Maglu",
  description: "App for connect stranger through Video / Chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <TracingBeam>
          {children}
          </TracingBeam>
        </ThemeProvider>
      </body>
    </html>
  );
}
