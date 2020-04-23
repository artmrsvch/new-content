import React from 'react';

import { IUserInfo, UserInfo } from './RoleUser/UserInfo';

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
        <UserInfo userData={userInfo} />
        <div className="profile-work">
          <h3 className="profile-work__title">Информация о работе</h3>
          <div className="profile-work-info">
            <ul className="profile-work-links">
              <li className="profile-work-links__item">
                <span className="profile-work-links__text">Как правильно заводить товар:</span>
                <a
                  className="profile-work-links__href"
                  href="https://docs.google.com/document/d/1xLnNghW7Z9TX_Gcsc6yJ19j40-YqV3hSp7EGECWAcu0/edit">
                  Инструкция
                </a>
              </li>
              <li className="profile-work-links__item">
                <span className="profile-work-links__text">Алгоритм работы и обязанности:</span>
                <a
                  className="profile-work-links__href"
                  href="https://docs.google.com/document/d/1-0Vwkvh9KWjkUtYQpcsNVS2pSu_jVlJNmC3TeHYRA98/edit">
                  Инструкция
                </a>
              </li>
              <li className="profile-work-links__item">
                <span className="profile-work-links__text">Правила ведения отчетости:</span>
                <a
                  className="profile-work-links__href"
                  href="https://docs.google.com/document/d/1fQOQrmhlnqgYmKzmNsCIclMlL4VbxhR8N08bbGFWwRE/edit">
                  Инструкция
                </a>
              </li>
              <li className="profile-work-links__item">
                <span className="profile-work-links__text">Список партнеров:</span>
                <a
                  className="profile-work-links__href"
                  href="https://docs.google.com/document/d/1fQOQrmhlnqgYmKzmNsCIclMlL4VbxhR8N08bbGFWwRE/edit">
                  Список
                </a>
              </li>
            </ul>
            <div className="profile-work-offical"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
