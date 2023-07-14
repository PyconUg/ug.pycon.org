import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import "./globals.css";

export const metadata = {
  title: "PyCon Uganda",
  description: "First ever Python Conference in Uganda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TKTWYJW41C"></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TKTWYJW41C');
          `}
        </script>

      <body className="flex min-h-screen flex-col justify-between">
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
