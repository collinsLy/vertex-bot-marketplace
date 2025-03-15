import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function SupabaseConnectionTest() {
  const [status, setStatus] = useState({
    connection: 'Testing...',
    auth: 'Testing...',
    database: 'Testing...'
  });

  useEffect(() => {
    async function testSupabase() {
      try {
        // Test basic connection
        const { data: versionData } = await supabase
          .from('_postgres_version')
          .select('*')
          .limit(1);
        setStatus(prev => ({ ...prev, connection: 'Connected ✅' }));

        // Test auth
        const { data: authData } = await supabase.auth.getSession();
        setStatus(prev => ({ 
          ...prev, 
          auth: authData ? 'Auth working ✅' : 'Auth configured ✅'
        }));

        // Test database access
        const { data: botsData } = await supabase
          .from('bots')
          .select('*')
          .limit(1);
        setStatus(prev => ({ 
          ...prev, 
          database: Array.isArray(botsData) ? 'Database accessible ✅' : 'Error ❌'
        }));

      } catch (error) {
        console.error('Integration test failed:', error);
        setStatus({
          connection: 'Failed ❌',
          auth: 'Failed ❌',
          database: 'Failed ❌'
        });
      }
    }

    testSupabase();
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Supabase Integration Status</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>Connection Status: {status.connection}</li>
        <li>Auth Status: {status.auth}</li>
        <li>Database Status: {status.database}</li>
      </ul>
    </div>
  );
}