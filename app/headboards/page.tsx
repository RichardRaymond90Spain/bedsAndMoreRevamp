import { Container, Typography, Grid } from '@mui/material'

export default function HeadboardsPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h2" sx={{ mb: 4 }}>Stylish Headboards</Typography>
      <Grid container spacing={3}>
        {/* Add headboard products here */}
      </Grid>
    </Container>
  )
} 