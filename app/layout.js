import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "PyCon Uganda",
  description: "First ever Python Conference in Uganda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col justify-between">
        <Navbar />
        <main className="">{children}</main>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
