"use client";
import Brain from "@/components/brain";
import { skills } from "@/utils/constant";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-50px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-50px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-36 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 2xl:w-1/2">
          {/* BIOGRAPHY */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              molestias, necessitatibus deserunt eaque voluptates possimus
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              “Engineers like to solve problems. If there are no problems
              handily available, they will create their own problems.” - Scott
              Adams
            </span>
            {/* BIOGRAPHY SIGNATURE SVG */}
            {/* <div className="self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="100"
                viewBox="0 0 181 263"
                fill="none"
              >
                <path
                  d="M51 32C47.8901 48.586 41.8819 64.9184 36 80.6667C30.2032 96.1872 24.047 113.246 14.1111 126.778C9.86086 132.566 8.64817 128.491 8.66666 122.778C8.76879 91.2216 16.8787 57.1483 29.6667 28.4444C30.6794 26.1713 45.6223 -6.94865 54.2778 4.1111C57.4375 8.14857 57.4367 16.8263 57.6111 20.7222C58.8789 49.037 56.3071 78.0295 52.2222 106C45.7426 150.368 34.7601 194.327 17.2222 235.667C15.2083 240.414 -4.45694 280.865 4.16666 249C15.8887 205.686 33.5026 163.492 52.1667 122.778C55.5943 115.301 65.14 94.6569 71.3333 85.6667C72.052 84.6234 74.0031 82.1103 74.3333 83.3333C75.0311 85.9175 73.5159 88.634 72.8333 91.2222C68.2101 108.752 60.589 125.479 53.3889 142.056C51.9319 145.41 50.4375 148.748 49 152.111C48.4188 153.471 46.672 154.9 47.3333 156.222C47.9271 157.41 48.68 153.934 49.3333 152.778C57.3148 138.657 59.0548 135.051 68.5556 119.667C77.3522 105.423 87.7772 89.446 97.5556 75.7778C100.84 71.1874 110.288 58.3341 115.667 53.3333C117.097 52.0037 119.667 50.312 119.667 53.5555C119.667 54.015 117.777 62.42 118 62.2778C122.624 59.3351 125.352 54.1461 129 50.0555C137.266 40.7876 142.315 35.2089 151.444 26.6667C159.906 18.7499 168.801 11.4396 179 5.99999"
                  stroke="#595252"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div> */}
            {/* SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER*/}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LISTS */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                  >
                    {skill}
                  </div>
                );
              })}
            </motion.div>
            <motion.svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EDUCATION & EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM 1*/}
              <div className="flex justify-between h-auto">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* EXPERIENCE TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Master in Engineering with Honours in Civil Engineering
                  </div>
                  {/* EXPERIENCE DESC */}
                  <div className="p-3 text-sm italic">
                    Completed an undergraduate master's program and conducted a
                    thesis on criticality analysis and resilience assessment of
                    water distribution systems.
                  </div>
                  {/* EXPERIENCE DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2015-2018
                  </div>
                  {/* EXPERIENCE PLACE/COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    University of Nottingham, UK
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-400 rounded relative">
                    {/* CIRCLE NODE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-300 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
              {/* EXPERIENCE LIST ITEM 2*/}
              <div className="flex justify-between h-auto ">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-400 rounded relative">
                    {/* CIRCLE NODE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-300 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* EXPERIENCE TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Civil Project Engineer
                  </div>
                  {/* EXPERIENCE DESC */}
                  <div className="p-3 text-sm italic">
                    In charge of managing schedules and resources, ensuring
                    adherence to quality standards, and providing technical
                    guidance to team members.
                  </div>
                  {/* EXPERIENCE DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2018-2020
                  </div>
                  {/* EXPERIENCE PLACE/COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Matrix Concepts Holdings Berhad
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM 3*/}
              <div className="flex justify-between h-auto ">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* EXPERIENCE TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Formwork Design Engineer
                  </div>
                  {/* EXPERIENCE DESC */}
                  <div className="p-3 text-sm italic">
                    Examine structures, produce shop drawings using CAD systems
                    and prepare technical reports.
                  </div>
                  {/* EXPERIENCE DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2020-2022
                  </div>
                  {/* EXPERIENCE PLACE/COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    GETO Global Construction
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-400 rounded relative">
                    {/* CIRCLE NODE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-300 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block lg:w-1/3 2xl:w-1/2 sticky top-0">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
