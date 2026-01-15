import { AppRoutes } from './router';
import css from './App.module.css';

function App() {
  return (
    <div className={css.Layout}>
      <main className={css.Content}>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
