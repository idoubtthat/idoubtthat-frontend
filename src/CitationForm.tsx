import React, { useState } from 'react';

const CitationForm: React.FC = () => {
  const [url, setUrl] = useState('');
  const [commentary, setCommentary] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/v1/citation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, commentary, author }),
      });
      const data = await response.text();
      console.log('Citation created:', data);
    } catch (error) {
      console.error('Error creating citation:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Commentary"
        value={commentary}
        onChange={(e) => setCommentary(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author ID"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Create Citation</button>
    </form>
  );
};

export default CitationForm;
