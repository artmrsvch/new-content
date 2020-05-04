import React from 'react';

import { Checkbox } from '../../../components';

export const UserReadyAttr: React.FC = () => {
  const attrs: IAttr[] = [
    {
      type: 'Тип',
      property: 'Узкозахватный',
      category: 'Полезные товары для дома | Полезные товары для дома',
      name: 'Шарики надувные METR+ MK 3396 для моделирования 50 шт.',
      sku: '14029-0408',
      comment: 'Выбрать из существующих',
    },
    {
      type: 'Тип',
      property: 'Узкозахватный',
      category: 'Полезные товары для дома | Полезные товары для дома',
      name: 'Шарики надувные METR+ MK 3396 для моделирования 50 шт.',
      sku: '14029-0408',
    },
    {
      type: 'Тип',
      property: 'Узкозахватный',
      category: 'Полезные товары для дома | Полезные товары для дома',
      name: 'Шарики надувные METR+ MK 3396 для моделирования 50 шт.',
      sku: '14029-0408',
      comment: 'Выбрать из существующих',
    },
    {
      type: 'Тип',
      property: 'Узкозахватный',
      category: 'Полезные товары для дома | Полезные товары для дома',
      name: 'Шарики надувные METR+ MK 3396 для моделирования 50 шт.',
      sku: '14029-0408',
    },
  ];

  return (
    <div className='user-attr'>
      <table>
        <tbody className='product-list'>
          <tr className='descript-bar'>
            <th>
              <Checkbox isMain={true} />
            </th>
            <th>Тип</th>
            <th>Значение</th>
            <th>Категория | Набор атрибутов</th>
            <th>Название</th>
            <th>Код товара(СКЮ)</th>
            <th>Комментарий</th>
          </tr>
          {attrs.map((attr, index) => (
            <tr key={index} className='product'>
              <td>
                <Checkbox />
              </td>
              <td data-type='warranty'>{attr.type}</td>

              <td data-type='comment'>{attr.property}</td>
              <td data-type='category' className='product-item product-item__category'>
                {attr.category}
              </td>
              <td data-type='name' className='product-item product-item__name'>
                {attr.name}
              </td>
              <td data-type='sku' className='product-item product-item__sku'>
                {attr.sku}
              </td>

              <td data-type='comment'>{attr.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface IAttr {
  type: string;
  property: string;
  category: string;
  name: string;
  sku: string;
  comment?: string;
}
