import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('Trying to fetch: http://192.168.1.154:5000/api');

    fetch('http://192.168.1.154:5000/api')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error('Fetch failed:', err);
        setMessage('Backend not reachable');
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>React Frontend</h1>
      <p>API Response: {message}</p>
    </div>
  );
}

export default App;

