"use client"

import * as React from "@/lib/node_modules/@types/react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from "@/lib/node_modules/@mui/material"
import { Menu as MenuIcon, ShoppingCart, Phone } from "@/lib/node_modules/@mui/icons-material"

const navItems = ["Beds", "Mattresses", "Headboards", "Soft Furnishings", "Furniture & Decoration"]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ bgcolor: "background.default" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              flexGrow: { xs: 1, md: 0 },
              fontWeight: 700,
              color: "primary.main",
              textDecoration: "none",
            }}
          >
            BEDS & MORE
          </Typography>

          {isMobile ? (
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={() => setMobileOpen(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", gap: 2 }}>
              {navItems.map((item) => (
                <Button key={item} color="inherit">
                  {item}
                </Button>
              ))}
            </Box>
          )}

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button startIcon={<Phone />} sx={{ display: { xs: "none", md: "flex" } }}>
              +34 952 667 095
            </Button>
            <IconButton color="inherit">
              <ShoppingCart />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <List sx={{ width: 250 }}>
          {navItems.map((item) => (
            <ListItem button key={item}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  )
}

