import { AppRoutes } from './router';
import css from './App.module.css';

function App() {
  return (
    <div className={css.Layout}>
      <AppRoutes />
    </div>
  );
}

export default App;
