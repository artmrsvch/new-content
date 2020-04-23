import React from 'react';
import { Form, Field } from 'react-final-form';

import { InputBlock } from '../../Auth/InputBlock';

type QuantityProductType = { quantity?: string }; // or number?? need test
type QuantitySubmitType = { quantity: string };

const UserStatistic: React.FC = () => {
  const validate = (values: QuantityProductType): QuantityProductType => {
    const errors: QuantityProductType = {};
    if (!values.quantity) errors.quantity = 'Укажи сколько возьмешь';
    if (Number(values.quantity) > 20) errors.quantity = 'Максимум 20 товаров за раз';
    if (Number(values.quantity) <= 0) errors.quantity = 'Ты за меня придурка не держи';
    if (values.quantity) {
      const regExp = /^[0-9]+$/;
      const bool = regExp.test(values.quantity);
      if (!bool) errors.quantity = 'Только циферками';
    }
    return errors;
  };
  const submit = (fields: QuantitySubmitType) => {
    const formData = new FormData();
    formData.append('quantity', fields.quantity);
  };

  return (
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
        <Form
          onSubmit={submit}
          validate={validate}
          render={({ handleSubmit, invalid }) => (
            <form onSubmit={handleSubmit} className="profile-getProducts">
              <div className="products-inWork">
                <span className="products-inWork__text">В работе: </span>
                <span className="products-inWork__int">18 шт</span>
              </div>
              <h5 className="profile-getProducts__title">Взять товаров в работу</h5>
              <Field
                component={InputBlock}
                label="Колличество(до 20шт)"
                name="quantity"
                type="number"
                max="20"
                min="1"
                required
                setClass="profile-getProducts__input"
                placeholder="Сколько?"
              />
              <button className="workspace-submit__btn profile-getProducts__btn" type="submit">
                Взять
              </button>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default UserStatistic;
