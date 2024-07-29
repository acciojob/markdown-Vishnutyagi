import React, { useState, useEffect } from 'react';
import Markdown from 'markdown';
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
            <Markdown>{markdown}</Markdown>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
