import React from 'react';
import { InputAdornment, Grid } from '@mui/material';
import { Search, Sort, ArrowDown } from 'src/svg';
import { GrayButton, TextField} from './components';
import './styles.scss';

export default function SearchBar(){
  return (
    <Grid container className="search-bar" direction="row" justifyContent={ { sm: 'space-between', xs: 'center'} }>
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
      <Grid item container alignItems={{ xs: 'center', sm: 'center' }} justifyContent={{ xs: 'center', sm: 'space-between' }} sm={2} xs={12}>
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
