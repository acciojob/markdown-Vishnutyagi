import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/App.css';

const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          <textarea
            className="textarea"
            value={markdown}
            onChange={handleMarkdownChange}
            placeholder="Write your markdown here..."
          />
          <div className="preview">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
