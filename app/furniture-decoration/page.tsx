import { Container, Typography, Grid } from '@mui/material'

export default function FurnitureDecorationPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h2" sx={{ mb: 4 }}>Furniture & Decoration</Typography>
      <Grid container spacing={3}>
        {/* Add furniture products here */}
      </Grid>
    </Container>
  )
} 