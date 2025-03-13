"use client"

import { Box, Container, Typography, Button, Grid } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

export default function FurniturePackages() {
  return (
    <Box 
      className="viewport-fit"
      sx={{ 
        py: { xs: 6, md: 10 },
        bgcolor: 'white'
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: '300px', md: '500px' },
                width: '100%',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80"
                alt="Furniture Package"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </Box>
          </Grid>

          {/* Content Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { md: 4 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 300,
                  color: '#1a1a1a',
                  mb: 3
                }}
              >
                Complete Furniture Packages
              </Typography>
              
              <Typography
                sx={{
                  color: '#666',
                  mb: 3,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8
                }}
              >
                Transform your space effortlessly with our curated furniture packages. 
                Whether you're furnishing a new home or updating your current space, 
                our packages offer the perfect blend of style, comfort, and value.
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography
                  sx={{
                    color: '#666',
                    mb: 2,
                    fontSize: '1rem'
                  }}
                >
                  • Customizable packages to suit your needs
                </Typography>
                <Typography
                  sx={{
                    color: '#666',
                    mb: 2,
                    fontSize: '1rem'
                  }}
                >
                  • Professional delivery and installation
                </Typography>
                <Typography
                  sx={{
                    color: '#666',
                    mb: 2,
                    fontSize: '1rem'
                  }}
                >
                  • Flexible payment options available
                </Typography>
              </Box>

              <Link href="/furniture-packages" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#B19B9B',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      bgcolor: '#927e7e'
                    }
                  }}
                >
                  View Packages
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
} 