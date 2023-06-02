
import { Suspense, useEffect } from 'react';
import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.scss'
import MainLayout from 'components/Layouts/Main';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("role"))) {
      router.push('/auth/login')
    } 
  },[])
  return (
      <Suspense fallback={<h1>Loading...</h1>}>
        <MainLayout>
        <NextNProgress color="#29D" startPosition={0.1} stopDelayMs={100} height={2} showOnShallow={false}/>
          <Component {...pageProps} />
        </MainLayout>
      </Suspense>
  )
}

export default MyApp
