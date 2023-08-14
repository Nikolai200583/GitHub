import { useState } from 'react';

import { IUser } from '../../../models/models';

import * as Styled from './style';

import { Profile } from './profile';

interface User {
  id: number;
  login: string;
  avatar_url: string;
}

export const UserList: React.FC<any> = ({ data }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (user: User) => {
    setSelectedUser(user);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <Styled.user>
      {data?.items.map((user: IUser) => (
        // eslint-disable-next-line react/jsx-pascal-case
        <Styled.userLogin onClick={() => handleOpenModal(user)} key={user.id}>
          {user.login}
        </Styled.userLogin>
      ))}
      {showModal && (
        <Profile
          showModal={showModal}
          setShowModal={setShowModal}
          onClose={handleCloseModal}
          user={selectedUser}
        />
      )}
    </Styled.user>
  );
};
