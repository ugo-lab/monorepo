import { MyButton } from '@monorepo/ui';
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
      yo
      <MyButton />
    </div>
  );
}

export default App;
