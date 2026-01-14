import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignInPage } from '../pages/sign-in';
import { ResetPasswordPage } from '../pages/reset-password';
import { SignUpPage } from '../pages/sign-up';

export const AppRoutes = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/login-form' element={<SignInPage />} />
        <Route path='/user/reset-password' element={<ResetPasswordPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
