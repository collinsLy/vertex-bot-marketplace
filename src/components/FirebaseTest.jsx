import { useEffect, useState } from 'react';
import { simpleAuth, simpleDB } from '../lib/firebase-all';

export default function FirebaseTest() {
  const [debugLog, setDebugLog] = useState([]);
  const [testDocId, setTestDocId] = useState(null);

  const addLog = (message) => {
    setDebugLog(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  useEffect(() => {
    let unsubscribe = null;

    (async () => {
      try {
        // Test Auth
        addLog('Attempting anonymous sign-in...');
        await simpleAuth.login('test-debug@example.com', 'testpassword123');
        addLog('Auth succeeded!');

        // Test DB Write
        addLog('Writing test document...');
        const docId = await simpleDB.add('debug-test', { 
          test: 'Firebase debug',
          timestamp: new Date().toISOString()
        });
        setTestDocId(docId);
        addLog(`Document written with ID: ${docId}`);

        // Test DB Read
        addLog('Reading documents...');
        const docs = await simpleDB.get('debug-test');
        addLog(`Found ${docs.length} documents`);

        // Test Realtime
        addLog('Setting up realtime listener...');
        unsubscribe = simpleDB.subscribeToCollection(
          'debug-test',
          ['test', '==', 'Firebase debug'],
          (data) => {
            addLog(`Realtime update: ${data.length} documents`);
          }
        );
        
      } catch (error) {
        addLog(`Error: ${error.message}`);
        console.error('Full error:', error);
      }
    })();

    return () => {
      if (unsubscribe) unsubscribe();
      if (testDocId) {
        // Cleanup test document
        simpleDB.delete('debug-test', testDocId);
      }
    };
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Firebase Debug Console</h2>
      <div style={{ 
        backgroundColor: '#1e1e1e',
        color: '#ffffff',
        padding: '20px',
        borderRadius: '8px',
        maxHeight: '400px',
        overflowY: 'auto'
      }}>
        {debugLog.map((log, index) => (
          <div key={index} style={{ fontFamily: 'monospace', margin: '4px 0' }}>
            {log}
          </div>
        ))}
      </div>
    </div>
  );
}