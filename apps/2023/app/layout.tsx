import Footer from "@repo/ui/components/shared/2023/layout/footer";
import Navbar from "@repo/ui/components/shared/2023/layout/navbar";
import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PyCon Uganda | 2023",
  description: "First ever Python Conference in Uganda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      {/* <!-- Google tag (gtag.js) --> */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-TKTWYJW41C"
      ></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TKTWYJW41C');
          `}
      </script>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        // crossOrigin={true}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>

      <body
        className={`flex min-h-screen flex-col justify-between`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
