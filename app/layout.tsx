'use client';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { VoteProvider } from '@/lib/context/vote context';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black">
        <nav className="px-3 py-4 lg:px-[90px] xl:px-[150px]">
          <Navbar />
        </nav>
        <QueryClientProvider client={queryClient}>
          <VoteProvider>
            {children}
            {/* <PaymentForm /> */}
            <Footer />
          </VoteProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
