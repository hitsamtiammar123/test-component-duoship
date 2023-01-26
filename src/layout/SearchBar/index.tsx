import React from 'react';
import { TextField as BaseTextField, InputAdornment, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Search, Sort, ArrowDown } from 'src/svg';
import './styles.scss';

const GrayButton = styled(Button)({
  backgroundColor: '#F3F3F3',
  borderRadius: 10.7274,
  textTransform: 'none',
  color: 'black',
  height: 37,
  padding: '9px 16px'
});

const TextField = styled(BaseTextField)({
  width: '419px',
  background: '#F8FAFB',
  border: 'none',
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    height: '54px',
    border: '1px solid #A3A3A3'
  }
});

export default function SearchBar(){
  return (
    <Grid container className="search-bar" direction="row" justifyContent="space-between">
      <Grid item>
        <TextField
          fullWidth
          id="search-input"
          label=""
          placeholder="Search Here"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Search} alt="Search" />
              </InputAdornment>
            ),
          }}
      />
      </Grid>
      <Grid item container alignItems="center" justifyContent="space-between" xs={2}>
        <GrayButton className="btn-1">
          <Grid container justifyContent="space-between" direction="row">
            <span className="text-xs">Status</span>
            <img src={ArrowDown} alt="ArrowDown" />
          </Grid>
        </GrayButton>
        <GrayButton>
          <Grid container direction="row">
            <span className="text-xs">Sort</span>
            <img src={Sort} alt="Sort" />
          </Grid>
        </GrayButton>
      </Grid>
    </Grid>
  )
}
