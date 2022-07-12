import { useEffect } from 'react';
import { useAuth } from '../lib/auth';

export function App() {
  const { user, login } = useAuth();

  useEffect(() => {
    if (!user) login({ username: 'user', password: 'user' });
  }, [user]);

  if (!user) return <div>No user!</div>;
  else
    return (
      <div>
        <p>There is user!</p>
        {JSON.stringify(user)}
      </div>
    );
}

export default App;
