import { Container, Typography, Grid, Paper, Box } from '@mui/material'

export default function ContactPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h2" sx={{ mb: 4 }}>Contact Us</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Get in Touch</Typography>
            <Box sx={{ mb: 2 }}>
              <Typography>Phone: +34 952 667 095</Typography>
              <Typography>Email: info@bedsandmore.com</Typography>
              <Typography>Address: Your Store Address</Typography>
            </Box>
            <Typography variant="h6" sx={{ mb: 2 }}>Opening Hours</Typography>
            <Typography>Monday - Saturday: 10:00 - 20:00</Typography>
            <Typography>Sunday: Closed</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Location</Typography>
            {/* Add Google Maps or location info */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
} 