import React, { useState } from 'react';
import { Grid, Button, Menu, MenuItem, IconButton } from '@mui/material';
import { Bell, Calendar, Message, ArrowDown } from 'src/svg';
import { FotoOrang } from 'src/images';
import './styles.scss';

export default function Header(){
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container direction={{ sm: 'row', xs: 'column'}} justifyContent="space-between" className="header">
      <h1>Orders</h1>
      <Grid item>
        <Grid className="right-container" justifyContent="space-between" alignItems="center" container>
          <IconButton>
            <img className="icon" src={Bell} alt="Bell"/>
          </IconButton>
          <IconButton>
            <img className="icon" src={Calendar} alt="Calendar"/>
          </IconButton>
          <IconButton>
            <img className="icon" src={Message} alt="Message" />
          </IconButton>
          <Button onClick={handleClick} id="dropdown-button" className="dropdown-button">
            <Grid container direction="row" justifyContent="space-between">
              <img src={FotoOrang} alt="Foto Orang" />
              <img src={ArrowDown} alt="Arrow Doqwn" />
            </Grid>
          </Button>
        </Grid>
        <Grid className="create-order-container" container direction="row" justifyContent={{ sm: 'flex-end', xs: 'center'}}>
          <Button className="create-order-button text-md" color="secondary" variant="contained">
            <span className="text-md light">Create Order</span>
          </Button>
        </Grid>
      </Grid>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Grid>
  )
}