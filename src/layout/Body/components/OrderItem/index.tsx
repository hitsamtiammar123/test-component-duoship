import React from 'react';
import moment from 'moment';
import numbro from 'numbro';
import { Accordion, AccordionDetails, AccordionSummary, RightButton, ViewItemButton} from './components';
import { Grid } from '@mui/material';
import './styles.scss';

export type ItemBoughtProps = {
  itemId: number,
  name: string,
  purchasedDistributor: string,
  eligibleThrough: Date | string,
  quantity: number
}

export type OrderItemProps = {
    orderPlaced: string | Date,
    totalPrice: number,
    shippedTo: string,
    orderId: number,
    delivered: Date | null,
    items: Array<ItemBoughtProps>
}

export type OrderItemToogle = {
  isDisplay: boolean,
  onClick: (event: React.SyntheticEvent, expanded: boolean) => void
}

export default function OrderItem(props: OrderItemProps & OrderItemToogle){
  const { orderId, orderPlaced, totalPrice, shippedTo, delivered, items, isDisplay, onClick } = props;
  function onLinkClicked(e: React.MouseEvent<HTMLAnchorElement>){
    e.stopPropagation();
  }

  return (
    <Accordion expanded={isDisplay} onChange={onClick} className="accordion-item">
    <AccordionSummary>
      <Grid container direction="row">
        <Grid item spacing={3} container direction="row" sm xs={12}>
          <Grid item container sm={3} xs={12} direction="column">
            <span className="text">ORDER PLACED</span>
            <span className="text-sm mt-7px">{moment(orderPlaced).format('MMMM DD, YYYY')}</span>
          </Grid>
          <Grid item container sm={3} xs={12} direction="column">
            <span className="text">TOTAL PRICE</span>
            <span className="text-sm mt-7px">${numbro(totalPrice).format({ thousandSeparated:true })}</span>
          </Grid>
          <Grid item container sm={3} xs={12} direction="column">
            <span className="text">SHIPPED TO</span>
            <span className="text-sm text-purple mt-7px">{shippedTo}</span>
          </Grid>
        </Grid>
        <Grid className="order-container" item sm={3} xs={12}>
          <Grid item container alignItems={{ sm:'center', xs: 'center' }} justifyContent={{ xs: 'space-between', sm: 'space-between' }} direction={{ md: 'row', sm: 'column', xs: 'row' }}>
            <span className="text">ORDER # {orderId}</span>
            <span className="text-lg extrabold">{isDisplay ? '-' : '+'}</span>
          </Grid>
          <Grid item container justifyContent="space-between" direction="row">
            <a onClick={onLinkClicked} href="/#order-detail" className="text-sm text-purple mt-7px">Order Detail</a>
            <span className="text light order-separator">|</span>
            <a onClick={onLinkClicked} href="/#order-invoice" className="text-sm text-purple mt-7px">Order Invoice</a>
          </Grid>
        </Grid>
      </Grid>
    </AccordionSummary>
    <AccordionDetails>
      <Grid direction="row" className="accordion-detail" container>
          <Grid item container direction="column" xs={12} lg>
            <span className="text extrabold main-title">Delivered {moment(delivered).format('MMMM DD')}</span>
            {items.map(item => (
                <Grid key={item.itemId} className="accordion-item-detail" container direction="row">
                  <Grid item container direction="column" sm xs={12}>
                    <span className="text text-black bold">{item.name}</span>
                    <span className="text-black text-sm mt-7px">
                      Purchased Distributor: <span className="text-purple light">{item.purchasedDistributor}</span>
                    </span>
                    <span className="text-black text-sm">
                      Return or replace items: Eligible through {moment(item.eligibleThrough).format('MMMM DD, YYYY')}
                    </span>
                    <span className="text-black text-sm light">
                      Quantity : x{item.quantity}
                    </span>
                  </Grid>
                  <Grid item container sm={3} xs={12}>
                    <ViewItemButton  color="secondary" variant="contained">
                      <span className="text-sm">View Item</span>
                    </ViewItemButton>
                  </Grid>
                </Grid>
            ))}
          </Grid>
          <Grid item container className="right-bar" direction="column" xs={12} lg={3}>
            <RightButton color="secondary" variant="contained">
              <span className="text-sm light">Track Package</span>
            </RightButton>
            <RightButton color="info" variant="contained">
              <span className="text-sm light">Return or replace items</span>
            </RightButton>
            <RightButton color="info" variant="contained">
              <span className="text-sm light">Leave Seller Feedback</span>
            </RightButton>
            <RightButton color="info" variant="contained">
              <span className="text-sm light">Write Product Review</span>
            </RightButton>
            <RightButton color="info" variant="contained">
              <span className="text-sm light">Get product support</span>
            </RightButton>
          </Grid>
      </Grid>
    </AccordionDetails>
  </Accordion>
  )
}