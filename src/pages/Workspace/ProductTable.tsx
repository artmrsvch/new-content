import React, { SyntheticEvent } from 'react';
import { KebabButton, Checkbox } from '../../components';

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

  const copyToBuffer = (target: HTMLElement): void => {
    let range = new Range();
    range.selectNodeContents(target);
    document.getSelection()!.removeAllRanges();
    document.getSelection()!.addRange(range);

    document.execCommand('copy');
  };
  const clickHeandler = (e: SyntheticEvent) => {
    let target = e.target as any;
    const dataType: string | undefined = target.dataset.type;
    if (dataType === 'name' || dataType === 'category' || dataType === 'sku') {
      copyToBuffer(target);
    } else if (dataType === 'url') {
      e.preventDefault();
      window.open(target.href, '_blank');
    }
  };
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
    <table onClick={clickHeandler}>
      <tbody className="product-list">
        <tr className="descript-bar">
          <th></th>
          <th>Категория | Набор атрибутов</th>
          <th>Название</th>
          <th>Код товара(СКЮ)</th>
          <th>Гарантия</th>
          <th>Источник</th>
          <th>Комментарий</th>
          <th></th>
        </tr>
        {products.map((product, index) => (
          <tr key={index} className="product" data-date={product.date} data-price={product.price}>
            <td>
              <Checkbox />
            </td>
            <td data-type="category" className="product-item product-item__category">
              {product.category}
            </td>
            <td data-type="name" className="product-item product-item__name">
              {product.name}
            </td>
            <td data-type="sku" className="product-item product-item__sku">
              {product.sku}
            </td>
            <td data-type="warranty">{product.warranty}</td>
            <td>
              <a data-type="url" href={product.url} className="product-link">
                Ссылка
              </a>
            </td>
            <td data-type="comment">{product.comment}</td>
            <td>
              <KebabButton />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
