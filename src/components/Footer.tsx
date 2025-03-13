"use client"

import { Box, Container, Grid, Typography, Link as MuiLink } from "@mui/material"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <Box 
      component="footer"
      className="viewport-fit"
      sx={{ 
        bgcolor: '#1a1a1a',
        color: 'white',
        pt: 8,
        pb: 4
      }}
    >
      <Container maxWidth="xl" className="mobile-container">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box className="mobile-content">
              <Image
                src="/images/logo-white.png"
                alt="Yorkshire Linen Beds & More"
                width={200}
                height={60}
                style={{ marginBottom: '1rem' }}
              />
              <Typography 
                variant="body2"
                className="mobile-text"
                sx={{ 
                  color: '#B19B9B',
                  mb: 2
                }}
              >
                Quality beds and furniture at great prices, with stores in Mijas Costa and Marbella.
              </Typography>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Box className="mobile-content">
              <Typography variant="h6" sx={{ mb: 2 }}>Quick Links</Typography>
              <Grid container>
                <Grid item xs={6}>
                  <Link href="/beds" style={{ textDecoration: 'none' }}>
                    <Typography 
                      className="mobile-text"
                      sx={{ 
                        color: '#B19B9B',
                        mb: 1,
                        '&:hover': { color: 'white' }
                      }}
                    >
                      Beds
                    </Typography>
                  </Link>
                  <Link href="/mattresses" style={{ textDecoration: 'none' }}>
                    <Typography 
                      className="mobile-text"
                      sx={{ 
                        color: '#B19B9B',
                        mb: 1,
                        '&:hover': { color: 'white' }
                      }}
                    >
                      Mattresses
                    </Typography>
                  </Link>
                  <Link href="/headboards" style={{ textDecoration: 'none' }}>
                    <Typography 
                      className="mobile-text"
                      sx={{ 
                        color: '#B19B9B',
                        mb: 1,
                        '&:hover': { color: 'white' }
                      }}
                    >
                      Headboards
                    </Typography>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Link href="/furniture" style={{ textDecoration: 'none' }}>
                    <Typography 
                      className="mobile-text"
                      sx={{ 
                        color: '#B19B9B',
                        mb: 1,
                        '&:hover': { color: 'white' }
                      }}
                    >
                      Furniture
                    </Typography>
                  </Link>
                  <Link href="/soft-furnishings" style={{ textDecoration: 'none' }}>
                    <Typography 
                      className="mobile-text"
                      sx={{ 
                        color: '#B19B9B',
                        mb: 1,
                        '&:hover': { color: 'white' }
                      }}
                    >
                      Soft Furnishings
                    </Typography>
                  </Link>
                  <Link href="/decoration" style={{ textDecoration: 'none' }}>
                    <Typography 
                      className="mobile-text"
                      sx={{ 
                        color: '#B19B9B',
                        mb: 1,
                        '&:hover': { color: 'white' }
                      }}
                    >
                      Decoration
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Box className="mobile-content">
              <Typography variant="h6" sx={{ mb: 2 }}>Contact Us</Typography>
              <Typography 
                className="mobile-text"
                sx={{ 
                  color: '#B19B9B',
                  mb: 1
                }}
              >
                Mijas Costa Store: +34 952 123 456
              </Typography>
              <Typography 
                className="mobile-text"
                sx={{ 
                  color: '#B19B9B',
                  mb: 1
                }}
              >
                Marbella Store: +34 952 789 012
              </Typography>
              <MuiLink 
                href="mailto:info@yorkshirelinen.es"
                sx={{ 
                  color: '#B19B9B',
                  textDecoration: 'none',
                  '&:hover': { color: 'white' }
                }}
              >
                info@yorkshirelinen.es
              </MuiLink>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box 
          className="mobile-content"
          sx={{ 
            borderTop: '1px solid #333',
            mt: 4,
            pt: 4,
            textAlign: 'center'
          }}
        >
          <Typography 
            variant="body2"
            className="mobile-text"
            sx={{ color: '#666' }}
          >
            © {new Date().getFullYear()} Yorkshire Linen Beds & More. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
} 