import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignInPage } from '../pages/sign-in/SignInPage';

export const AppRoutes = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/login-form' element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};
