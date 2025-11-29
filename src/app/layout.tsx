import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';
import './globals.css';

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DANVERSE | AI Creative Studio',
  description: 'Bioluminescent Intelligence. Liquid Glass Aesthetics. Zero-G Experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rajdhani.variable}>
      <body className="font-sans bg-void text-white/90">{children}</body>
    </html>
  );
}