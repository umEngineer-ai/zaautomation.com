import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteChrome({ children, solid = false }) {
  return (
    <>
      <div id="desktop-navbar">
        <Header solid={solid} />
      </div>
      <div id="desktop-root">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
