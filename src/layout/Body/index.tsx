import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { OrderItem } from './components';
import moment from 'moment';
import { OrderItemProps } from './components/OrderItem'
import './styles.scss';

const DUMMY_DATA: Array<OrderItemProps> = [
  {
    orderId: 205,
    delivered: moment('2021-04-05', 'YYYY-MM-DD').toDate(),
    items: [
      {
        itemId: 1,
        name: 'Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB',
        eligibleThrough: moment('2023-12','YYYY-MM').toDate(),
        purchasedDistributor: 'eliquid.com',
        quantity: 1
      },
      {
        itemId: 2,
        name: 'PS5 Console- Horizon Forbidden West Bundle',
        eligibleThrough: moment('2024-01','YYYY-MM').toDate(),
        purchasedDistributor: 'eliquid.com',
        quantity: 2
      },
      {
        itemId: 3,
        name: 'Barang Jadi-jadian hehe',
        eligibleThrough: moment('2024-01','YYYY-MM').toDate(),
        purchasedDistributor: 'eliquid.com',
        quantity: 2
      },
    ],
    orderPlaced: moment('2022-04-05', 'YYYY-MM-DD').toDate(),
    totalPrice: 3555,
    shippedTo: 'Rebecca Williams'
  },
  {
    orderId: 206,
    delivered: moment('2021-05-12', 'YYYY-MM-DD').toDate(),
    items: [
      {
        itemId: 1,
        name: 'Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB',
        eligibleThrough: moment('2023-12','YYYY-MM').toDate(),
        purchasedDistributor: 'eliquid.com',
        quantity: 1
      },
      {
        itemId: 2,
        name: 'PS5 Console- Horizon Forbidden West Bundle',
        eligibleThrough: moment('2024-01','YYYY-MM').toDate(),
        purchasedDistributor: 'eliquid.com',
        quantity: 2
      },
      {
        itemId: 3,
        name: 'Barang Jadi-jadian hehe',
        eligibleThrough: moment('2024-01','YYYY-MM').toDate(),
        purchasedDistributor: 'eliquid.com',
        quantity: 2
      },
    ],
    orderPlaced: moment('2022-12-05', 'YYYY-MM-DD').toDate(),
    totalPrice: 5552,
    shippedTo: 'Rebecca Williams'
  },
]


export default function Body(){
  const [displayList, setDisplayList] = useState<Array<boolean>>(DUMMY_DATA.map(() => false));

  function onClick(event: React.SyntheticEvent, expanded: boolean, index: number){
    const newList = [...displayList];
    newList[index] = expanded;
    setDisplayList(newList);
  }

  return (
    <Grid container>
        {DUMMY_DATA.map((item, index) => <OrderItem key={item.orderId} {...item} isDisplay={displayList[index]} onClick={(event, expanded) => onClick(event, expanded, index)} />)}
    </Grid>
  )
}