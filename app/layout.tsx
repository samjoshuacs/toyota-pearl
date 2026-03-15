import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toyota Iligan | Pearl Tingcang - Official Sales Agent",
  description: "Looking for a new Toyota in Iligan City? Contact Pearl Tingcang for the best deals, promos, and financing on Fortuner, Hilux, Vios, and more. Book a test drive today!",
  keywords: ["Toyota Iligan", "Toyota cars Philippines", "Pearl Tingcang", "Toyota Fortuner Iligan", "Buy Toyota Iligan City", "Toyota dealer Mindanao"],
  openGraph: {
    title: "Toyota Iligan | Best Deals with Pearl Tingcang",
    description: "Get the best promos and financing on brand new Toyota vehicles in Iligan City.",
    // TBA Domain
    url: "https://yourdomain.com", 
    siteName: "Toyota Iligan - Pearl Tingcang",
    // TBA Showroom or vehicle image
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Toyota Iligan Showroom",
      },
    ],
    locale: "en_PH", 
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toyota Iligan | Pearl Tingcang",
    description: "Get the best deals on brand new Toyota vehicles in Iligan City.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
