interface SignInResponse {
  success: boolean;
  message: string;
  user?: {
    email: string;
    name: string;
  };
}

const THRESHOLD = 1000;

export const signIn = async (email: string, password: string): Promise<SignInResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'Test1234') {
        resolve({
          success: true,
          message: 'Successfully signed in',
          user: {
            email: email,
            name: 'Test User',
          },
        });
      } else {
        reject({
          success: false,
          message: 'Invalid email or password',
        });
      }
    }, THRESHOLD);
  });
};
