"use client";

import { listMyProjects } from "@/data/project";
import { useState } from "react";

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = listMyProjects.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(listMyProjects.length / itemsPerPage);

  return(
    <div>
      <div className="section-title">
        <h3 className="text-xl md:text-4xl font-bold">Projects</h3>
        <hr className="my-8 border-neutral-200 dark:border-neutral-800" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          currentProjects.map((project, i) => (
            <div 
              key={i}
              className="h-full flex flex-col justify-between border-2 border-neutral-500 dark:border-neutral-100 rounded-lg py-4 px-5 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:cursor-pointer"
            >
              <div>
                <h4 className="text-lg font-semibold mb-1 leading-snug min-h-[56px]">
                  {project.title}
                </h4>
                <p className="text-xs mb-3">{project.date}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-100">{project.short_desc}</p>
              </div>
              <div>
                <hr className="my-3 text-neutral-300 dark:text-neutral-100" />
                <p className="text-xs italic">
                  <b>Tools:</b> {project.tools}
                </p>
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex justify-center items-center mt-8 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 rounded-md text-sm bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-500 border dark:border-white hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-md text-sm transition-all ${
              currentPage === i + 1
                ? "bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-800"
                : "bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-500 border dark:border-white"
            } hover:cursor-pointer`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="px-3 py-1 rounded-md text-sm bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-500 border dark:border-white hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};