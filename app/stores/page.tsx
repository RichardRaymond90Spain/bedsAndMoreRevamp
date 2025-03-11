import { Container, Typography, Grid, Paper, Box } from '@mui/material'

export default function StoresPage() {
  const stores = [
    {
      name: "Marbella Showroom",
      address: "Your Marbella Address",
      phone: "+34 952 667 095",
      hours: "Monday - Saturday: 10:00 - 20:00",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80"
    },
    // Add more stores as needed
  ]

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h2" sx={{ mb: 4 }}>Our Stores</Typography>
      <Grid container spacing={4}>
        {stores.map((store) => (
          <Grid item xs={12} md={6} key={store.name}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>{store.name}</Typography>
              <Box 
                sx={{ 
                  mb: 2, 
                  height: 200,
                  backgroundImage: `url(${store.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 1
                }}
              />
              <Typography sx={{ mb: 1 }}>{store.address}</Typography>
              <Typography sx={{ mb: 1 }}>{store.phone}</Typography>
              <Typography>{store.hours}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
} 