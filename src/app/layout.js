'use client'

import MainLayout from "components/Layouts/Main"
import '../styles/globals.scss'


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
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
