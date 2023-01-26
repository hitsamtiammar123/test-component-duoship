import React from 'react';
import { Grid } from '@mui/material';
import { OrderItem } from './components';
import './styles.scss';


export default function Body(){
  return (
    <Grid container>
        <OrderItem />
        <OrderItem />
    </Grid>
  )
}