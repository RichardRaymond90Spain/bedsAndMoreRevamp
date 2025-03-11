"use client"

import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from "@/lib/node_modules/@mui/material"

const products = [
  {
    title: "Luxury Beds & Bed Bases",
    description: "Premium quality beds and bed bases at truly astonishing prices!",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800",
  },
  {
    title: "Premium Mattresses",
    description: "Premium mattresses from Hypnos, Sealy, Pikolin and other quality brands!",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800",
  },
  {
    title: "Designer Headboards",
    description: "Wide variety of headboards in many styles, designs and sizes!",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800",
  },
]

export default function ProductGrid() {
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Typography component="h2" variant="h3" align="center" sx={{ mb: 6 }}>
        Our Collections
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.title} xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={product.image}
                alt={product.title}
                sx={{
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="h3">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {product.description}
                </Typography>
                <Button variant="outlined" color="primary">
                  View Collection
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

