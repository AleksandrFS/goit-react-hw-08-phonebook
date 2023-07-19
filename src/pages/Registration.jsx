import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
// import { useAuth } from 'redux/hooks/useAuth';

export const Registration = () => {
  
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      console.log('please check inputs')
      return
    }
    const form = e.currentTarget;
    dispatch(register({ name, email, password }));
     setName('');
     setEmail('');
     setPassword('');
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
        <label>
          Password
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
};
