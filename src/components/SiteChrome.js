import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteChrome({ children, solid = false }) {
  return (
    <>
      <Header solid={solid} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
