// Login.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Stack } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';


const Login = () => {
  // State to store username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Clear input fields after submission (optional)
    setUsername('');
    setPassword('');
  };

  // Function to handle Google sign-in
  const handleGoogleSignIn = () => {
    // Implement Google sign-in logic here
    console.log('Google sign-in clicked');
  };

  return (
    <Box maxWidth={400} mx="auto" mt={4} p={3} component={Paper} elevation={3} borderRadius={8}>
      {/* Lock Icon */}
      <Box display="flex" justifyContent="center" mb={2}>
        <LockIcon style={{ fontSize: 48, color: '#3f51b5' }} />
      </Box>
      {/* Login form */}
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Username input field */}
        <TextField
          fullWidth
          id="username"
          label="Username"
          variant="outlined"
          margin="normal"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
          InputProps={{
            style: { backgroundColor: '#f5f5f5' },
          }}
        />
        {/* Password input field */}
        <TextField
          fullWidth
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          InputProps={{
            style: { backgroundColor: '#f5f5f5' },
          }}
        />
        {/* Submit button */}
        <Box mt={2} textAlign="center">
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Box>
        {/* Google sign-in button */}
        <Box mt={2} textAlign="center">
          <Button onClick={handleGoogleSignIn} variant="contained" style={{ backgroundColor: '#fff', color: '#3f51b5', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
            Sign in with Google
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
