import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

// Add to your root component
import Head from 'next/head'
import { useState, useEffect } from 'react'
// Add Next.js Image optimization
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  // Add real-time subscription
  useEffect(() => {
    const subscription = supabaseClient.channel('realtime-system')
      .on('postgres_changes', { event: '*', schema: 'public' }, () => {
        // Handle real-time updates
        console.log('Database changes detected')
      })
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [supabaseClient])

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Add image domains if using Next.js Image */}
        <meta property="next-image-pattern" content="https://your-image-source.com/*" />
      </Head>
      
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider>
    </>
  )
}