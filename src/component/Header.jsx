import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Button, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { HeaderContainer } from './Header.style';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Header = ({toggleOpen}) => {
  
    const [anchorEl, setAnchorEl] = useState(null);

    const handleTooltipOpen = (event) => {
      setAnchorEl(event.currentTarget); 
    };

    const handleTooltipClose = () => {
      setAnchorEl(null);
    };

    const isMenuOpen = Boolean(anchorEl);


    return (
        <HeaderContainer>
            
            <Button onClick={toggleOpen} sx={{borderRadius: '10px', fontSize:'20px', minWidth:'20px','&:focus': {
          outline: 'none',
          boxShadow: 'none', 
        },
        '&:active': {
          outline: 'none', 
          boxShadow: 'none',
        },}}>
                <MenuIcon sx={{fontSize:'25px', minWidth: '1px', color: 'black'}}></MenuIcon>
            </Button>
            <Typography sx={{fontSize:'25px', fontFamily:'serif'}}>PULP</Typography>
            <Tooltip sx={{marginLeft:'auto', marginRight:'60px'}}>
              <IconButton onClick={handleTooltipOpen}>
                <Avatar>A</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleTooltipClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{
                "& .MuiPaper-root": {
                  borderRadius: "20px",
                  padding: "4px", 
                },
              }}
            >
              <MenuItem onClick={handleTooltipClose}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleTooltipClose}>
                <Avatar /> My account
              </MenuItem>
            </Menu>
        </HeaderContainer>
    )
}

export default Header