import React from 'react';

import { Checkbox } from '../../../components';

export const Params: React.FC<any> = () => {
  const attrs: IAttr[] = [
    {
      type: 'Материал',
      property: 'Узкозахватный',
      category: 'Полезные товары для дома | Полезные товары для дома',
      name: 'Шарики надувные METR+ MK 3396 для моделирования 50 шт.',
      sku: '14029-0408',
      comment: 'Выбрать из существующих',
    },
    {
      type: 'Производитель',
      property: 'Узкозахватный',
      category: 'Полезные товары для дома | Полезные товары для дома',
      name: 'Шарики надувные METR+ MK 3396 для моделирования 50 шт.',
      sku: '14029-0408',
    },
    {
      type: 'Цвет',
      property: 'Узкозахватный',
      category: 'Полезные товары для дома | Полезные товары для дома',
      name: 'Шарики надувные METR+ MK 3396 для моделирования 50 шт.',
      sku: '14029-0408',
      comment: 'Выбрать из существующих',
    },
    {
      type: 'Серия',
      property: 'Узкозахватный',
      category: 'Полезные товары для дома | Полезные товары для дома',
      name: 'Шарики надувные METR+ MK 3396 для моделирования 50 шт.',
      sku: '14029-0408',
    },
  ];

  return (
    <div className='board'>
      <table>
        <tbody className='product-list'>
          <tr className='descript-bar'>
            <th>
              <Checkbox isMain={true} />
            </th>
            <th>Тип</th>
            <th>Значение</th>
            <th>Код товара(СКЮ)</th>
            <th>Комментарий</th>
          </tr>
          {attrs.map((attr, index) => (
            <tr key={index} className='product'>
              <td>
                <Checkbox />
              </td>
              <td data-type='type'>{attr.type}</td>

              <td data-type='property'>{attr.property}</td>
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
