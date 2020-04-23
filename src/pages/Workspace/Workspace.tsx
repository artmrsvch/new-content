import React from 'react';

import { Select } from '../../components';
import ProductTable from './ProductTable';

const Workspace: React.FC = () => {
  const selectListsProduct = (e: React.ChangeEvent<EventTarget>): void => {
    e.stopPropagation()
    const target = e.target as HTMLInputElement;

    if (target.tagName === 'SELECT' && target.value === 'Выполняется') {
      console.log(target.value);
    } else if (target.tagName === 'SELECT' && target.value === 'Добавлен') {
      console.log(target.value);
    } else if (target.tagName === 'SELECT' && target.value === 'Не добавлен') {
      console.log(target.value);
    }
    
  }

  return (
    <section className="section section_withHeader section-workspace">
      <div className="container workspace-container">
        <div onChange={selectListsProduct} className="explanatory">
          <Select options={['Выполняется', 'Добавлен', 'Не добавлен']} />
          <ul className="work-info">
            <li className="work-info__item">
              <span className="work-info__descript">Отображено:</span>
              <span className="work-info__int">240</span>
            </li>
            <li className="work-info__item">
              <span className="work-info__descript">Доработать:</span>
              <span className="work-info__int work-info__int_red">28</span>
            </li>
            <li className="work-info__item">
              <span className="work-info__descript">Параметры:</span>
              <span className="work-info__int work-info__int_green">10</span>
            </li>
          </ul>
        </div>
        <ProductTable />
      </div>
    </section>
  );
};

export default Workspace;
