"use client"

import * as React from "react"
import Link from "next/link"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { Menu as MenuIcon } from "@mui/icons-material"
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Image from "next/image"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "BEDS", href: "/beds" },
  { name: "MATTRESSES", href: "/mattresses" },
  { name: "HEADBOARDS", href: "/headboards" },
  { name: "SOFT FURNISHINGS", href: "/soft-furnishings" },
  { name: "FURNITURE & DECORATION", href: "/furniture-decoration" },
  { name: "STORES", href: "/stores" }
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <AppBar 
      position="fixed"
      sx={{ 
        bgcolor: 'white', 
        boxShadow: 1,
        height: '60px',
        top: '32px',
        zIndex: 1100
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          height: '100%'
        }}>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Yorkshire Linen Beds & More"
              width={180}
              height={50}
              priority
            />
          </Link>

          {isMobile ? (
            <IconButton 
              color="inherit" 
              aria-label="open drawer"
              onClick={() => setMobileOpen(true)}
              sx={{ ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-start", gap: 3 }}>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button 
                      color="inherit"
                      sx={{ 
                        fontSize: '13px',
                        fontWeight: 400,
                        color: '#000',
                        minWidth: 'auto',
                        padding: '8px 0',
                        '&:hover': {
                          backgroundColor: 'transparent',
                          color: '#B19B9B'
                        }
                      }}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Link href="/stores" style={{ textDecoration: 'none' }}>
                  <Button 
                    variant="outlined" 
                    sx={{ 
                      borderColor: '#B19B9B',
                      color: '#B19B9B',
                      '&:hover': {
                        borderColor: '#927e7e',
                        bgcolor: 'rgba(177, 155, 155, 0.04)'
                      }
                    }}
                  >
                    Find Us
                  </Button>
                </Link>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Button 
                    variant="outlined"
                    sx={{ 
                      borderColor: '#B19B9B',
                      color: '#B19B9B',
                      '&:hover': {
                        borderColor: '#927e7e',
                        bgcolor: 'rgba(177, 155, 155, 0.04)'
                      }
                    }}
                  >
                    Contact
                  </Button>
                </Link>
              </Box>
            </>
          )}
        </Box>
      </Container>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <List sx={{ width: 250 }}>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <Link 
                href={item.href}
                style={{ textDecoration: 'none', width: '100%', color: 'inherit' }}
                onClick={() => setMobileOpen(false)}
              >
                <ListItemButton>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <Link 
              href="/stores"
              style={{ textDecoration: 'none', width: '100%', color: 'inherit' }}
              onClick={() => setMobileOpen(false)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <LocationOnIcon sx={{ color: '#B19B9B' }} />
                </ListItemIcon>
                <ListItemText 
                  primary="FIND US" 
                  sx={{ 
                    '& .MuiTypography-root': { 
                      color: '#B19B9B',
                      fontWeight: 500
                    } 
                  }} 
                />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link 
              href="/contact"
              style={{ textDecoration: 'none', width: '100%', color: 'inherit' }}
              onClick={() => setMobileOpen(false)}
            >
              <ListItemButton>
                <ListItemText primary="CONTACT" />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  )
} 