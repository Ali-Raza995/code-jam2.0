"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import { Provider } from "react-redux";
import store from "@/store/store";
=======
import { ToastContainer } from "react-toastify";
>>>>>>> 92b29746de8eecbf8e54205ac4c0ce68ec5481e4

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
<<<<<<< HEAD
        <Provider store={store}>{children}</Provider>
      </body>{" "}
=======
        <ToastContainer />
        {children}
      </body>
>>>>>>> 92b29746de8eecbf8e54205ac4c0ce68ec5481e4
    </html>
  );
}
