import React, { useState } from 'react';
import axios from 'axios';
 
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
 
  const { email, password } = formData;
 
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
 
  const onSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
 
      const { data } = await axios.post('/api/users/login', formData, config);
 
      console.log(data);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };
 
  return (
<form onSubmit={onSubmit}>
<input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
<input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
<button type="submit">Login</button>
</form>
  );
};
 
export default Login;