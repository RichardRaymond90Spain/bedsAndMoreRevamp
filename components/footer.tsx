"use client"

import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material"
import { Facebook, Instagram, WhatsApp, Phone, Email, LocationOn } from "@mui/icons-material"

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", py: 6 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone fontSize="small" />
                <Link href="tel:+34952667095" color="inherit">
                  +34 952 667 095
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Email fontSize="small" />
                <Link href="mailto:info@bedsandmore.es" color="inherit">
                  info@bedsandmore.es
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOn fontSize="small" />
                <Typography variant="body2">Costa del Sol, Spain</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {["Beds", "Mattresses", "Headboards", "About Us", "Contact"].map((item) => (
                <Link key={item} href="#" color="inherit" underline="hover">
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton color="inherit">
                <Facebook />
              </IconButton>
              <IconButton color="inherit">
                <Instagram />
              </IconButton>
              <IconButton color="inherit">
                <WhatsApp />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, pt: 4, borderTop: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Yorkshire Linen Beds & More. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

