"use client"

import { Box, Container, Typography, Button, Fade } from "@mui/material"
import { ArrowForward } from "@mui/icons-material"
import { useState, useEffect } from "react"

const sections = [
  {
    title: "Beds & Bed Bases",
    description: "Premium quality beds at astonishing prices",
    buttonText: "EXPLORE BEDS",
    link: "/beds",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80",
  },
  {
    title: "Premium Mattresses",
    description: "Find your perfect sleep with our collection",
    buttonText: "VIEW MATTRESSES",
    link: "/mattresses",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80",
  },
  {
    title: "Stylish Headboards",
    description: "Complete your bedroom with our headboards",
    buttonText: "SEE HEADBOARDS",
    link: "/headboards",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80",
  },
  {
    title: "Soft Furnishings",
    description: "Add comfort and style to your home",
    buttonText: "BROWSE COLLECTION",
    link: "/soft-furnishings",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80",
  },
  {
    title: "Furniture & Decoration",
    description: "Transform your space with our furniture",
    buttonText: "DISCOVER MORE",
    link: "/furniture-decoration",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80",
  }
]

export default function HeroSection() {
  const [currentSection, setCurrentSection] = useState(0)
  const [show, setShow] = useState(true)
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({})

  // Function to handle image load errors
  const handleImageError = (index: number) => {
    setImageError(prev => ({ ...prev, [index]: true }))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setShow(false)
      setTimeout(() => {
        setCurrentSection((prev) => 
          prev === sections.length - 1 ? 0 : prev + 1
        )
        setShow(true)
      }, 1000)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  const handleDotClick = (index: number) => {
    setCurrentSection(index)
  }

  return (
    <Box sx={{ 
      position: "relative", 
      height: "calc(100vh - 60px)", // Subtract navbar height
      overflow: "hidden",
      marginTop: 0 // Remove the margin
    }}>
      <Fade in={show} timeout={1000}>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${sections[currentSection].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Fade>
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <Box>
          <Typography
            component="h1"
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "3.5rem" },
            }}
          >
            {sections[currentSection].title}
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            {sections[currentSection].description}
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            startIcon={<ArrowForward />}
            sx={{ 
              px: 4, 
              py: 1.5,
              bgcolor: "white",
              color: "black",
              "&:hover": {
                bgcolor: "black",
                color: "white",
              }
            }}
            href={sections[currentSection].link}
          >
            {sections[currentSection].buttonText}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

