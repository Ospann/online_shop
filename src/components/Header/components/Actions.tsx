import React, { useState } from 'react';
import { IconButton, Select, MenuItem, ListItemIcon, Avatar, Divider, Box, Badge, Popover, SelectChangeEvent } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Image from 'next/image';
import useUserStore from '@/store/user.store';
import languageOptions from '@/constants/language';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CartModal from './CartModal';
import classes from '../header.module.css';

const Actions = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const { cart } = useUserStore();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedLanguage(event.target.value as string);
  };

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Select
        className='unborder'
        size="small"
        labelId="language-label"
        id="language"
        value={selectedLanguage}
        onChange={handleChange}
      >
        {languageOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <ListItemIcon>
              <Image
                src={`https://flagcdn.com/w20/${option.flag}.png`}
                alt={option.value}
                width={20}
                height={10}
              />
            </ListItemIcon>
            {option.value}
          </MenuItem>
        ))}
      </Select>
      <Box display="flex" gap="0.5rem" color="gray" alignItems="center">
        <IconButton size='small' color="inherit" onClick={handleLanguageClick}>
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCartOutlined />
          </Badge>
        </IconButton>
        <IconButton className="onlyPC" size='small' color="inherit">
          <EmailOutlinedIcon />
        </IconButton>
        <IconButton className="onlyPC" size='small' color="inherit">
          <NotificationsOutlinedIcon />
        </IconButton>
      </Box>
      <CartModal open={open} handleClose={handleClose} anchorEl={anchorEl} />
      <Divider orientation="vertical" flexItem />
      <Box display="flex" alignItems="center">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Box>
    </div>
  );
}

export default Actions;
