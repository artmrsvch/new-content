import React, { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showAsideBar } from '../../models/actions';

import { KebabButton, Checkbox, Select } from '../../components';
import Modal from './Modal';
import {
  selectAllCheckboxAndReturnProduct,
  copyToBuffer,
  searhParent,
  addLinkToProduct,
} from './helpers';

const ProductTable: React.FC = () => {
  const [state, setState] = useState<SelectProductType[]>([]);
  const [showMoreInfoOfProduct, setShowMoreInfoOfProduct] = useState<IModalWithProduct>({
    product: null,
    isModalOpen: false,
  });
  const dispatch = useDispatch();

  const changeProduct = (e: React.ChangeEvent<EventTarget>): void => {
    e.stopPropagation();

    const target = e.target as HTMLInputElement;
    const isChecked = target.checked;

    const parentElement: Node & ParentNode = target.parentNode!.parentNode!.parentNode!.parentNode!;
    const selectProduct: SelectProductType = {
      name: parentElement.children[2].textContent,
      sku: parentElement.children[3].textContent,
    };
    if (target.dataset.role === 'main') {
      const globalParent: Node & ParentNode = parentElement.parentNode!;
      const checkedProducts: SelectProductType[] = selectAllCheckboxAndReturnProduct(
        globalParent,
        isChecked
      );

      setState(checkedProducts);
    } else if (target.dataset.role === 'secondary') {
      if (isChecked) {
        setState([...state, selectProduct]);
      } else {
        const checkedProducts = state.filter((product: SelectProductType) => {
          return selectProduct.sku !== product.sku && selectProduct.name !== product.name;
        });
        setState(checkedProducts);
      }
    } else if (target.tagName === 'SELECT' && target.value === 'Выполняется') {
      console.log(target.value);
    }
  };
  const submitCheckedProducts = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const formElements = target.elements as any; //as HTMLFormControlCollection

    if (formElements.status.value === 'Добавлено') {
      const submitProducts = addLinkToProduct(state);
      console.log(submitProducts);
      dispatch(
        showAsideBar({
          status: true,
          isError: false,
          message: 'Отмечены как ВЫПОЛНЕНЫ',
        })
      );
    } else {
      const comment = formElements.userComment.value.trim();

      if (!comment.length) {
        dispatch(
          showAsideBar({
            status: true,
            isError: true,
            message: 'Комментарий обязателен',
          })
        );
      } else {
        dispatch(
          showAsideBar({
            status: true,
            isError: false,
            message: 'Отмечены как НЕ выполнены',
          })
        );
      }
    }
  };
  const clickHeandler = (e: SyntheticEvent): void => {
    let target = e.target as any;
    const dataType: string | undefined = target.dataset.type;

    if (dataType === 'name' || dataType === 'category' || dataType === 'sku') {
      copyToBuffer(target);
    } else if (dataType === 'url') {
      e.preventDefault();
      window.open(target.href, '_blank');
    } else if (dataType === 'open') {
      openModalWithProduct(target);
    }
  };

  const openModalWithProduct = (target: HTMLElement) => {
    const productCard: HTMLElement = searhParent(target);
    const product: IProductForModal[] = [
      {
        type: 'category',
        name: 'Категория | Набор атрибутов',
        value: productCard.children[1].textContent!,
      },
      {
        type: 'name',
        name: 'Название',
        value: productCard.children[2].textContent!,
      },
      {
        type: 'sku',
        name: 'Код товара(СКЮ)',
        value: productCard.children[3].textContent!,
      },
      {
        type: 'comment',
        name: 'Комментарий',
        value: productCard.children[6].textContent!,
      },
      {
        type: 'date',
        name: 'Дата выдачи',
        value: productCard.dataset.date!,
      },
      {
        type: 'price',
        name: 'Стоимость',
        value: productCard.dataset.price!,
      },
    ];

    setShowMoreInfoOfProduct({
      product,
      isModalOpen: true,
    });
  };
  const products: ProductType[] = [
    {
      category: 'Стеллажи | Стеллажи',
      price: '10.00',
      name: 'Barsky Homework Universal BUМ-01',
      sku: 'BUM-01-0011',
      warranty: '12',
      url: 'https://barsky.ua/product/modul-barsky-universal.html#/37-cvet-korichnevyj',
      comment: 'С источника',
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
    <>
      <div className="board">
        <table onClick={clickHeandler}>
          <tbody onChange={changeProduct} className="product-list">
            <tr className="descript-bar">
              <th>
                <Checkbox isMain={true} />
              </th>
              <th>Категория | Набор атрибутов</th>
              <th>Название</th>
              <th>Код товара(СКЮ)</th>
              <th>Гарантия</th>
              <th>Источник</th>
              <th>Комментарий</th>
              <th></th>
            </tr>
            {products.map((product, index) => (
              <tr
                key={index}
                className="product"
                data-date={product.date}
                data-price={product.price}>
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
      </div>
      <form onSubmit={submitCheckedProducts} className="workspace-submit">
        <Select options={['Добавлено', 'Не добавлено']} />
        <div className="workspace-comment">
          <div className="workspace-comment__title">Добавить комментарий</div>
          <textarea
            placeholder="Введите комментарий"
            className="workspace-comment__area"
            name="userComment"></textarea>
        </div>
        <button className="workspace-submit__btn" type="submit">
          Сохранить
        </button>
      </form>
      {showMoreInfoOfProduct.isModalOpen && (
        <Modal product={showMoreInfoOfProduct.product} closeModal={setShowMoreInfoOfProduct} />
      )}
    </>
  );
};
export interface ProductType {
  category: string;
  price: string;
  name: string;
  sku: string;
  warranty?: string;
  url?: string;
  comment: string;
  date: string;
}
export interface IProductForModal {
  type: string;
  name: string;
  value: string;
}
export interface SelectProductType {
  name: string | null;
  sku: string | null;
}
export interface IModalWithProduct {
  product: IProductForModal[] | null;
  isModalOpen: boolean;
}
export interface IAsideType {
  isOpen: boolean;
  isError: boolean;
  message: string;
}

export default ProductTable;
