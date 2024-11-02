import '@/global.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: "Bhavyam's Portfolio",
  description: 'This portfolio designed using Next.js, Threejs and Tailwind CSS.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <head>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
