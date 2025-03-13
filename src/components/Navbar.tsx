"use client"

import { AppBar, Container, Box, Button } from "@mui/material"
import Link from "next/link"
import Image from "next/image"
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: 1 }}>
      <Container maxWidth="xl">
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          py: 2
        }}>
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Yorkshire Linen Beds & More"
              width={180}
              height={50}
              priority
            />
          </Link>

          {/* Navigation Links */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Link href="/mattresses" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: '#333' }}>Mattresses</Button>
            </Link>
            <Link href="/beds" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: '#333' }}>Beds</Button>
            </Link>
            <Link href="/headboards" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: '#333' }}>Headboards</Button>
            </Link>
            <Link href="/furniture" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: '#333' }}>Furniture</Button>
            </Link>
            <Link href="/stores" style={{ textDecoration: 'none' }}>
              <Button 
                startIcon={<LocationOnIcon />}
                sx={{ 
                  color: '#B19B9B',
                  borderColor: '#B19B9B',
                  border: '1px solid',
                  mr: 1,
                  '&:hover': {
                    borderColor: '#927e7e',
                    bgcolor: 'rgba(177, 155, 155, 0.04)'
                  }
                }}
              >
                Find Us
              </Button>
            </Link>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: '#1a1a1a',
                  '&:hover': {
                    bgcolor: '#333'
                  }
                }}
              >
                Contact
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </AppBar>
  )
} 