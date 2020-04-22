import React, { Dispatch, SetStateAction, SyntheticEvent } from 'react';

const Profile: React.FC = () => {
  const getPercent = (allProducts: string | number, withErrors: string | number): number => {
    const result: string = ((Number(withErrors) / Number(allProducts)) * 100).toFixed(2);

    return Number(result);
  };

  return (
    <section className="section section_withHeader section-profile">
      <div className="profile">
        <span className="profile__name">Артем Забиров</span>
        <span className="profile__date">
          Дата регистрации: <b className="loadable-value">22.04.2020</b>
        </span>
        <div className="profile-state">
          <span className="profile-state__products">
            Выполненных товаров: <b className="loadable-value">2453 шт</b>
          </span>
          <span className="profile-state__errors">
            Товаров с ошибками: <b className="loadable-value__red">41 шт</b>
          </span>
          <span className="profile-state__errors">
            Доработанных товаров: <b className="loadable-value__green">15 шт</b>
          </span>
          <span className="profile-state__percent">
            Процент ошибок: <b className="loadable-value">{`${getPercent('2453', '112')}%`}</b>
          </span>
        </div>
        <span className="profile-state__paid">
          К оплате: <b className="loadable-value">3475 руб</b>
        </span>
      </div>
    </section>
  );
};

export default Profile;
