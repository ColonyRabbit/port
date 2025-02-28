"use client";
import Image from "next/image";
import React from "react";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";
import "aos/dist/aos.css";

export function TimelineDemo() {
  const data: TimelineEntry[] = [
    {
      title: <>Exhibition 19 MAR 2024</>,
      content: (
        <div>
          <div
            data-aos="fade-up"
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8"
          >
            Rajamangala University of Technology Krungthep .
            <p>
              I participated in a project proposal competition in the Faculty of
              Science and won first place.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              data-aos="fade-up"
              src="/timeline/Exhibition1.jpg"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              alt="Won first place project proposal"
            />
            <Image
              data-aos="fade-up"
              src="/timeline/Exhibition2.jpg"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              alt="Rajamangala University of Technology Krungthep"
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <>
          NOV 11 2024 <br /> - <br />
          MAR 07 2025
        </>
      ),
      content: (
        <div>
          <div
            data-aos="fade-up"
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8"
          >
            SSL Logistics Co., Ltd.
            <p data-aos="fade-up">
              Project dealer : Managed the operation of B2B web applications for
              logistics business clients. Collaborated with different teams to
              develop and improve applications for business use. Fixed issues
              and optimized applications to run more efficiently and quickly.
              Added new features and improved user experience based on user
              feedback. Used data from applications to help make decisions for
              better performance and operations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              data-aos="flip-left"
              src="/timeline/medium1.jpg"
              width={500}
              height={500}
              alt="SSL Office"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              data-aos="flip-left"
              src="/timeline/medium2.jpg"
              width={500}
              height={500}
              alt="SSL Office"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              data-aos="flip-left"
              src="/timeline/medium3.jpg"
              width={500}
              height={500}
              alt="SSL Office"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              data-aos="flip-left"
              src="/timeline/medium4.jpg"
              width={500}
              height={500}
              alt="SSL Office"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
