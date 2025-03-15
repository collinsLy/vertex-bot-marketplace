import { useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function ConnectionTest() {
  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase
        .from('bots')
        .select('*')
        .limit(1)
      
      console.log('Connection result:', { data, error })
    }
    testConnection()
  }, [])

  return <div>Testing Supabase connection...</div>
}