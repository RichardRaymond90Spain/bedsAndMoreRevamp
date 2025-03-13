"use client"

import { Box, Container, Typography, Button } from "@mui/material"

export default function HeroSection() {
  return (
    <Box 
      component="section"
      className="viewport-fit standard-rules"
      sx={{ 
        position: 'relative',
        height: { xs: '100vh', md: '80vh' },
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1505693314120-0d443867891c')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <Container 
        maxWidth="xl"
        className="mobile-container"
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1
        }}
      >
        <Box
          className="mobile-content"
          sx={{
            textAlign: 'center',
            color: 'white',
            maxWidth: '800px'
          }}
        >
          <Typography 
            variant="h1" 
            className="mobile-text"
            sx={{ 
              fontSize: { xs: '2.5rem', md: '4rem' }, 
              fontWeight: 600, 
              mb: 2 
            }}
          >
            Luxury Beds & Mattresses
          </Typography>
          <Typography 
            variant="h2" 
            className="mobile-text"
            sx={{ 
              fontSize: { xs: '1.2rem', md: '1.5rem' }, 
              fontWeight: 300, 
              mb: 4 
            }}
          >
            Experience the ultimate in comfort and style
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'black',
              '&:hover': {
                bgcolor: 'black',
                color: 'white'
              }
            }}
          >
            Explore Our Collection
          </Button>
        </Box>
      </Container>
    </Box>
  )
} 