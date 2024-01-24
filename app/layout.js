export const metadata = {
  title: 'NextJS APP',
  description: 'NextJS for Assessment',
}

export default async function RootLayout({ children }) {
 
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
