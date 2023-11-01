import type { Metadata } from "next"

import "./globals.css"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { ReduxProviders } from "@/lib/redux-providers"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // themeColor: siteConfig.themeColor,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "bg-background min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          <ReduxProviders>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <SiteHeader />
              <div className="relative flex min-h-screen flex-col">
                {children}
              </div>
              <Toaster />
            </ThemeProvider>
          </ReduxProviders>
        </body>
      </html>
    </>
  )
}
