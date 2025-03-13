"use client"

import { useEffect, useState } from 'react'
import { Box, Container, Typography } from "@mui/material"
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import LanguageIcon from '@mui/icons-material/Language'
import PublicIcon from '@mui/icons-material/Public'
import HistoryIcon from '@mui/icons-material/History'

const infoMessages = [
  {
    text: "Delivery Service Available",
    icon: <LocalShippingIcon sx={{ fontSize: 18 }} />
  },
  {
    text: "International Delivery Available",
    icon: <PublicIcon sx={{ fontSize: 18 }} />
  },
  {
    text: "English & Spanish Spoken",
    icon: <LanguageIcon sx={{ fontSize: 18 }} />
  },
  {
    text: "Established Since 2008",
    icon: <HistoryIcon sx={{ fontSize: 18 }} />
  }
]

export default function InfoBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % infoMessages.length)
    }, 3000) // Change message every 3 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <Box
      sx={{
        bgcolor: '#1a1a1a',
        color: 'white',
        height: '32px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        overflow: 'hidden',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '50px',
          zIndex: 1
        },
        '&::before': {
          left: 0,
          background: 'linear-gradient(to right, #1a1a1a, transparent)'
        },
        '&::after': {
          right: 0,
          background: 'linear-gradient(to left, #1a1a1a, transparent)'
        }
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: 1,
            transition: 'opacity 0.3s ease',
          }}
        >
          {infoMessages[currentIndex].icon}
          <Typography 
            variant="body2" 
            sx={{ 
              fontSize: '0.875rem',
              fontWeight: 400,
              letterSpacing: '0.5px'
            }}
          >
            {infoMessages[currentIndex].text}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
} 