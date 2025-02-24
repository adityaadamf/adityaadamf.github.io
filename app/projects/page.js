'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Projects() {
  const [listProject, setListProjects] = useState([]);

  const getMyProjects = async () => {
    const res = await fetch("https://adityaadamf.github.io/assets/json/aa826d7c4364f2439fd33953f124fb3b.json", {
      next: { revalidate: 3600 }
    });
    const resdata = await res.json();
    // My Projects
    setListProjects(resdata);
  };

  useEffect(() => {
    if (listProject.length === 0) getMyProjects();
  }, []);

  return (
    <>
    <Header />
    <div className="aditya-projects">
      <section className="aditya-projects-section-1">
        <div className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Projects
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                A collection of my latest projects in data analysis, science and AI.
              </p>
            </div>
            <div className="mt-12 space-y-16">
              {
                listProject?.length > 0 ?
                  listProject.map((post, index) => (
                    <article 
                      key={index}
                      className="relative isolate flex flex-col gap-8 lg:flex-row"
                      // className="flex flex-wrap items-center gap-6 bg-gray-50 p-6 rounded-lg shadow-md w-full sm:w-[45%] lg:w-[30%]"
                    >
                      <div>
                        <time className="text-gray-500 text-sm">{post.date_publish}</time>
                        <Link href={post.url} target={post.target} className="block">
                          <h3 className="mt-2 text-2xl font-semibold text-gray-900">{post.title}</h3>
                          <p className="mt-2 text-gray-600 break-words">{post.body}</p>
                        </Link>
                        <div className="flex flex-wrap gap-x-2 pt-5">
                          <img
                            src={post.authors.img}
                            alt={post.authors.name}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                          <p className="text-sm mt-2 font-semibold">{post.authors.name}</p>
                        </div>
                      </div>
                    </article>
                  ))
                :
                null
              }
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};