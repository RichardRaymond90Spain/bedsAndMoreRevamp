import { Container, Typography, Grid } from '@mui/material'

export default function BedsPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h2" sx={{ mb: 4 }}>Beds & Bed Bases</Typography>
      <Grid container spacing={3}>
        {/* Add bed products here */}
      </Grid>
    </Container>
  )
} 