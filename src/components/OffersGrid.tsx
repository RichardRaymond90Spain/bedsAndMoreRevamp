"use client"

import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import GuaranteeSection from './GuaranteeSection'

const offers = [
  {
    title: "10% Cashback In-Store",
    subtitle: "Credit on ALL Purchases!",
    description: "Get 10% store credit on all in-store purchases at our Mijas Costa and Marbella locations.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80",
    link: "/offers/cashback"
  },
  {
    title: "21% OFF All Premiere Collection",
    subtitle: "Exclusive Range",
    description: "21% OFF Everything in our exclusive 'Premiere Collection' of Beds, Mattresses & Headboards! Our own, amazing range of super quality bed bases, mattresses and a HUGE variety of made-to-order",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80",
    link: "/offers/premiere",
    highlight: "21% OFF"
  },
  {
    title: "25% OFF Hypnos Beds",
    subtitle: "Headboards & Mattresses",
    description: "A premium range of beds and mattresses – 25% OFF Hypnos Beds, Headboards & Mattresses.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80",
    link: "/offers/hypnos",
    highlight: "25% OFF"
  },
  {
    title: "Shallow Divan Combo",
    subtitle: "with Ava Pocket Sprung Mattress",
    description: "Shallow Divan Combo with Ava Pocket Sprung Mattress An amazing divan bed and mattress offer, designed with style and comfort in mind! Our Combo packages have been designed to give flexibility",
    image: "/images/divan-combo.jpg",
    tag: "DEAL!",
    link: "/offers/divan-combo"
  },
  {
    title: "40% OFF Sealy Mattresses!",
    subtitle: "Premium Quality",
    description: "Sealy Mattresses – 40% OFF! A name you know and trust, Sealy mattresses with giant discounts from Beds and More SL, in Mijas Costa and Marbella. Save 40% on your next premium quality Sealy mattress",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80",
    link: "/offers/sealy",
    highlight: "40% OFF"
  },
  {
    title: "Zip and Link Beds- Eco Package",
    subtitle: "Flexible Bed System",
    description: "One King Size Bed or Two Single Beds – Flexibility for the holiday home-renter.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80",
    link: "/offers/zip-link",
    highlight: "FLEXIBLE"
  }
]

export default function OffersGrid() {
  return (
    <Box 
      className="viewport-fit standard-rules"
      sx={{ 
        bgcolor: '#f9f9f9',
        py: { xs: 4, md: 8 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(180deg, #001529 0%, #001529 50%, #f9f9f9 100%)',
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="xl" className="mobile-container">
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            mb: 6
          }}
        >
          <Typography
            component="h2"
            className="mobile-text"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 300,
              mb: 2,
              background: 'linear-gradient(45deg, #fff 30%, #B19B9B 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 2px 10px rgba(0,0,0,0.1)',
              letterSpacing: '0.5px'
            }}
          >
            Special Offers & Deals
          </Typography>
          <Box
            sx={{
              width: '100px',
              height: '4px',
              background: 'linear-gradient(90deg, #B19B9B 0%, #001529 100%)',
              mx: 'auto',
              mb: 3,
              borderRadius: '2px'
            }}
          />
        </Box>

        <Box 
          sx={{ 
            maxWidth: '800px', 
            mx: 'auto', 
            mb: 6,
            position: 'relative',
            zIndex: 1
          }}
        >
          <GuaranteeSection />
        </Box>
        
        <Grid container spacing={{ xs: 2, md: 3 }} className="mobile-content">
          {offers.map((offer) => (
            <Grid item xs={12} md={4} key={offer.title} className="mobile-section">
              <Link href={offer.link} style={{ textDecoration: 'none' }}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  {offer.tag && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        bgcolor: 'black',
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        borderRadius: 1,
                        zIndex: 1
                      }}
                    >
                      {offer.tag}
                    </Box>
                  )}

                  <Box sx={{ position: 'relative', pt: '56.25%' }}>
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                  
                  <CardContent sx={{ 
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 500,
                          mb: 1,
                          color: '#1a1a1a',
                          fontSize: { xs: '1.1rem', md: '1.25rem' }
                        }}
                      >
                        {offer.title}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: '#B19B9B',
                          mb: 2,
                          fontWeight: 500
                        }}
                      >
                        {offer.subtitle}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#666',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          lineHeight: 1.6
                        }}
                      >
                        {offer.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
} 