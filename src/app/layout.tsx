import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trusafe - India's Most Trusted Security Partner",
  description:
    "Professional security services with trained guards, 24/7 surveillance, and customized protection plans for your peace of mind.",
  keywords:
    "security services, security guards, surveillance, protection, India",
  authors: [{ name: "Trusafe Security Services" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/dennoivp4/image/upload/v1753100183/logo_g0mnvy.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut:
      "https://res.cloudinary.com/dennoivp4/image/upload/v1753100183/logo_g0mnvy.svg",
    apple:
      "https://res.cloudinary.com/dennoivp4/image/upload/v1753100183/logo_g0mnvy.svg",
  },
  openGraph: {
    title: "Trusafe - India's Most Trusted Security Partner",
    description:
      "Professional security services with trained guards, 24/7 surveillance, and customized protection plans for your peace of mind.",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dennoivp4/image/upload/v1753100183/logo_g0mnvy.svg",
        width: 500,
        height: 500,
        alt: "TruSafe Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${roboto.variable}`}
    >
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://res.cloudinary.com/dennoivp4/image/upload/v1753100183/logo_g0mnvy.svg"
        />
        <link
          rel="apple-touch-icon"
          href="https://res.cloudinary.com/dennoivp4/image/upload/v1753100183/logo_g0mnvy.svg"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
