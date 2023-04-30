import { IUser } from '@monorepo/types';

function App() {
  const user: IUser = {
    name: 'John',
    age: 20,
    role: 'user'
  };
  console.log(user);

  return (
    <div>
      <h1>Front</h1>
    </div>
  );
}

export default App;
