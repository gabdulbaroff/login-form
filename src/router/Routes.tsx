import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SignInPage } from '../pages/sign-in';
import { ResetPasswordPage } from '../pages/reset-password';
import { SignUpPage } from '../pages/sign-up';
import { CatsPage } from '../pages/cats';
import { AuthenticatedRoute } from '../components/AuthenticatedRoute';
import { AuthProvider } from '../context/AuthContext';

export const AppRoutes = () => {
  return (
    <BrowserRouter basename='/'>
      <AuthProvider>
        <Routes>
          <Route path='/login-form' element={<SignInPage />} />
          <Route path='/user/reset-password' element={<ResetPasswordPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route
            path='/cats'
            element={
              <AuthenticatedRoute>
                <CatsPage />
              </AuthenticatedRoute>
            }
          />
          <Route path='*' element={<Navigate to='/login-form' replace />} />{' '}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
