import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // CSS variable name
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className='bg-black'>
        <nav className="px-3 lg:px-[150px] py-4">
          <Navbar />
        </nav>
        {children}
      <Footer />
      </body>
    </html>
  );
}
