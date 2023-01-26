import React from 'react';
import { styled } from '@mui/material/styles';
import moment from 'moment';
import numbro from 'numbro';
import { Grid, Accordion as BaseAccordion, AccordionSummary as BaseAccordionSummary, AccordionDetails as BaseAccordionDetails, Button } from '@mui/material';
import './styles.scss';

const Accordion = styled(BaseAccordion)({
  borderTopLeftRadius: '15px',
  borderTopRightRadius: '15px', 
  '&:first-of-type': {
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px', 
  },
  '&:before': {
    display: 'none'
  },
  '&.Mui-expanded': {
    marginBottom: '46px !important'
  },
  width: '100%',
  marginBottom: '20px'
});

const AccordionSummary = styled(BaseAccordionSummary)({
  borderTopLeftRadius: '15px',
  borderTopRightRadius: '15px', 
  borderTop: 'none',
  '&:first-of-type': {
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px', 
  },
  '&.MuiAccordionSummary-root': {
    padding: '18px',
    height: '108px'
  },
  background: 'white',
  padding: '18px',
});

const AccordionDetails = styled(BaseAccordionDetails)({
  background: '#F5F5F5',
})

const ViewItemButton = styled(Button)({
  height: '36px',
  borderRadius: '8px',
  textTransform: 'none'
})

const RightButton = styled(Button)({
  height: '47px',
  borderRadius: '12px',
  textTransform: 'none',
  marginBottom: '23px'
})

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

export default function OrderItem(props: OrderItemProps){
  const { orderId, orderPlaced, totalPrice, shippedTo, delivered, items } = props;
  function onLinkClicked(e: React.MouseEvent<HTMLAnchorElement>){
    e.stopPropagation();
  }

  return (
    <Accordion className="accordion-item">
    <AccordionSummary>
      <Grid container direction="row">
        <Grid item spacing={2} container direction="row" xs>
          <Grid item container xs={3} direction="column">
            <span className="text">ORDER PLACED</span>
            <span className="text-sm mt-7px">{moment(orderPlaced).format('MMMM DD, YYYY')}</span>
          </Grid>
          <Grid item container xs={3} direction="column">
            <span className="text">TOTAL PRICE</span>
            <span className="text-sm mt-7px">${numbro(totalPrice).format({ thousandSeparated:true })}</span>
          </Grid>
          <Grid item container xs={3} direction="column">
            <span className="text">SHIPPED TO</span>
            <span className="text-sm text-purple mt-7px">{shippedTo}</span>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid item container direction="row">
            <span className="text">ORDER # {orderId}</span>
          </Grid>
          <Grid item container justifyContent="space-between" direction="row">
            <a onClick={onLinkClicked} href="/#order-detail" className="text-sm text-purple mt-7px">Order Detail</a>
            <span className="text light">|</span>
            <a onClick={onLinkClicked} href="/#order-invoice" className="text-sm text-purple mt-7px">Order Invoice</a>
          </Grid>
        </Grid>
      </Grid>
    </AccordionSummary>
    <AccordionDetails>
      <Grid direction="row" className="accordion-detail" container>
          <Grid item container direction="column" xs>
            <span className="text extrabold main-title">Delivered {moment(delivered).format('MMMM DD')}</span>
            {items.map(item => (
                <Grid key={item.itemId} className="accordion-item-detail" container direction="row">
                  <Grid item container direction="column" xs>
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
                  <Grid item container xs={2}>
                    <ViewItemButton  color="secondary" variant="contained">
                      <span className="text-sm">View Item</span>
                    </ViewItemButton>
                  </Grid>
                </Grid>
            ))}
          </Grid>
          <Grid item container className="right-bar" direction="column" xs={3}>
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