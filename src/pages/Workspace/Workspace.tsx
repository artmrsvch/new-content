import React from 'react';
import {Link} from 'react-router-dom';

import {Select} from '../../components';
import ProductTable from './ProductTable';

const Workspace: React.FC = () => {
  return (
    <section className="section section-workspace">
      <div className="container workspace-container">
        <div className="explanatory">
          <Select />
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
        <div className="board">
          <ProductTable />
        </div>
      </div>
    </section>
  );
};

export default Workspace;
