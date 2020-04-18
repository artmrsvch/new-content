import React from 'react';

const ProductTable: React.FC = () => {
  interface ProductType {
    category: string;
    price: string;
    name: string;
    sku: string;
    warranty: string;
    url: string;
    comment: string;
    date: string;
  }

  const products: ProductType[] = [
    {
      category: 'Стеллажи | Стеллажи',
      price: '10.00',
      name: 'Barsky Homework Universal BUМ-01',
      sku: 'BUM-01-0011',
      warranty: '12',
      url: 'https://barsky.ua/product/modul-barsky-universal.html#/37-cvet-korichnevyj',
      comment: '',
      date: '2020-04-17 18:10:10',
    },
    {
      category: 'Полезные товары для дома | Полезные товары для дома',
      price: '8.00',
      name: 'Шарики надувные METR+ MK 3396 для моделирования 50 шт.',
      sku: '14029-0408',
      warranty: '',
      url: 'https://rozetka.com.ua/149011977/p149011977/',
      comment: '',
      date: '2020-04-17 18:10:10',
    },
    {
      category: 'Полезные товары для дома | Полезные товары для дома',
      price: '8.00',
      name: 'Шарики надувные METR+ MK 1522 10 дюймов, 50 шт.',
      sku: '14027-0408',
      warranty: '',
      url: 'https://rozetka.com.ua/122092896/p122092896/',
      comment: '',
      date: '2020-04-17 18:10:10',
    },
  ];
  return (
    <table>
      <tbody className="product-list">
        <tr className="descript-bar">
          <th></th>
          <th>Категория | Набор атрибутов</th>
          <th>Название</th>
          <th>Код товара(СКЮ)</th>
          <th>Гарантия</th>
          <th>Источник</th>
          <th>Комментарий</th>
          <th>Дата выдачи</th>
        </tr>
        {products.map((product, index) => (
          <tr key={index} className="product">
            <td>
              <div className="checkbox">
                <label className="checkbox-label">
                  <input type="checkbox" name="checkBtn" className="form-checkbox" />
                  <span className="checkbox-style"></span>
                </label>
              </div>
            </td>
            <td>{product.category}</td>
            <td className="product__name">{product.name}</td>
            <td>{product.sku}</td>
            <td>{product.warranty}</td>
            <td>
              <a href={product.url} className="product-link">
                Ссылка
              </a>
            </td>
            <td>{product.comment}</td>
            <td>{product.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
