import React, { useState } from 'react';
import './Login.css'

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Faça algo com as informações de login
  }

  return (
    <div className='Container'>

        <h1>Login</h1>
        <h3>Please log in to continue</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label><br />
        <button type="submit">Login</button>
      </form>

      <footer>Don't have an account? <a href="#">Sign up here</a></footer>
    </div>
  );
}

export default LoginPage;