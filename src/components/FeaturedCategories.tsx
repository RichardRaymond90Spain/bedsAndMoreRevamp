"use client"

import { Box, Container, Typography, Grid } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    title: "MATTRESSES",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80",
    link: "/mattresses"
  },
  {
    title: "BEDS",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80",
    link: "/beds"
  },
  {
    title: "HEADBOARDS",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80",
    link: "/headboards"
  }
]

export default function FeaturedCategories() {
  return (
    <Box 
      className="viewport-fit"
      sx={{ 
        bgcolor: '#f9f9f9',
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <Container 
        maxWidth="xl" 
        className="mobile-container"
        sx={{ py: { xs: 4, md: 8 } }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Left side content */}
          <Grid item xs={12} md={5}>
            <Box 
              className="mobile-content"
              sx={{ pr: { md: 6 } }}
            >
              <Typography
                component="h1"
                variant="h2"
                className="mobile-text"
                sx={{
                  fontSize: { xs: "2rem", md: "3.5rem" },
                  fontWeight: 300,
                  mb: 4,
                  color: "#333",
                  lineHeight: 1.2
                }}
              >
                AT BEDS & MORE WE BELIEVE SLEEP IS THE ULTIMATE LUXURY
              </Typography>
              <Typography
                variant="body1"
                className="mobile-text"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  color: "#666",
                  mb: 2,
                  lineHeight: 1.6
                }}
              >
                At Beds & More, we take our responsibility for helping you to sleep well and wake up feeling rejuvenated very seriously. We have a passion for working with nature's very best comfort materials to inspire you to sleep sustainably.
              </Typography>
              <Typography
                variant="body1"
                className="mobile-text"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  color: "#666",
                  lineHeight: 1.6
                }}
              >
                We responsibly source the finest materials to handcraft beautifully comfortable beds and supremely comfortable mattresses that help enhance your health and wellbeing.
              </Typography>
            </Box>
          </Grid>

          {/* Right side category cards */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={2} className="mobile-content">
              {categories.map((category) => (
                <Grid item xs={12} key={category.title} className="mobile-section">
                  <Link href={category.link} style={{ textDecoration: 'none' }}>
                    <Box
                      sx={{
                        position: 'relative',
                        height: { xs: '140px', md: '180px' },
                        display: 'flex',
                        alignItems: 'stretch',
                        overflow: 'hidden',
                        '&:hover img': {
                          transform: 'scale(1.05)',
                          transition: 'transform 0.6s ease'
                        }
                      }}
                    >
                      <Box sx={{ 
                        width: '50%', 
                        position: 'relative',
                        minWidth: '50%'
                      }}>
                        <Image
                          src={category.image}
                          alt={category.title}
                          fill
                          className="mobile-image"
                          style={{
                            objectFit: 'cover',
                            transition: 'transform 0.6s ease'
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          width: '50%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          p: { xs: 2, md: 4 },
                          bgcolor: '#1a1a1a',
                          color: 'white',
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          className="mobile-text"
                          sx={{
                            color: '#B19B9B',
                            mb: { xs: 0.5, md: 1 },
                            fontSize: { xs: '0.8rem', md: '0.9rem' },
                            letterSpacing: '1px'
                          }}
                        >
                          VIEW OUR
                        </Typography>
                        <Typography
                          variant="h4"
                          className="mobile-text"
                          sx={{
                            color: 'white',
                            fontWeight: 400,
                            fontSize: { xs: '1.5rem', md: '2rem' },
                            lineHeight: 1.2
                          }}
                        >
                          {category.title}
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
} 