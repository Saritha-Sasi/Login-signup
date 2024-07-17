import React, { useState } from 'react';
import axios from 'axios';
 
const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    batchName: '',
    exitExamMark: '',
  });
 
  const { name, email, password, phone, batchName, exitExamMark } = formData;
 
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
 
  const onSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
 
      const { data } = await axios.post('/api/users/register', formData, config);
 
      console.log(data);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };
 
  return (
<form onSubmit={onSubmit}>
<input type="text" name="name" value={name} onChange={onChange} placeholder="Name" required />
<input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
<input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
<input type="text" name="phone" value={phone} onChange={onChange} placeholder="Phone" required />
<input type="text" name="batchName" value={batchName} onChange={onChange} placeholder="Batch Name" required />
<input type="number" name="exitExamMark" value={exitExamMark} onChange={onChange} placeholder="Exit Exam Mark" required />
<button type="submit">Register</button>
</form>
  );
};
 
export default Signup;