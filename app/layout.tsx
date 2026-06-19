import type {Metadata} from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css'; // Global styles

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pranic Healing Training Organization | Professional Energy Medicine Academy',
  description: 'Discover the Science and Art of Pranic Healing. Learn to understand, balance, and strengthen your energy system through a structured, professional, globally recognized two-day curriculum.',
  keywords: 'Pranic Healing, Grand Master Choa Kok Sui, energy healing, spiritual training, modern wellness, pranic workshop',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} style={{ scrollBehavior: 'smooth' }}>
      <body suppressHydrationWarning className="bg-ivory text-gray-800 antialiased selection:bg-gold selection:text-primary-indigo font-sans">
        {children}
      </body>
    </html>
  );
}
