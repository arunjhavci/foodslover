export const metadata = {
    title: 'Food Shop | Online Food Store | Order Foods Online at Best Prices',
    description: 'An Online Food Shop For Foodies | Online Food Store | Order Foods Online at Best Prices',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }
  