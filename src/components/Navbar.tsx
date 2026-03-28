import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import Button from '@mui/material/Button';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="flex flex-row gap-2 p-8">
      <AppBar
        color="transparent"
        position="static"
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          backgroundImage: 'none',
          boxShadow: 'none',
          overflow: 'visible',
        }}
      >
        <Container maxWidth="xl" sx={{ overflow: 'visible' }}>
          <Toolbar disableGutters sx={{ overflow: 'visible' }}>
            <Typography
              className="navbar-stroke-text"
              variant="h4"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                pl: 1,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'inherit',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#16db65',
                textDecoration: 'none',
              }}
            >
              Oscar Nazarit
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
                slotProps={{
                  paper: {
                    sx: {
                      mt: 1,
                      minWidth: 220,
                      border: '1px solid rgba(255,255,255,0.2)',
                      backgroundColor: 'rgba(0,0,0,0.9)',
                      backgroundImage: 'none',
                      backdropFilter: 'blur(8px)',
                    },
                  },
                  list: {
                    sx: {
                      py: 0.5,
                    },
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.path}
                    component={Link}
                    to={page.path}
                    onClick={handleCloseNavMenu}
                    className="nav-hover-link"
                    sx={{
                      borderRadius: 1,
                      mx: 0.5,
                      my: 0.25,
                      '&:hover': { backgroundColor: 'rgba(74,146,241,0.14)' },
                    }}
                  >
                    <Typography
                      className="nav-hover-link-label navbar-stroke-text"
                      sx={{ textAlign: 'center' }}
                    >
                      {page.label}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              className="navbar-stroke-text"
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'inherit',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#16db65',
                textDecoration: 'none',
              }}
            >
              O.Nazarit
            </Typography>
            <Box
              sx={{
                ml: 'auto',
                flexGrow: 1,
                maxWidth: 720,
                justifyContent: 'space-evenly',
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.path}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  className="nav-hover-link"
                  sx={{
                    my: 2,
                    color: '#4a92f1',
                    display: 'block',
                    flex: 1,
                    textAlign: 'center',
                    '&:hover': { color: '#4a92f1', backgroundColor: 'transparent' },
                    '&:active': { color: '#4a92f1' },
                    '&.Mui-focusVisible': { color: '#4a92f1' },
                    '& .MuiTouchRipple-child': { backgroundColor: '#4a92f1' },
                  }}
                >
                  <span className="nav-hover-link-label navbar-stroke-text">{page.label}</span>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
