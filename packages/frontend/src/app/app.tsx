import { useAuth } from '../lib/auth';

export function App() {
  const { user, login } = useAuth();

  if (!user)
    return (
      <div>
        <p>No user!</p>
      </div>
    );
  else
    return (
      <div>
        <p>There is user!</p>
      </div>
    );
}

export default App;
