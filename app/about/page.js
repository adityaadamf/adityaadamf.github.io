'use client'
import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { IconBrandLinkedinFilled, IconBrandGithub, IconBrandMedium } from "@tabler/icons-react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function AboutMe() {
  const [myProfile, setMyProfile] = useState("");
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
    // My Profile
    setMyProfile(resdata.profile);
  };
  
  useEffect(() => {
    if (myProfile === "") getDataSummary();
  }, []);

  return (
    <>
      <Header />
      <div className="aditya-about">
        <section className="aditya-about-section-1">
          <div className="text-center py-16 sm:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              .
            </p>
          </div>
          <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 space-y-6 md:space-y-0 md:space-x-8">
            <img
              src={myProfile?.img}
              alt={myProfile?.name}
              className="w-64 h-72 md:w-1/4 md:h-96 object-cover mx-auto rounded-xl"
            />
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-900">{myProfile?.name}</h1>
              <p className="text-gray-600">{Array.isArray(myProfile?.my_history) ? myProfile?.my_history[0]?.title : null}</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-3">
                {
                  myProfile?.social ?
                    myProfile?.social.map((social, i) => (
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
              <div dangerouslySetInnerHTML={{ __html: myProfile?.desc }} />
            </div>
          </div>
        </section>
        <section className="aditya-about-section-2 px-7 md:px-20">
          <h3 className="text-xl text-left py-6">Work Experiences</h3>
          <div className="max-w-lg space-y-6">
            {
              myProfile?.my_history ?
                myProfile?.my_history.map((item, index) => (
                  <div key={index} className="relative flex gap-4">
                    {/* Timeline Indicator */}
                    <div className="absolute left-2 top-0 bottom-0 w-0.5"></div>

                    {/* Icon */}
                    <div className="relative m-2 z-10 flex h-2 w-2 items-center justify-center bg-gray-300 text-white rounded-full" />

                    {/* Content */}
                    <div className="flex-1 space-y-1">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.company}</p>
                      <p className="text-xs text-gray-500">
                        {item.start_date} - {item.end_date || "Present"}
                      </p>
                    </div>
                  </div>
                ))
              :
              null
            }
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
