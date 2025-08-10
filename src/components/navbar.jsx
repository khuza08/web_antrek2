import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const navItems = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang', to: '/tentang' },
  { label: 'Guru', to: '/guru' },
  { label: 'Prestasi', to: '/achievements' },
  { label: 'Galeri', to: '/gallery' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box
      sx={{
        width: 250,
        color: '#fff',             
        height: '100%',
      }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton aria-label="close menu" onClick={handleDrawerToggle} sx={{ color: '#fff' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.to}
              sx={{ color: '#fff', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            component={RouterLink}
            to="/contact"
            sx={{ color: '#fff', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
          >
            <ListItemText primary="Hubungi" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: '#171717',   
          color: '#fff',        
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          {/* logo/title */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              color: 'inherit',  
              textDecoration: 'none',
              fontWeight: 'bold',
              letterSpacing: 1.5,
              userSelect: 'none',
            }}
          >
            SMK ANTARTIKA 2 SIDOARJO
          </Typography>

          {/* desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={RouterLink}
                to={item.to}
                sx={{
                  color: '#fff',
                  textTransform: 'none',
                  fontWeight: 'medium',
                  '&:hover': { color: '#ffeb3b' }, 
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              component={RouterLink}
              to="/contact"
              variant="outlined"
              sx={{
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.6)',
                textTransform: 'none',
                ml: 2,
                '&:hover': {
                  bgcolor: '#ffeb3b',
                  color: '#000',
                  borderColor: '#ffeb3b',
                },
              }}
            >
              Hubungi
            </Button>
          </Box>

          {/* mobile drawer */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon sx={{ color: '#fff' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            bgcolor: '#121212',
            color: '#fff',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* space */}
      <Toolbar />
    </>
  )
}
