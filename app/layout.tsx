import '@/global.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Next.js + Three.js',
  description: 'A minimal starter for Nextjs + React-three-fiber and Threejs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <head />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
