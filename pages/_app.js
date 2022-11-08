import Layout from '../components/Layout'
import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => { 
    const handleRouteChange = (url, { shallow }) => {
      console.log(`🍋 App is changing to ${url} ${shallow ? 'with' : 'without'} shallow routing`)
      window.dispatchEvent(new Event("m-refresh-widgets"));
      console.log('🍎 triggered m-refresh-widgets event');
    }
    router.events.on('routeChangeStart', handleRouteChange)
  
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])


  return (
    
    <Layout>
      {/* -- Stylesheets for connect and marketplace widgets -- */}
      {/* <link rel="stylesheet" href="https://connect.manifoldxyz.dev/2.0.13/connect.css"></link>
      <link rel="stylesheet" href="https://marketplace.manifoldxyz.dev/latest/marketplace.css" /> */}
      <script src="https://connect.manifoldxyz.dev/latest/connect.umd.js" async></script>
      <script src="https://marketplace.manifoldxyz.dev/latest/marketplace.umd.js" async></script>
      <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp
