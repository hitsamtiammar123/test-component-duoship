import { styled } from '@mui/material/styles';
import { TextField as BaseTextField, Button } from '@mui/material';

export const GrayButton = styled(Button)({
  backgroundColor: '#F3F3F3',
  borderRadius: 10.7274,
  textTransform: 'none',
  color: 'black',
  height: 37,
  padding: '9px 16px'
});

export const TextField = styled(BaseTextField)({
  width: '419px',
  background: '#F8FAFB',
  border: 'none',
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    height: '54px',
    border: '1px solid #A3A3A3'
  }
});