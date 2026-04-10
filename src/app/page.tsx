import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid gap-20">
      <section className="w-full min-h-[500px] grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-6 rounded-xl bg-neutral-100 border border-neutral-500 text-neutral-800">
        <div className="md:col-span-2 flex items-center p-6 md:p-8">
          <div className="space-y-5 text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start text-sm text-gray-500">
              <Dot color="#32a852" strokeWidth={8} />
              Open to Work
            </p>
            <div className="space-y-2">
              <h4 className="text-base md:text-lg text-gray-500">
                Hi, I am
              </h4>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Aditya Adam Firdaus
              </h1>
            </div>
            <p className="text-gray-500 max-w-md mx-auto md:mx-0">
              A Data Analyst with 4+ years of experience, focused on turning data into actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                className="bg-black text-white px-5 py-2 rounded-full hover:shadow-lg text-center transition-all duration-300"
                href="https://www.linkedin.com/in/adityaadamf"
                target="_blank"
              >
                Hire me →
              </Link>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 flex items-center justify-center">
          <div className="w-full h-70 sm:w-56 sm:h-56 md:w-full md:h-full">
            <Image 
              src="/assets/images/IMG_2406_Edited.png"
              alt="Aditya Adam Firdaus"
              width={1920}
              height={1920}
              className="w-full h-full object-cover rounded-b-xl md:rounded-r-xl md:rounded-bl-none"
            />
          </div>
        </div>
      </section>

      <section className="cursor-default grid gap-6">
        <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-center">
          Skills
        </h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center">
          <li className="flex items-center gap-3 md:justify-center">
            <Image
              className="w-8 h-8 object-contain grayscale"
              src="/assets/images/python-logo.png"
              alt="Python"
              width={50}
              height={50}
            />
            <p className="font-semibold text-sm">Python</p>
          </li>
          <li className="flex items-center gap-3 md:justify-center">
            <Image
              className="w-8 h-8 object-contain grayscale"
              src="/assets/images/analytics-logo.png"
              alt="Data Analysis"
              width={50}
              height={50}
            />
            <p className="font-semibold text-sm">Data Analysis</p>
          </li>
          <li className="flex items-center gap-3 md:justify-center">
            <Image
              className="w-8 h-8 object-contain grayscale dark:invert"
              src="/assets/images/AI-logo.png"
              alt="Artificial Intelligence"
              width={50}
              height={50}
            />
            <p className="font-semibold text-sm">Artificial Intelligence</p>
          </li>
          <li className="flex items-center gap-3 md:justify-center">
            <Image
              className="w-8 h-8 object-contain grayscale"
              src="/assets/images/data-visualization-logo.png"
              alt="Data Visualization"
              width={50}
              height={50}
            />
            <p className="font-semibold text-sm">Data Visualization</p>
          </li>
          <li className="flex items-center gap-3 md:justify-center">
            <Image
              className="w-8 h-8 object-contain grayscale"
              src="/assets/images/database-logo.png"
              alt="SQL & NoSQL"
              width={50}
              height={50}
            />
            <p className="font-semibold text-sm">SQL & NoSQL</p>
          </li>
        </ul>
      </section>

      <section className="cursor-default grid gap-8 md:gap-10">
        <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-center">
          Projects & Case Studies
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-full flex flex-col justify-between border-2 border-neutral-500 dark:border-neutral-100 rounded-lg py-4 px-5 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:cursor-pointer">
            <div>
              <h4 className="text-lg font-semibold mb-2 leading-snug min-h-[56px]">
                Spam Email Detection using SMOTE and Simple Neural Network
              </h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-100">
                Built a spam email detection system using NLP and neural networks, improving classification performance on imbalanced data with SMOTE and achieving ~98% accuracy.
              </p>
            </div>
            <div>
              <hr className="my-3 text-neutral-300 dark:text-neutral-100" />
              <p className="text-xs italic">
                <b>Tools:</b> Python, Polars, Scikit-learn, Imbalanced-learn (SMOTE), TensorFlow/Keras
              </p>
            </div>
          </div>
          <div className="h-full flex flex-col justify-between border-2 border-neutral-500 dark:border-neutral-100 rounded-lg py-4 px-5 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:cursor-pointer">
            <div>
              <h4 className="text-lg font-semibold mb-2 leading-snug min-h-[56px]">
                Supermarket Sales (Dashboard Looker Studio)
              </h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-100">
                Built an interactive sales dashboard using Looker Studio to analyze supermarket performance, uncovering trends and customer insights from real-world data.
              </p>
            </div>
            <div>
              <hr className="my-3 text-neutral-300 dark:text-neutral-100" />
              <p className="text-xs italic">
                <b>Tools:</b> Looker Studio, Kaggle Dataset
              </p>
            </div>
          </div>
          <div className="h-full flex flex-col justify-between border-2 border-neutral-500 dark:border-neutral-100 rounded-lg py-4 px-5 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:cursor-pointer">
            <div>
              <h4 className="text-lg font-semibold mb-2 leading-snug min-h-[56px]">
                Customer Personality Analysis
              </h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-100">
                Applied clustering techniques to segment customers based on demographics, purchasing behavior, and campaign responses, uncovering patterns to enable data-driven marketing strategies.
              </p>
            </div>
            <div>
              <hr className="my-3 text-neutral-300 dark:text-neutral-100" />
              <p className="text-xs italic">
                <b>Tools:</b> Python, Pandas, Scikit-learn (KMeans), Plotly
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link 
            className="cursor-pointer transition-all duration-300 hover:underline hover:scale-105"
            href="/projects"
          >
            See more Projects →
          </Link>
        </div>
      </section>

      <section className="cursor-default grid gap-8 md:gap-10">
        <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-center">
          Achievements
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border rounded-xl p-4 text-center hover:scale-105 hover:cursor-pointer transition-all duration-300">
            <h4 className="text-xl font-bold">Dashboard</h4>
            <p className="text-sm text-neutral-500">Faster Decisions</p>
          </div>
          <div className="border rounded-xl p-4 text-center hover:scale-105 hover:cursor-pointer transition-all duration-300">
            <h4 className="text-xl font-bold">Real-Time Data</h4>
            <p className="text-sm text-neutral-500">Better Insights</p>
          </div>
          <div className="border rounded-xl p-4 text-center hover:scale-105 hover:cursor-pointer transition-all duration-300">
            <h4 className="text-xl font-bold">80%</h4>
            <p className="text-sm text-neutral-500">Lead Accuracy</p>
          </div>
          <div className="border rounded-xl p-4 text-center hover:scale-105 hover:cursor-pointer transition-all duration-300">
            <h4 className="text-xl font-bold">90%</h4>
            <p className="text-sm text-neutral-500">Lead Filtering</p>
          </div>
        </div>
      </section>

      <section className="cursor-default grid gap-6 md:gap-8">
        <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight text-center">
          Let's Work Together
        </h3>
        <p className="text-neutral-400 text-center">
          Open to opportunities and collaborations. Let's turn data into impactful decisions.
        </p>
        <Link
          href="/contact"
          className="text-center mx-auto text-white bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-800 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
        >
          Contact Me →
        </Link>
      </section>
    </div>
  );
};