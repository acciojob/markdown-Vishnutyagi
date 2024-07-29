import React, { useState, useEffect } from 'react';
// import marked from 'marked';
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

  const createMarkup = () => {
    return <h1>{markdown}</h1>;
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
          <div
            className="preview"><h1>{markdown}</h1></div>
        </>
      )}
    </div>
  );
};

export default App;
