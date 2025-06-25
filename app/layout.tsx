// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { motion } from 'framer-motion' // ✅ import motion

export const metadata: Metadata = {
  title: 'Soham Govindwar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        {/* Header with SG Logo */}
        <header className="p-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
          >
            SG
          </motion.div>
        </header>

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  )
}
