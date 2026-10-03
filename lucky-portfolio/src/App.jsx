 import { useEffect, useState } from 'react';
import './App.css';
import { personalInfo, searchResults } from './data';

function App() {
   const [query, setQuery] = useState('');

   useEffect(() => {
     let position = 0;
     const timer = window.setInterval(() => {
       position += 1;
       setQuery(personalInfo.name.toUpperCase().slice(0, position));

       if (position >= personalInfo.name.length) {
         window.clearInterval(timer);
       }
     }, 120);

     return () => window.clearInterval(timer);
   }, []);

   return (
    <div className="google-container">
      <header className="google-header">
        <div className="header-top">
          <div className="google-logo">
            <span style={{ color: '#4285F4' }}>G</span>
            <span style={{ color: '#EA4335' }}>o</span>
            <span style={{ color: '#FBBC05' }}>o</span>
            <span style={{ color: '#4285F4' }}>g</span>
            <span style={{ color: '#34A853' }}>l</span>
            <span style={{ color: '#EA4335' }}>e</span>
          </div>
          
          <div className="search-bar">
            <svg viewBox="0 0 24 24" className="search-icon"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            <input type="text" value={query} aria-label="Search Lucky Verma" readOnly />
            <span className="typing-cursor" aria-hidden="true" />
            <svg viewBox="0 0 24 24" className="mic-icon"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
          </div>
          
          <div className="header-right">
            <div className="profile-icon">L</div>
          </div>
        </div>
        
        <div className="search-tabs">
          <div className="tab active">All</div>
          <div className="tab">Images</div>
          <div className="tab">Videos</div>
          <div className="tab">News</div>
          <div className="tab">Maps</div>
        </div>
      </header>

      <div className="search-stats">
        About 1,23,000 results (0.42 seconds)
      </div>

      <main className="main-content">
        <div className="results-container">
          {searchResults.map((result, index) => (
            <div className="search-result" key={index}>
              <div className="result-url">
                <span className="favicon">{result.favicon}</span>
                {result.url}
              </div>
              {/* Yahan link properly set hai */}
              <a href={result.link} target="_blank" rel="noreferrer" className="result-title">
                {result.title}
              </a>
              <p className="result-snippet">{result.snippet}</p>
            </div>
          ))}
          
          <div className="pagination">
            <span className="goooooogle">
              <span style={{ color: '#4285F4' }}>G</span>
              <span style={{ color: '#EA4335' }}>o</span>
              <span style={{ color: '#FBBC05' }}>o</span>
              <span style={{ color: '#4285F4' }}>o</span>
              <span style={{ color: '#34A853' }}>o</span>
              <span style={{ color: '#EA4335' }}>o</span>
              <span style={{ color: '#4285F4' }}>o</span>
              <span style={{ color: '#EA4335' }}>g</span>
              <span style={{ color: '#FBBC05' }}>l</span>
              <span style={{ color: '#4285F4' }}>e</span>
            </span>
            <div className="pages">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>Next &gt;</span>
            </div>
          </div>
        </div>

        <div className="knowledge-panel">
          <div className="kp-header">
            <h3>Lucky Verma</h3>
            <p>Web Developer | BCA Student</p>
          </div>
          
          <div className="kp-image">
            <img 
              src={`${import.meta.env.BASE_URL}${personalInfo.photo}`} 
              alt={personalInfo.name} 
            />
          </div>
          
          <div className="kp-details">
            <div className="kp-item">
              <strong>Education:</strong> Bachelor of Computer Applications (BCA), 2024 - 2027
            </div>
            <div className="kp-item">
              <strong>School:</strong> Jagran College of Arts and Science
            </div>
            <div className="kp-item">
              <strong>Email:</strong> <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
            <div className="kp-item">
              <strong>Phone:</strong> <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            </div>
          </div>

          <div className="kp-profiles">
            <h4>Profiles</h4>
            <div className="kp-links">
              <a href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;