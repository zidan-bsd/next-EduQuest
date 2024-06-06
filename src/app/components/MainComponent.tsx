import React from "react";
import Image from "next/image";
import heroShapeOne from "../../../public/hero-shape-1.svg";
import heroShapeTwo from "../../../public/hero-shape-2.png";
import heroBannerOne from "../../../public/hero-banner-1.png";
import heroBannerTwo from "../../../public/hero-banner-2.png";
import categoryOne from "../../../public/category-1.svg";
import categoryTwo from "../../../public/category-2.svg";
import categoryThree from "../../../public/category-3.svg";
import categoryFour from "../../../public/category-4.svg";
import videoBanner from "../../../public/video-banner.png";
import videoShapeOne from "../../../public/video-shape-1.png";
import videoShapeTwo from "../../../public/video-shape-2.png";
import courseOne from "../../../public/course-1.png";
import courseTwo from "../../../public/course-2.png";
import courseThree from "../../../public/course-3.png";
import aboutBanner from "../../../public/about-banner.png";
import aboutShapeOne from "../../../public/about-shape-1.svg";
import aboutShapeTwo from "../../../public/about-shape-2.svg";
import aboutShapeThree from "../../../public/about-shape-3.png";
import aboutShapeFour from "../../../public/about-shape-4.svg";

