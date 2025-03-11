"use client"

import { Box, Container, Typography } from "@mui/material"
import Image from "next/image"

export default function CompanyIntro() {
  return (
    <Box sx={{ py: 8, bgcolor: 'white' }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '1200px',
            mx: 'auto',
            px: { xs: 2, md: 4 }
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '600px',
              height: '120px',
              mb: 4
            }}
          >
            <Image
              src="/images/yorkshire-logo.png"
              alt="Yorkshire Linen Beds & More"
              fill
              style={{
                objectFit: 'contain'
              }}
              priority
            />
          </Box>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              color: '#666',
              mb: 3,
              lineHeight: 1.8
            }}
          >
            Yorkshire Linen Beds and More has two bed, mattress and furniture showrooms on Spain's beautiful Costa del Sol. Close to CC Miramar in Fuengirola, Yorkshire Linen Beds & More is an wonderful showroom of beds, mattresses, bed linen, curtains, cushions and more! Huge ranges of beds, mattresses, furniture, decoration and inspirational ideas for your home!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              color: '#666',
              mb: 3,
              lineHeight: 1.8
            }}
          >
            We have been trading at Yorkshire Linen Beds and More for over 10 years and our staff although highly trained have also accumulated a wealth of valuable knowledge and can advise you in every step of buying a new bed or mattress, choosing the right length of curtains for your windows or completely furnishing a home or holiday apartment.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              color: '#666',
              lineHeight: 1.8
            }}
          >
            We can offer a full, bespoke package to suit all budgets including delivery and installation.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
} 