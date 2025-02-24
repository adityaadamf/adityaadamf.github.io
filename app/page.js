'use client'
import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { IconBrandLinkedinFilled, IconBrandGithub, IconBrandMedium } from "@tabler/icons-react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [shortProfile, setShortProfile] = useState("");
  const [skillsList, setSkillsList] = useState([]);
  const listIconSocial = {
    "LinkedIn": {
      "class": "hover:text-blue-600",
      "icon": <IconBrandLinkedinFilled className="size-6" />
    },
    "Github": {
      "class": "hover:text-black",
      "icon": <IconBrandGithub className="size-6" />
    },
    "Medium": {
      "class": "hover:text-black",
      "icon": <IconBrandMedium className="size-6" />
    },
    "Email": {
      "class": "hover:text-red-600",
      "icon": <EnvelopeIcon className="size-6" />
    }
  };

  const getDataSummary = async () => {
    const res = await fetch("https://adityaadamf.github.io/assets/json/4a91d5c8b2697b5c84bcb9d7d3690813.json", {
      next: { revalidate: 3600 }
    });
    const resdata = await res.json();
    // Short Profile
    setShortProfile(resdata.profile);
    // List of Skills
    setSkillsList(resdata.skills);
  };
  
  useEffect(() => {
    getDataSummary();
  }, []);

  return (
    <>
      <Header />
      <div className="aditya-home">
        <section className="aditya-home-section-1">
          <div className="flex items-center justify-center py-16">
            <div className="w-full max-w-xl text-center">
              <img
                src={shortProfile?.img}
                alt="Aditya Adam Firdaus"
                className="mx-auto h-36 w-36 rounded-full"
              />
              <h2 className="mt-4 text-2xl font-semibold text-gray-900">{shortProfile?.name}</h2>
              <p className="mt-2 text-sm text-gray-600">{shortProfile?.shortdesc}</p>
              <div className="mt-4 flex justify-center gap-4">
                {
                  shortProfile?.social ?
                    shortProfile?.social.map((social, i) => (
                      <a
                        key={i}
                        href={social.link}
                        target={social.target}
                        className={`text-gray-600 ${listIconSocial[social.title].class}`}
                      >
                        {listIconSocial[social.title].icon}
                      </a>
                    ))
                  :
                  null
                }
              </div>
            </div>
          </div>
        </section>
        <section className="aditya-home-section-2">
          <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
              My Skills
            </h2>
            <div className="space-y-6">
              {
                skillsList?.length > 0 ?
                  skillsList.map((category, i) => (
                    <div key={i}>
                      <h3 className="text-lg font-semibold text-gray-700 mb-3">{category.name}</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {category.skills.map((skill, j) => (
                          <div
                            key={j}
                            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 flex items-center justify-center text-center font-medium"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                :
                null
              }
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
