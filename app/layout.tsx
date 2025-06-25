import type { Metadata } from 'next';
import './globals.css';
import Logo from '@/components/Logo'; // ✅ Import client component

export const metadata: Metadata = {
  title: 'Soham Govindwar',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <header className="p-4">
          <Logo /> {/* ✅ This is now safe */}
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
