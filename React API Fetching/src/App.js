import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
 const [users, setUsers] = useState([]);
 const [loading, setLoading] = useState(false);

 const getUsers = async () => {
    setLoading(true);
    const response = await fetch('https://reqres.in/api/users?page=1');
    const data = await response.json();
    setUsers(data.data);
    setLoading(false);
 };

 useEffect(() => {
    getUsers();
 }, []);

 return (
    <div className="App">
      <header className="App-header">
        <h1>Brand Name</h1>
        <button onClick={getUsers}>Get Users</button>
      </header>
      <main className="App-main">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          <div className="user-card-grid">
            {users.map((user) => (
              <div className="user-card" key={user.id}>
                <h2>{user.first_name}</h2>
                <p>{user.email}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
 );
}

export default App;