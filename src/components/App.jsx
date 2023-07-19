import { Route, Routes, Navigate } from 'react-router-dom';
// import { lazy } from 'react';
import { Home } from 'pages/Home';
import { Registration } from 'pages/Registration';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { useAuth } from 'redux/hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';

export const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
   isRefreshing ? 'refreshing':
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home />} />
          <Route path="register" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
   
  );
};
