import React from 'react';
import Home from './pages/Home';
import './index.css';

function App() {
  // Set document title
  React.useEffect(() => {
    document.title = "Manish Sir's English Academy - Best English Coaching in Gwalior";
  }, []);

  return <Home />;
}

export default App;