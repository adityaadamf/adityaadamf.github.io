"use client";

import Image from "next/image";
import { workExperiences } from "@/data/about";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

export default function About() {
  return(
    <div>
      <div className="section-title">
        <h3 className="text-xl md:text-4xl font-bold">About Me</h3>
        <hr className="my-8 border-neutral-200 dark:border-neutral-800" />
      </div>
      <div className="px-4 py-6 md:py-12 space-y-16">
        
        <section className="space-y-10">
          <div className="grid md:grid-cols-3 gap-10 items-center">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/assets/images/IMG_2406_Edited.png"
                alt="Aditya"
                width={300}
                height={300}
                className="object-cover rounded-full border border-neutral-500 dark:border-neutral-300"
              />
            </div>
            <div className="md:col-span-2 space-y-4 text-neutral-800 dark:text-neutral-300 text-justify leading-relaxed">
              <p>
                I am a Data Analyst specializing in data analytics, machine learning, and data-driven solutions.
              </p>
              <p>
                I build and maintain automated data pipelines using Python (FastAPI), develop predictive models, and create chatbot solutions to support business needs.
              </p>
              <p>
                I work with databases such as MySQL, SQLite, Firebase, and BigQuery, and create data visualizations using Looker Studio and Google Sheets.
              </p>
              <p className="font-semibold text-white">
                Open to new opportunities.
              </p>
              <div className="flex justify-start gap-4">
                <Link 
                  className="social-media"
                  href="https://www.linkedin.com/in/adityaadamf"
                  target="_blank"
                >
                  <FaLinkedin size={24} />
                </Link>
                <Link 
                  className="social-media"
                  href="https://www.github.com/adityaadamf"
                  target="_blank"
                >
                  <FaGithub size={24} />
                </Link>
                <Link 
                  className="social-media"
                  href="https://medium.com/@adityaadamf"
                  target="_blank"
                >
                  <FaMedium size={24} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-xl md:text-3xl font-bold">
            Work Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {
              workExperiences.map((work, i) => (
                <div 
                  key={i}
                  className="border border-neutral-700 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <h4 className="text-lg font-semibold">
                    {work.title}
                  </h4>
                  <p className="text-sm text-neutral-400">
                    {work.company}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    {work.start_period} – {work.end_period}
                  </p>
                </div>
              ))
            }
          </div>
        </section>

      </div>
    </div>
  );
};