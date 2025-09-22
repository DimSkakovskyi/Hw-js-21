import { mockUsers } from '../data/mock-users';
import type { UserInterface } from '../type/User.interface';
import User from './User';

const users: UserInterface[] = mockUsers;

const Users = () => {
  return (
    <div>
      {users.map((user: UserInterface) => {
        return (
          <User key={user.id} {...user}/>
        );
      })}
    </div>
  );
};

export default Users;