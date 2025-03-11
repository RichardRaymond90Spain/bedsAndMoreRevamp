import { Container, Typography, Grid } from '@mui/material'

export default function MattressesPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h2" sx={{ mb: 4 }}>Premium Mattresses</Typography>
      <Grid container spacing={3}>
        {/* Add mattress products here */}
      </Grid>
    </Container>
  )
} 