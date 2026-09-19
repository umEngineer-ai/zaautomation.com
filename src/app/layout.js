import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ChatBot from "@/components/ChatBot";
import RevealInit from "@/components/RevealInit";
import HashScroll from "@/components/HashScroll";
import JsonLd from "@/components/JsonLd";
import { localBusinessJsonLd, site } from "@/lib/site";
import { AuthProvider } from "@/components/AuthProvider";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "ZA Automation Dubai | PLC, HMI & CANbus for Piling & Foundation Machinery",
    template: "%s | ZA Automation Dubai",
  },
  description:
    "ZA Automation Technical Services LLC in Dubai — PLC programming, HMI development, CANbus diagnostics, sensor calibration and electrical fault finding for foundation fleets across the UAE.",
  keywords: [
    "ZA Automation Dubai",
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
        <AuthProvider>
          <JsonLd data={localBusinessJsonLd()} />
          {children}
          <WhatsAppFloat />
        <ChatBot />
        <RevealInit />
          <HashScroll />
        </AuthProvider>
      </body>
    </html>
  );
}
