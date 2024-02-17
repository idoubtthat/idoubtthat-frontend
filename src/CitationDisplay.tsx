import React, { useState } from 'react';

const CitationDisplay: React.FC = () => {
  const [citationId, setCitationId] = useState('');
  const [citation, setCitation] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/v1/citation/${citationId}`);
      const data = await response.json();
      setCitation(data);
    } catch (error) {
      console.error('Error fetching citation:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Citation ID"
          value={citationId}
          onChange={(e) => setCitationId(e.target.value)}
        />
        <button type="submit">Get Citation</button>
      </form>
      {citation && (
        <div>
          <h2>Citation Details</h2>
          <p>ID: {citation.id}</p>
          <p>URL: {citation.url}</p>
          <p>Commentary: {citation.commentary}</p>
          <p>Author ID: {citation.author}</p>
        </div>
      )}
    </div>
  );
};

export default CitationDisplay;
