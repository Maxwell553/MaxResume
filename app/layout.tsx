import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Get the base path from environment
  const basePath = process.env.NODE_ENV === 'production' ? '/MaxResume' : '';
  
  return (
    <html lang="en">
      <head>
        <title>v0 App</title>
        <meta name="description" content="Created with v0" />
        <meta name="generator" content="v0.dev" />
        {/* Add base tag for GitHub Pages */}
        {process.env.NODE_ENV === 'production' && (
          <base href="/MaxResume/" />
        )}
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
