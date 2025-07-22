import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Save the event so it can be triggered later
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        {showInstallPrompt && (
          <button 
            onClick={handleInstallClick}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#61dafb',
              color: '#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              margin: '20px 0'
            }}
          >
            📱 Add to Homescreen
          </button>
        )}
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hey buddy ! Learn React using this and that .... 
        </a>
        
        <div style={{ marginTop: '20px', fontSize: '14px', color: '#999' }}>
          <p>🏠 This app can be installed on your homescreen!</p>
          <p>On mobile: Use browser menu → "Add to Home screen"</p>
          <p>On desktop: Look for install icon in address bar</p>
        </div>
      </header>
    </div>
  );
}

export default App;
