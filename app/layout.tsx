import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Abhishek Nere - AI & Software Developer',
  description: 'Personal portfolio of Abhishek Nere, AI & Software Developer specializing in modern web technologies and artificial intelligence.',
  keywords: 'Abhishek Nere, AI Developer, Software Developer, Next.js, React, Portfolio',
  authors: [{ name: 'Abhishek Nere' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}