'use client'

import MainLayout from "components/Layouts/Main"
import '../styles/globals.scss'
export const metadata = {
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  colorScheme: 'dark',
  creator: 'Jiachi Liu',
  publisher: 'Sebastian Markbåge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
     <body>
     
       <MainLayout>
       {children}
       </MainLayout>
     </body>
    </html>
  )
}
