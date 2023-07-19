import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
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

    if (!email || !password) {
      console.log('please check inputs');
      return;
    }
    const form = e.currentTarget;
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Email">
          Email
          <input type="email" name="email" onChange={handleChange} autoComplete='off' />
        </label>
        <label htmlFor="Password">
          Password
          <input type="password" name="password" onChange={handleChange} />
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  );
};
