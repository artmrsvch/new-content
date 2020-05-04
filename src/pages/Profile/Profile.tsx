import React from 'react';

import { IUserInfo} from './RoleUser/UserInfo';
import {RoleUser} from './RoleUser/RoleUser';

const Profile: React.FC = () => {
  const userInfo: IUserInfo = {
    name: 'Артем Забиров',
    date: '22.04.2020',
    products: '653',
    withError: 78,
    withEdits: '87',
    payment: {
      name: 'Аленбергер Максим Виталиевич',
      type: 'Приват24',
      requisites: '4149 4991 2785 8700',
    },
    toPay: 3475,
  };

  return (
    <section className="section section_withHeader section-profile">
      <div className="profile-info">
        <RoleUser userData={userInfo}/>
      </div>
    </section>
  );
};

export default Profile;