const MainComponent = () => {
  return (
    <div className="mt-16 mb-32">
      {/* Hero */}
      <section className="px-10 max-563:px-3">
        <div className="flex max-886:flex-col">
          <div className="flex flex-col justify-center w-1/2 max-886:w-full max-886:items-center">
            <h1 className="font-bold text-5xl max-886:text-center">
              The Best Program to
              <span className="text-Font-accent-clr"> Enroll</span> for Exchange
            </h1>

            <p className="text-lg font-medium mt-5 max-886:text-center">
              Excepteur sint occaecat cupidatat non proident sunt in culpa qui
              officia deserunt mollit.
            </p>

            <button className="bg-Accent-clr mt-8 flex w-48 px-4 py-3 rounded-xl border-3 border-custom-border shadow-custom group hover:text-Font-white-clr hover:stroke-Font-white-clr">
              <p className="mr-2 font-medium group-hover:text-Font-white-clr">
                Find courses
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 group-hover:stroke-Font-white-clr"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>

          <figure className="flex justify-center items-center relative w-1/2 max-886:w-full max-563:hidden">
            <div className="mr-8" style={{ width: "270px", height: "300px" }}>
              <Image
                src={heroBannerOne}
                alt="hero banner"
                className="object-cover"
                style={{
                  borderTopRightRadius: "70px",
                  borderBottomLeftRadius: "110px",
                  width: "270px",
                  height: "300px",
                }}
              />
            </div>

            <div
              className="mt-40 max-886:mt-20"
              style={{ width: "240px", height: "370px" }}
            >
              <Image
                src={heroBannerTwo}
                alt="hero banner"
                className="object-cover max-563:h-32"
                style={{
                  borderTopLeftRadius: "70px",
                  borderBottomRightRadius: "110px",
                  width: "240px",
                  height: "370px",
                }}
              />
            </div>

            <Image
              src={heroShapeOne}
              alt=""
              className="absolute -bottom-10 left-8 max-563:"
              style={{
                width: "380px",
                height: "190px",
              }}
            />

            <Image
              src={heroShapeTwo}
              alt=""
              className="absolute top-0 -right-3 -z-10 max-886:hidden"
              style={{
                width: "622px",
                height: "551px",
              }}
            />
          </figure>
        </div>
      </section>
      {/* Category */}
      <section className="mt-16 px-10 flex flex-col max-1200:px-6">
        <div className="flex w-full flex-col items-center">
          <p className="font-bold text-2xl text-Font-accent-clr">CATEGORIES</p>
          <p className="text-3xl my-2 font-bold max-1200:text-center">
            Online <span className="text-Font-accent-clr"> Classes</span> For
            Remote Learning
          </p>
          <p className="font-medium max-1200:text-center">
            Guided by the best teachers in their fields.
          </p>
        </div>
        <div className="w-full grid grid-cols-4 gap-5 mt-10 max-1200:grid-cols-2 max-563:grid-cols-1">
          <div className=" bg-Secondary-clr px-4 py-6 rounded-lg shadow-custom">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Image src={categoryOne} alt="category" />
            </div>
            <p className="text-center text-lg font-bold mt-4">
              Online Degree Programs
            </p>
            <p className="text-medium my-4 text-center">
              Lorem ipsum dolor consec tur elit adicing sed umod tempor.
            </p>
            <p className="text-medium bg-Accent-green-clr py-1 px-2 w-1/2 max-1200:w-2/3 text-center mx-auto rounded-md border-3 border-custom-border shadow-custom hover:text-Font-white-clr cursor-pointer">
              7 Courses
            </p>
          </div>
          <div className=" bg-Secondary-clr px-4 py-6 rounded-lg shadow-custom mt-10 -mb-10 max-1200:mt-0 max-1200:mb-0">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Image src={categoryTwo} alt="category" />
            </div>
            <p className="text-center text-lg font-bold mt-4">
              Non-Degree Programs
            </p>
            <p className="text-medium my-4 text-center">
              Lorem ipsum dolor consec tur elit adicing sed umod tempor.
            </p>
            <p className="text-medium bg-Accent-red-clr py-1 px-2 w-1/2 max-1200:w-2/3 text-center mx-auto rounded-md border-3 border-custom-border shadow-custom hover:text-Font-white-clr cursor-pointer">
              4 Courses
            </p>
          </div>
          <div className=" bg-Secondary-clr px-4 py-6 rounded-lg shadow-custom">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Image src={categoryThree} alt="category" />
            </div>
            <p className="text-center text-lg font-bold mt-4">
              Off-Campus Programs
            </p>
            <p className="text-medium my-4 text-center">
              Lorem ipsum dolor consec tur elit adicing sed umod tempor.
            </p>
            <p className="text-medium bg-Accent-gray-clr py-1 px-2 w-1/2 max-1200:w-2/3 text-center mx-auto rounded-md border-3 border-custom-border shadow-custom hover:text-Font-white-clr cursor-pointer">
              8 Courses
            </p>
          </div>
          <div className=" bg-Secondary-clr px-4 py-6 rounded-lg shadow-custom mt-10 -mb-10 max-1200:mt-0 max-1200:mb-0">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Image src={categoryFour} alt="category" />
            </div>
            <p className="text-center text-lg font-bold mt-4">
              Hybrid Distance Programs
            </p>
            <p className="text-medium my-4 text-center">
              Lorem ipsum dolor consec tur elit adicing sed umod tempor.
            </p>
            <p className="text-medium bg-Accent-orange-clr py-1 px-2 w-1/2 max-1200:w-2/3 text-center mx-auto rounded-md border-3 border-custom-border shadow-custom hover:text-Font-white-clr cursor-pointer">
              8 Courses
            </p>
          </div>
        </div>
      </section>
      {/* Introduction */}
      <section className="mt-32">
        <div className="flex justify-center items-center relative max-886:px-4">
          <Image
            className="max-886:w-full w-3/5"
            src={videoBanner}
            alt=""
            style={{
              borderTopRightRadius: "70px",
              borderBottomLeftRadius: "120px",
            }}
          />
          <Image
            className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 -z-10 max-886:hidden"
            src={videoShapeOne}
            alt=""
          />
          <Image
            className="absolute -top-12 left-3/4 w-32 z-10 max-886:hidden"
            src={videoShapeTwo}
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-Accent-clr p-5 rounded-full cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 fill-Font-white-clr stroke-Font-white-clr"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-20 gap-8 px-10 max-886:grid-cols-2 max-563:grid-cols-1 max-563:px-4">
          <div className="bg-Secondary-clr flex flex-col justify-center items-center py-8 px-8 rounded-md shadow-custom border-3 border-custom-border">
            <p className="text-3xl font-bold">29.3k</p>
            <p className="font-medium mt-2 text-center">STUDENT ENROLLED</p>
          </div>
          <div className="bg-Secondary-clr flex flex-col justify-center items-center py-8 px-8 rounded-md shadow-custom border-3 border-custom-border">
            <p className="text-3xl font-bold">20.1k</p>
            <p className="font-medium mt-2 text-center">CLASS COMPLETED</p>
          </div>
          <div className="bg-Secondary-clr flex flex-col justify-center items-center py-8 px-8 rounded-md shadow-custom border-3 border-custom-border">
            <p className="text-3xl font-bold">100%</p>
            <p className="font-medium mt-2 text-center">SATISFACTION RATE</p>
          </div>
          <div className="bg-Secondary-clr flex flex-col justify-center items-center py-8 px-8 rounded-md shadow-custom border-3 border-custom-border">
            <p className="text-3xl font-bold">472+</p>
            <p className="font-medium mt-2 text-center">TOP INSTRUCTORS</p>
          </div>
        </div>
      </section>
      {/* Course */}
      <section className="mt-16 flex flex-col items-center">
        <div>
          <p className="font-medium text-center text-xl">POPULAR COURSES</p>
          <p className="font-bold text-3xl text-center mt-2">
            Pick A Course To Get Started
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 px-28 mt-6 max-1200:px-16 max-886:grid-cols-2 max-886:px-10 max-697:grid-cols-1 max-697:px-4">
          <div className="bg-Secondary-clr border-3 border-custom-border shadow-custom cursor-pointer rounded-lg">
            <Image src={courseOne} alt="course" className="w-full" />
            <div className="p-4">
              <p className="bg-Accent-orange-clr w-1/3 text-center rounded-md text-sm font-medium py-1">
                Beginner
              </p>
              <p className="mt-2 text-lg font-bold">
                Build Responsive Landing Page with HTML and CSS
              </p>
              <div className="flex my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 fill-Accent-orange-clr"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <p>(4.8/5)</p>
              </div>
              <p className="font-bold text-lg text-Accent-red-clr">$34</p>
              <div className="flex justify-between mt-2">
                <p className="font-medium">8 Lessons</p>
                <p className="font-medium">42 Students</p>
              </div>
            </div>
          </div>
          <div className="bg-Secondary-clr border-3 border-custom-border shadow-custom cursor-pointer rounded-lg">
            <Image src={courseTwo} alt="course" className="w-full" />
            <div className="p-4">
              <p className="bg-Accent-red-lght-clr w-1/3 text-center rounded-md text-sm font-medium py-1">
                Advanced
              </p>
              <p className="mt-2 text-lg font-bold">
                Javascript Masterclass for Advanced
              </p>
              <div className="flex my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 fill-Accent-orange-clr"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <p>(4.6/5)</p>
              </div>
              <p className="font-bold text-lg text-Accent-red-clr">$34</p>
              <div className="flex justify-between mt-2">
                <p className="font-medium">16 Lessons</p>
                <p className="font-medium">124 Students</p>
              </div>
            </div>
          </div>
          <div className="bg-Secondary-clr border-3 border-custom-border shadow-custom cursor-pointer rounded-lg">
            <Image src={courseThree} alt="course" className="w-full" />
            <div className="p-4">
              <p className="bg-Accent-clr w-1/3 text-center rounded-md text-sm font-medium py-1">
                Beginner
              </p>
              <p className="mt-2 text-lg font-bold">
                The Complete React JS Course for Frontend Dev
              </p>
              <div className="flex my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 fill-Accent-orange-clr"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <p>(4.8/5)</p>
              </div>
              <p className="font-bold text-lg text-Accent-red-clr">$34</p>
              <div className="flex justify-between mt-2">
                <p className="font-medium">8 Lessons</p>
                <p className="font-medium">42 Students</p>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-Accent-clr py-3 px-7 rounded-md border-3 border-custom-border shadow-custom mt-10 hover:text-Font-white-clr flex items-center group-hover:stroke-Font-white-clr group">
          Browse more Course
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 ml-2 group-hover:stroke-Font-white-clr"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </section>
      {/* About Us */}
      <section className="flex mt-32 px-10 max-563:px-4 max-886:flex-col max-886:items-center">
        <div className="flex justify-center relative w-3/5 max-886:w-full">
          <Image
            className="rounded-3xl w-96 h-auto object-left max-886:w-3/4"
            src={aboutBanner}
            alt="about banner"
          />
          <Image
            className="absolute -top-10 right-10 w-1/3"
            src={aboutShapeOne}
            alt="shape"
          />
          <Image
            className="absolute -bottom-10 translate-y-1/2 left-0"
            src={aboutShapeTwo}
            alt="shape"
          />
          <Image
            className="absolute top-0 left-20 w-2/3 -z-10"
            src={aboutShapeThree}
            alt="shape"
          />
          {/* 
          <Image src={aboutShapeOne} alt="shape" /> */}
        </div>
        <div className=" flex-1 flex-shrink-0 max-886:mt-16">
          <p className="font-medium text-lg text-Font-gray-clr">ABOUT US</p>
          <p className="font-bold text-3xl">
            Over 10 Years in
            <span className="text-Font-accent-clr"> Distant Learning </span>for
            Skill Development
          </p>
          <p className="my-4 font-medium text-Font-gray-clr">
            Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex
            tempor incididunt labore dolore magna aliquaenim ad minim.
          </p>
          <ul>
            <li className="font-bold">{"-->"} Expert Trainers</li>
            <li className="font-bold my-2">{"-->"} Online Remote Learning</li>
            <li className="font-bold">{"-->"} Lifetime Access</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MainComponent;
