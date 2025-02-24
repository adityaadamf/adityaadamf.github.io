'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function NotFound() {
  return(
    <>
    <Header />
    <div className="aditya-notfound">
      <section className="aditya-notfound-section-1">
        <div className="flex py-28 flex-col items-center justify-center">
          <h1 className="text-6xl font-bold">404</h1>
          <p className="text-xl mt-4">Oops! Page not found.</p>
          <Link href="/" className="mt-6 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
};