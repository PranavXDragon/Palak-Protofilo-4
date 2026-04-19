import '../src/styles/style.css'
import Script from 'next/script'

export const metadata = {
  title: "Palak's Portfolio",
  description: 'Web developer portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href="/assets/images/my-avatar.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" type="module" strategy="afterInteractive" />
      </body>
    </html>
  )
}
