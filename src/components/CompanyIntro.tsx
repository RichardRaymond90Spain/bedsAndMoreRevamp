"use client"

import { Box, Container, Typography } from "@mui/material"
import Image from "next/image"

export default function CompanyIntro() {
  return (
    <Box 
      className="viewport-fit"
      sx={{ 
        bgcolor: 'white',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Container 
        maxWidth="xl" 
        sx={{ 
          px: { xs: 0, md: 2 },
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: { xs: '100%', md: 'auto' },
            px: { xs: 2, md: 4 }
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: { xs: '240px', md: '600px' },
              height: { xs: '60px', md: '120px' },
              mx: 'auto',
              mb: { xs: 2, md: 6 }
            }}
          >
            <Image
              src="https://www.bedsandmore.es/wp-content/webp-express/webp-images/uploads/2022/09/logo-transparent.png.webp"
              alt="Yorkshire Linen Beds & More"
              fill
              style={{
                objectFit: 'contain'
              }}
              priority
            />
          </Box>

          <Box sx={{ 
            maxWidth: '100%',
            textAlign: 'center'
          }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.875rem', md: '1.1rem' },
                color: '#666',
                mb: { xs: 1.5, md: 4 },
                lineHeight: { xs: 1.4, md: 1.8 }
              }}
            >
              Yorkshire Linen Beds and More has two bed, mattress and furniture showrooms on Spain's beautiful Costa del Sol. Close to CC Miramar in Fuengirola.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.875rem', md: '1.1rem' },
                color: '#666',
                lineHeight: { xs: 1.4, md: 1.8 },
                display: { xs: 'none', md: 'block' },
                mb: { md: 4 }
              }}
            >
              We have been trading for over 10 years with highly trained staff to help you choose the perfect bed or mattress.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.875rem', md: '1.1rem' },
                color: '#666',
                lineHeight: { xs: 1.4, md: 1.8 }
              }}
            >
              We offer full, bespoke packages including delivery and installation.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
} 