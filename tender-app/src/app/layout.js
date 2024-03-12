import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import LoginForm from '@/components/login/LoginForm';
// import ClientSideProviderTest from "@/components/clientSideProviderTest";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"Next.js 14 Homepage",
    template:"%s | Next.js 14"
  },
  description: "Next.js starter app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div>
            {/* <Navbar /> */}
            {<LoginForm/>}
            {children}
            <Footer />
          </div>
      </body>
    </html>
  );
}