import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { SITE_CONFIG } from "@/constants";
import Providers from "@/components/layout/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CustomCursor from "@/components/layout/CustomCursor";

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: "@rayyan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data / JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rayyan Alghifari",
              jobTitle: "Web Developer & UI/UX Designer",
              url: SITE_CONFIG.url,
              sameAs: [
                "https://github.com/rayyan",
                "https://linkedin.com/in/rayyan",
                "https://instagram.com/rayyan",
              ],
              knowsAbout: [
                "Web Development",
                "UI/UX Design",
                "React",
                "Next.js",
                "TypeScript",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-background text-primary antialiased">
        <Providers>
          {/* Loading screen */}
          <LoadingScreen />

          {/* Custom cursor (desktop only) */}
          <div className="hidden md:block">
            <CustomCursor />
          </div>

          {/* Scroll progress bar */}
          <ScrollProgress />

          {/* Navigation */}
          <Navbar />

          {/* Main content */}
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
