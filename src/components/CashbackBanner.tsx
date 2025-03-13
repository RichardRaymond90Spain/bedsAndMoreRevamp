"use client"

import { Box, Container, Typography, Paper, Button } from "@mui/material"
import { ArrowForward } from "@mui/icons-material"
import Image from "next/image"

export default function CashbackBanner() {
  return (
    <Box 
      sx={{ 
        position: 'relative',
        mt: '-120px',
        zIndex: 1,
        pb: 4
      }}
    >
      <Container maxWidth="xl">
        <Paper 
          elevation={3}
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 2,
            background: '#fff',
            textAlign: 'center'
          }}
        >
          <Box 
            sx={{ 
              width: '280px',
              height: '280px',
              position: 'relative',
              mb: 3,
              mt: -8,
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
          >
            <Image
              src="/images/cashback-coins.jpg"
              alt="10% Cashback"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              priority
            />
          </Box>

          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 600,
              color: '#333',
              mb: 2
            }}
          >
            Store Credit on ALL Purchases
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              color: '#666',
              fontSize: '1.1rem',
              mb: 3,
              maxWidth: '800px'
            }}
          >
            Wow!! On top of our amazing prices, we're now offering a further 10% Store Credit CASHBACK!
            Applies to everything bought instore in Mijas Costa or Marbella.
          </Typography>

          <Button
            variant="outlined"
            endIcon={<ArrowForward />}
            href="/promotions/cashback"
            sx={{
              borderColor: '#B19B9B',
              color: '#B19B9B',
              '&:hover': {
                borderColor: '#927e7e',
                backgroundColor: 'rgba(177, 155, 155, 0.04)'
              }
            }}
          >
            Learn More About This Offer
          </Button>

          <Typography 
            variant="caption" 
            sx={{ 
              color: '#888',
              display: 'block',
              mt: 2
            }}
          >
            *In-store only, terms & conditions apply
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
} 