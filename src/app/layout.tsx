import type { Metadata } from "next";
import Particles from "./components/particles";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from './components/nav';
import GoogleAnalytics from "./components/GoogleAnalytics";
import { ThemeProvider } from "./components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://shaunfurtado.is-a.dev/'),
  title: "Shaun Furtado",
  description: "Portfolio of Shaun Furtado",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel='icon' href='/favicon.ico' />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body className={`${inter.className} antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Particles
              className="absolute inset-0 -z-10 animate-fade-in"
              quantity={300}
            />
            <GoogleAnalytics />
            <Navbar />
            {children}
            <footer className="text-center py-4 text-sm">
              © 2025 Shaun Furtado. <b><a href="https://github.com/Shaunfurtado/Shaunfurtado.github.io"
              className="underline underline-offset-4 hover:no-underline font-bold transition duration-300 transform hover:translate-y-1">
                Crafted by yours truly
                </a></b>
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}