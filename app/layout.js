import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Killington Getaway | Your Ultimate Vermont Adventure Guide",
  description: "Discover the best restaurants, breweries, ski shops, and summer activities in Killington, Vermont. Plan your perfect mountain escape with our curated listings.",
  metadataBase: new URL("https://killingtongetaway.com"),
  openGraph: {
    title: "Killington Getaway | Your Ultimate Vermont Adventure Guide",
    description: "Discover the best restaurants, breweries, ski shops, and summer activities in Killington, Vermont.",
    url: "https://killingtongetaway.com",
    siteName: "Killington Getaway",
    images: [
      {
        url: "/images/hero/killington-k1.jpg",
        width: 1200,
        height: 630,
        alt: "Killington Getaway Hero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Killington Getaway | Your Ultimate Vermont Adventure Guide",
    description: "Discover the best restaurants, breweries, ski shops, and summer activities in Killington, Vermont.",
    images: ["/images/hero/killington-k1.jpg"],
  },
  icons: {
    icon: "/favicon.ico?v=2",
    shortcut: "/favicon.ico?v=2",
    apple: "/icon.png?v=2",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/icon.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png?v=2" />
      </head>
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
