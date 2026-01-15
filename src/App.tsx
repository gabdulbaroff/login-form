import { AppRoutes } from './router';
import css from './App.module.css';

function App() {
  return (
    <div className={css.Layout}>
      <div className={css.Content}>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
