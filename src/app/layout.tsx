import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
import SmoothScroll from "@/components/Layouts/SmoothScroll";

// Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://velora-flagship.com"),
  title: {
    default: "VELORA | Premium Digital Flagship Store",
    template: "%s | VELORA",
  },
  description:
    "VELORA is a premium digital flagship store offering luxury fashion with high-performance shopping experiences and modern design.",
  keywords: ["luxury fashion", "premium clothing", "ecommerce store", "velora", "digital flagship"],
  authors: [{ name: "VELORA Studio" }],
  creator: "VELORA Studio",
  publisher: "VELORA Studio",
  alternates: { canonical: "https://velora-flagship.com" },
  openGraph: {
    type: "website",
    url: "https://velora-flagship.com",
    title: "VELORA | Premium Digital Flagship Store",
    description: "Experience luxury fashion refined with a high-performance digital shopping experience.",
    siteName: "VELORA",
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "VELORA Luxury Fashion" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VELORA | Premium Digital Flagship Store",
    description: "Luxury fashion meets modern digital performance.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F5F7", // Match the Pewter Mist background
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VELORA",
              url: "https://velora-flagship.com",
              logo: "https://velora-flagship.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-300-1234567",
                contactType: "customer support",
              },
            }),
          }}
        />
      </head>

      {/* 1. Removed 'bg-white text-black' - The colors are now handled by globals.css
          2. selection:bg-blue-500 is replaced by your brand selection logic in CSS
      */}
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--color-accent)] focus:text-[var(--color-accent-foreground)] focus:p-4"
        >
          Skip to content
        </a>

        <SmoothScroll>
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}