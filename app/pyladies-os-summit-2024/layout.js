import Footer from "@/components/2023/layout/footer";
import "react-toastify/dist/ReactToastify.css";
import "@/app/globals.css";
import Navbar2024 from "@/components/2024/layout/navbar";

export const metadata = {
  title: "Pyladies Open Source Summit",
  description:
    "Pyladies Kampala Open Source Summit that will bring together Python enthusiasts and open-source advocates, both new and experienced, for a one-day event aimed at building community and promoting contributions to open source.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>

      <body className="flex min-h-screen flex-col justify-between">
        <main className="">{children}</main>
      </body>
    </html>
  );
}
