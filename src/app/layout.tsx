import type { Metadata } from "next";
import Particles from "./components/particles";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from './components/nav';

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
  if (typeof window !== 'undefined') {
    console.log('OOPs');
  }

  return (
    <html lang="en">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={200}
      />
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          {/* <Analytics />
          <SpeedInsights /> */}
        </main>
      </body>
    </html>
  );
}