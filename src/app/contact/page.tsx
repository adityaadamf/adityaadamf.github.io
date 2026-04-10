"use client";

import { ContactMe } from "@/data/contact";
import Link from "next/link";

export default function Contact() {
  return(
    <div>
      <h3 className="text-xl md:text-4xl font-bold">Contact</h3>
      <hr className="my-8 border-neutral-200 dark:border-neutral-800" />
      <p className="text-neutral-600 dark:text-white mb-5">
        Feel free to reach out if you'd like to discuss data analytics, data science projects,
        collaboration opportunities, or potential roles. I'm open to data analyst or data scientist positions.
      </p>
      <ul className="text-neutral-600 dark:text-neutral-300 space-y-2">
        {
          ContactMe.map((contact) => (
            <li
              key={contact.name}
            >
              <span className="mr-2 font-bold">{contact.name}:</span>
              <Link
                className="hover:underline"
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.text}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};