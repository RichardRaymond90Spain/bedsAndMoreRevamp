export const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold">About Us</h3>
            <p className="text-sm text-muted-foreground">
              Beds & More - Quality furniture at great prices
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Phone: +34 952 667 095</li>
              <li>Email: info@bedsandmore.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Beds & More. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 