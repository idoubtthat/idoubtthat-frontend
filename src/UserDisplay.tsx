// UserDisplay.tsx
import React, { useState } from 'react';

const UserDisplay: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/v1/user/${userId}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="submit">Get User</button>
      </form>
      {user && (
        <div>
          <h2>User Details</h2>
          <p>ID: {user.id}</p>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
        </div>
      )}
    </div>
  );
};

export default UserDisplay;
