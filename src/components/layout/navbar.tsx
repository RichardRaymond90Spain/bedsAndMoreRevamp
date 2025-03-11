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
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { Menu as MenuIcon } from "@mui/icons-material"

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
      position="sticky" 
      color="default" 
      elevation={0} 
      sx={{ 
        bgcolor: "background.default",
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        height: '60px'
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Toolbar 
          disableGutters 
          sx={{ 
            minHeight: '60px !important',
            px: 2,
            py: 0,
            justifyContent: 'space-between'
          }}
        >
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#B19B9B",
                fontSize: "1.25rem",
                mr: 4
              }}
            >
              BEDS & MORE
            </Typography>
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
                <Link 
                  href="/contact"
                  style={{ textDecoration: 'none' }}
                >
                  <Button 
                    sx={{ 
                      fontSize: '14px',
                      color: '#000',
                      '&:hover': {
                        color: '#B19B9B'
                      }
                    }}
                  >
                    Contact
                  </Button>
                </Link>
              </Box>
            </>
          )}
        </Toolbar>
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