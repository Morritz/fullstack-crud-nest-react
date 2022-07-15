import { Form } from '../components/Form';
import { InputField } from '../components/InputField';
import { useAuth } from '../lib/auth';

export function App() {
  const { user, login } = useAuth();

  if (!user)
    return (
      <div>
        <p>No user!</p>
        <Form
          onSubmit={(values) => {
            const { username, password } = Object.fromEntries(values);
            login({ username, password }).catch(() => {});
          }}
        >
          <InputField name="username" label="Username" />
          <InputField name="password" label="Password" />
        </Form>
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
