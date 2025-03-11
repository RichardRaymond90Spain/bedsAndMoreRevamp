import { Container, Typography, Paper, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Check } from '@mui/icons-material'

export default function CashbackPromoPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
          10% Cashback Promotion
        </Typography>

        <Paper sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            How It Works
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <Check sx={{ color: '#B19B9B' }} />
              </ListItemIcon>
              <ListItemText 
                primary="Make any purchase in our stores" 
                secondary="Valid at both Mijas Costa and Marbella locations"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Check sx={{ color: '#B19B9B' }} />
              </ListItemIcon>
              <ListItemText 
                primary="Receive 10% of your purchase value as store credit" 
                secondary="Credit is applied to your account immediately"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Check sx={{ color: '#B19B9B' }} />
              </ListItemIcon>
              <ListItemText 
                primary="Use your credit on your next purchase" 
                secondary="Valid for 12 months from date of issue"
              />
            </ListItem>
          </List>
        </Paper>

        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Terms & Conditions
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 2 }}>
            • Offer valid on all in-store purchases
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            • Cannot be combined with other promotions
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            • Store credit valid for 12 months
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            • Credit can be used on any future purchase
          </Typography>
          <Typography variant="body1">
            • Management reserves the right to modify or end this promotion
          </Typography>
        </Paper>
      </Box>
    </Container>
  )
} 