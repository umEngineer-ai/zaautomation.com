import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ChatBot from "@/components/ChatBot";
import RevealInit from "@/components/RevealInit";
import HashScroll from "@/components/HashScroll";
import JsonLd from "@/components/JsonLd";
import { localBusinessJsonLd, site } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Zaki Abbas Dubai | PLC, HMI & CANbus for Piling & Foundation Machinery",
    template: "%s | Zaki Abbas Dubai",
  },
  description:
    "Zaki Abbas Technical Services LLC in Dubai — PLC programming, HMI development, CANbus diagnostics, sensor calibration and electrical fault finding for foundation fleets across the UAE.",
  keywords: [
    "Zaki Abbas Dubai",
    "piling machinery automation UAE",
    "foundation equipment PLC",
    "CANbus diagnostics Dubai",
    "ABI machine service",
    "HMI development",
    "LMI calibration",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: site.url,
    siteName: site.shortName,
    images: [{ url: site.defaultOgImage }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={localBusinessJsonLd()} />
        {children}
        <WhatsAppFloat />
        <ChatBot />
        <RevealInit />
        <HashScroll />
      </body>
    </html>
  );
}
