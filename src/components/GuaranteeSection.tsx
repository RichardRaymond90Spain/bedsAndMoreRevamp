"use client"

import { Box, Container, Typography, Grid } from "@mui/material"

const guarantees = [
  {
    title: "Price Promise",
    description: "Find the same mattress locally and at a cheaper price - We will beat the price!"
  },
  {
    title: "No Quibble Exchange!",
    description: "Exchange a new mattress up to 14 days after purchase."
  },
  {
    title: "Quality Assured!",
    description: "All of our new mattresses carry a MINIMUM 2 year warranty."
  }
]

export default function GuaranteeSection() {
  return (
    <Box 
      className="standard-rules"
      sx={{ 
        bgcolor: '#001529',
        color: 'white',
        py: { xs: 3, md: 4 },
        px: { xs: 2, md: 3 },
        borderRadius: 2,
        maxWidth: '1000px',
        mx: 'auto'
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 2,
            fontWeight: 300,
            color: 'white'
          }}
        >
          Satisfaction Guarantee
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            opacity: 0.8,
            color: '#B2BAC2',
            fontSize: { xs: '0.9rem', md: '1rem' }
          }}
        >
          Buy your new mattress with confidence from Beds & More and take advantage of our unique satisfaction guarantee...
        </Typography>
      </Box>

      <Grid 
        container 
        spacing={3}
        sx={{
          mt: 1
        }}
      >
        {guarantees.map((item) => (
          <Grid item xs={12} md={4} key={item.title}>
            <Box
              sx={{
                p: 2.5,
                height: '100%',
                bgcolor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 1
              }}
            >
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontWeight: 500,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  color: '#fff',
                  mb: 1
                }}
              >
                {item.title}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#B2BAC2',
                  lineHeight: 1.5,
                  fontSize: { xs: '0.8rem', md: '0.9rem' }
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
} 