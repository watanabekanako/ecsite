import Head from 'next/head';
import Link from 'next/link';
import useSWR, { useSWRConfig } from 'swr';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/cart.module.css';
import styles from '..//styles/common.module.css';
const fetcher = (url: any) => fetch(url).then((res) => res.json());
function CartOption({ items, quantity }: any) {
  <tr key={''}>
    <td className="cart-item-name">
      <div className="cart-item-icon">
        <Image src={cartitem.img} width={200} height={143} />
      </div>
      <span>{cartitem.name}</span>
    </td>

    <td>
      <span className="price">{/* &nbsp;{cartitem.size} */}</span>
      {cartitem.price.toLocaleString()}円 {cartitem.quantity}個
    </td>

    <td>
      {cartitem.options
        .filter((option: any) => option)
        .map((option: any, index: any) => {
          return (
            // <li key={index}>{option}&nbsp;200円</li>
            <li key={index}>
              {option?.name}: {option?.price.toLocaleString()}円 ×
              {option?.quantity}
            </li>
          );
        })}
    </td>
    {/* <td>
{cartitem.options.map(
(option: any, index: any) => {
  return (
    <li key={index}>{option}&nbsp;200円</li>
  );
}
)}
</td> */}

    <td>
      <span className="text-center">
        <button onClick={() => setCount(count - 1)}>-</button>
        <input type="text" value={quantity} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </span>
    </td>
    <td>
      <span className="text-center">
        {cartitem.subtotal.toLocaleString()}円
      </span>
    </td>

    <td>
      <button
        className={`${style.btn}`}
        onClick={async () => {
          // let number = index + 1
          await fetch(
            `http://localhost:8000/cartItems/${cartitem.id}`,
            { method: 'DELETE' }
          ).then((res) => {
            if (res.status === 200) {
              mutate('http://localhost:8000/cartItems');
            }
          });
        }}
      >
        削除
      </button>
    </td>
  </tr>;
}
