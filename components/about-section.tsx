"use client"

import { Box, Container, Typography, Grid } from "@mui/material"

export default function AboutSection() {
  return (
    <Box sx={{ bgcolor: "secondary.light", py: 8 }}>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1540638349517-3abd5afc5847?auto=format&fit=crop&w=800"
              alt="Showroom"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Yorkshire Linen Beds & More
            </Typography>
            <Typography variant="body1" paragraph>
              Yorkshire Linen Beds and More has two bed, mattress and furniture showrooms on Spain's beautiful Costa del
              Sol. Close to OS Miramar in Fuengirola, Yorkshire Linen Beds & More is a wonderful showroom of beds,
              mattresses, bed linen, curtains, cushions and much larger items of beds, mattresses, furniture, decoration
              and inspirational ideas for your home!
            </Typography>
            <Typography variant="body1">
              We have been trading at Yorkshire Linen Beds and More for 15 years and our staff have all trained have
              accumulated a wealth of valuable knowledge and can advise you every step of buying a new bed or mattress,
              choosing the right length of curtains for your windows or completely furnishing a home or holiday
              apartment.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

