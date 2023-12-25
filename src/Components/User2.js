import React, { useState } from 'react';

const HomePage = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUpdatePassword = () => {
    // You can add your logic here to update the password
    // For simplicity, let's just log the entered data
    console.log('Updating password...');
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);
  };

  return (
    <div>
      <h1>User Home Page</h1>

      <div>
        <label htmlFor="oldPassword">Old Password:</label>
        <input
          type="password"
          id="oldPassword"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>

      <button onClick={handleUpdatePassword}>Update Password</button>
    </div>
  );
};

export default HomePage;
