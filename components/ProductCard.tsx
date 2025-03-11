import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material'
import Link from 'next/link'

interface ProductCardProps {
  title: string
  price: string
  image: string
  slug: string
}

export default function ProductCard({ title, price, image, slug }: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        className="h-48 object-cover"
      />
      <CardContent className="flex-grow flex flex-col justify-between">
        <Typography variant="h6" component="h3" className="mb-2">
          {title}
        </Typography>
        <Box className="flex justify-between items-center mt-4">
          <Typography variant="h6" color="primary">
            {price}
          </Typography>
          <Link href={`/products/${slug}`}>
            <Button variant="contained" color="primary">
              View Details
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  )
} 