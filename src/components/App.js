import React, { useState, useEffect } from 'react';
// import marked from 'marked';
import '../styles/App.css';

const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          <textarea
            className="textarea"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
          <div
            className="preview">
              {markdown}
              </div>
        </>
      )}
    </div>
  );
};

export default App;
