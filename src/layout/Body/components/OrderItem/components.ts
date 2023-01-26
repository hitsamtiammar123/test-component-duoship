import { styled } from '@mui/material/styles';
import { Accordion as BaseAccordion, AccordionSummary as BaseAccordionSummary, AccordionDetails as BaseAccordionDetails, Button } from '@mui/material';

export const Accordion = styled(BaseAccordion)({
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

export const AccordionSummary = styled(BaseAccordionSummary)({
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
  '@media screen and (max-width: 1024px)': {
    margin: '20px',
    '.order-separator': {
      display: 'none'
    }
  },
  '@media screen and (max-width: 425px)': {
    '&.MuiAccordionSummary-root': {
      height: 'auto'
    }
  }
});

export const AccordionDetails = styled(BaseAccordionDetails)({
  background: '#F5F5F5',
})

export const ViewItemButton = styled(Button)({
  height: '36px',
  borderRadius: '8px',
  textTransform: 'none',
  '@media screen and (max-width: 425px)':{
    marginTop: '15px'
  }
})

export const RightButton = styled(Button)({
  height: '47px',
  borderRadius: '12px',
  textTransform: 'none',
  marginBottom: '23px',
  width: '251px',
  '@media screen and (max-width: 1024px) ': {
    width: '100%'
  }
})