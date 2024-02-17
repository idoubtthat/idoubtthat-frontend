import React from 'react';
import UserForm from './UserForm';
import UserDisplay from './UserDisplay';
import CitationForm from './CitationForm';
import CitationDisplay from './CitationDisplay';

const App: React.FC = () => {
  return (
    <div>
      <h1>User Management</h1>
      <UserForm />
      <UserDisplay />
      <h1>Citation Management</h1>
      <CitationForm />
      <CitationDisplay />
    </div>
  );
};

export default App;
