import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <div>
      <h1>React + Node.js Lab</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
