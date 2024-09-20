"use client";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";
import { Tab } from "@headlessui/react";
import { useState, useEffect } from "react";
import CardItemMobile from "@/components/Card";
import { FaArrowUpLong } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircle } from "react-icons/io";

const WorkPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [designRev, setDesignRev] = useState(false);
  const [design, setDesign] = useState(false);

  const dynamicDesign = designRev ? "" : "translate-x-24 translate-y-56";
  const swipeLeftRev = designRev ? "" : "-translate-x-3/4";

  const swipeLeft = design ? "-translate-x-[80%]" : "";

  const toggle = () => {
    setDesign(true);
  };

  useEffect(() => {
    setDesignRev(true);
  });

  const [slideShow, setSlideShow] = useState(false);

  const slideToggle = () => {
    setSlideShow((prevState) => !prevState);
  };

  const designShift = slideShow ? "hidden opacity-20" : "opacity-100";
  const designShift2 = slideShow ? "opacity-100" : "hidden opacity-20";
  const height = slideShow ? "h-fit" : "h-0";

  const resumeDownload = () => {
    const resumeUrl = "/Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
  };
  const scrollToTop = () => {
    let scroll: any = document.getElementById("scroll");
    const scrollUp: any = (scroll.scrollTop = 0);
    return scrollUp;
  };

  return (
    <>
      <div
        id="main"
        className="flex flex-col w-full bg-bgBlack px-5 md:px-20 lg:px-[100px] 2xl:px-80 pb-10 overflow-x-hidden"
      >
        <div className="fixed inset-x-0 w-full h-14 bg-bgBlack z-50" />
        <div className="flex flex-col h-full w-full mt-12">
          <div className="fixed flex w-full inset-x-0 top-12 h-fit bg-bgBlack z-50 px-5 md:px-20 lg:px-[100px] 2xl:px-80">
            <nav className="flex w-full bg-navBlack px-2.5 md:px-8 lg:px-[120px] py-2.5 items-center z-50">
              <div className="flex flex-col lg:hidden w-full justify-center items-end">
                <div
                  onClick={slideToggle}
                  className="flex w-fit items-center lg:hidden"
                >
                  <RxHamburgerMenu
                    className={`text-white text-[34px] motion-reduce:transition-all duration-500 ${designShift}`}
                  />
                </div>
                <div
                  className={`flex flex-col w-full transition-[height] ease-out ${height} delay-75 duration-500 justify-center items-end gap-6 overflow-hidden`}
                >
                  <IoIosCloseCircle
                    onClick={slideToggle}
                    className={`text-3xl text-white motion-reduce:transition-all ease-in-out duration-500 ${designShift2}`}
                  />
                  <div className="flex flex-col w-full items-center px-2.5 py-10  gap-10">
                    <div
                      onClick={resumeDownload}
                      className="flex w-fit p-2.5 items-center justify-center cursor-pointer"
                    >
                      <div className="inline-flex gap-2.5 font-poppins font-semibold text-sm text-white hover:text-skyblue items-center ">
                        RESUME <HiOutlineDownload className="text-xl" />
                      </div>
                    </div>
                    <div className="flex w-full flex-col gap-5 items-center">
                      <span
                        onClick={toggle}
                        className="inline-flex font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer"
                      >
                        <Link href="/Home">Home</Link>
                      </span>
                      <span
                        onClick={toggle}
                        className="inline-flex font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer"
                      >
                        <Link href="/About">About</Link>
                      </span>
                      <span
                        onClick={toggle}
                        className="inline-flex font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer"
                      >
                        <Link href="/Projects">Projects</Link>
                      </span>
                      <span
                        onClick={toggle}
                        className="inline-flex font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer"
                      >
                        <Link href="/Contact">Contact</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex w-full items-center justify-end gap-[75px]">
                <div className="flex gap-5 items-center">
                  <span
                    onClick={toggle}
                    className="font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer"
                  >
                    <Link href="/Home">Home</Link>
                  </span>
                  <span
                    onClick={toggle}
                    className="font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer"
                  >
                    <Link href="/About">About</Link>
                  </span>
                  <span
                    onClick={toggle}
                    className="font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer"
                  >
                    <Link href="/Contact">Contact</Link>
                  </span>
                </div>
                <div
                  onClick={resumeDownload}
                  className="flex w-fit p-2.5 items-center justify-center cursor-pointer"
                >
                  <div className="inline-flex gap-2.5 font-poppins font-semibold text-sm text-white hover:text-skyblue items-center ">
                    RESUME <HiOutlineDownload className="text-xl" />
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="w-full h-16" />
          <div className="flex w-full h-full items-center my-2 gap-40">
            <div
              className={`inline-flex bg-bgBlack w-fit font-bold font-poppins text-skyblue text-xl lg:text-[40px] duration-300`}
            >
              Projects
            </div>
            <div className="hidden lg:inline-flex pt-3 w-fit font-normal font-poppins text-lg text-white">
              I have made a few things, here are some of my favorite's
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:pl-10 lg:pr-[120px] lg:my-8">
            <Tab.Group
              selectedIndex={selectedIndex}
              onChange={setSelectedIndex}
            >
              <Tab.List
                className={`flex lg:flex-col w-full lg:w-[200px] lg:pl-5 items-start gap-5 lg:gap-6 duration-500`}
              >
                <Tab className="flex w-full justify-center lg:justify-start font-poppins pl-2 font-bold text-lg md:text-2xl text-white hover:text-skyblue  ui-selected:text-skyblue ui-selected:border-b-skyblue ui-selected:border-b-[7px] outline-none">
                  FrontEnd
                </Tab>
                <Tab className=" flex w-full justify-center lg:justify-start font-poppins pl-2 font-bold text-lg md:text-2xl text-white hover:text-skyblue ui-selected:text-skyblue ui-selected:border-b-skyblue ui-selected:border-b-[7px] outline-none">
                  BackEnd
                </Tab>
                <Tab className=" flex w-full justify-center lg:justify-start font-poppins pl-2 font-bold text-lg md:text-2xl text-white hover:text-skyblue ui-selected:text-skyblue ui-selected:border-b-skyblue ui-selected:border-b-[7px] outline-none">
                  FullStack
                </Tab>
              </Tab.List>
              <Tab.Panels className="lg:ml-12 h-full gap-4 pb-4 lg:pb-0 sm:px-3.5 pt-2.5 lg:pt-0">
                <div className="lg:hidden inline-flex w-fit font-normal font-poppins text-sm md:text-base text-white mb-2">
                  I have made a few things, here are some of my favorite's
                </div>
                <Tab.Panel>
                  <div className="flex flex-col w-full lg:h-[450px] items-center overflow-hidden">
                    <div
                      id="scroll"
                      className="w-fit grid grid-col-1 md:grid-cols-2 gap-[18px] overflow-y-auto"
                    >
                      <CardItemMobile
                        picture="/PortfolioThumbnail/everytindiscount.png"
                        title="Everytindiscount"
                        description="An E-commerce Platform for Mobile Data, Movie Ticket and Airtime Recharge."
                        link="https://everytindiscount.onrender.com/"
                        buttonclick={toggle}
                        techUsed={["ReactJS", "NodeJS", "Prisma", "GraphQL"]}
                      />
                      <CardItemMobile
                        picture="/PortfolioThumbnail/lendsqr.png"
                        title="Lendlify"
                        description="A Fintech Web Application That Connects Lenders and Borrowers."
                        link="https://kolawole-olaniyi-lendsqr-fe-test.netlify.app/"
                        buttonclick={toggle}
                        techUsed={["ReactJS", "Typescript", "SASS"]}
                      />
                      <CardItemMobile
                        picture="/PortfolioThumbnail/recipify.png"
                        title="Recipify"
                        description="Quickly Find The Best Recipies for you Meals"
                        link="https://recipeefy.netlify.app/"
                        buttonclick={toggle}
                        techUsed={["ReactJS", "Bootstrap", "Git"]}
                      />
                      <CardItemMobile
                        picture="/PortfolioThumbnail/voluntrify.png"
                        title="Voluntrify"
                        description="A Web Application that leverages the Google Maps and Places API to locate places to volunteer around a given Area"
                        link="https://voluntrifyer.netlify.app/"
                        buttonclick={toggle}
                        techUsed={[
                          "ReactJS",
                          "NodeJS",
                          "Google Maps API",
                          "Google Place API",
                        ]}
                      />
                      <CardItemMobile
                        picture="/PortfolioThumbnail/weather-app.png"
                        title="Weather APP"
                        description="Quickly Find the weather condition of some top cities around the world"
                        link="https://weathernyzer.netlify.app"
                        buttonclick={toggle}
                        techUsed={["ReactJS", "CSS3", "Javascript"]}
                      />
                      <CardItemMobile
                        picture="/PortfolioThumbnail/hangman.png"
                        title="Hangman Game"
                        description="Indulge in a little guessing game, with the Hangman Game."
                        link="https://olaniyi-hangman.netlify.app/"
                        buttonclick={toggle}
                        techUsed={["HTML5", "CSS3", "Javascript"]}
                      />
                      <CardItemMobile
                        picture="/PortfolioThumbnail/todo.png"
                        title="Todo App"
                        description="Keep Track of all your Activities and Keep Everything in Place"
                        link="https://olaniyi-todoapp.netlify.app/"
                        buttonclick={toggle}
                        techUsed={["HTML5", "CSS3", "Javascript"]}
                      />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="flex flex-col w-full lg:h-[500px] items-center overflow-hidden">
                    <div
                      id="main"
                      className="w-fit grid grid-col-1 md:grid-cols-2 gap-[18px] overflow-y-auto"
                    >
                      <CardItemMobile
                        picture="/PortfolioThumbnail/translator.png"
                        title="Translator"
                        description="Translator Uses the google translate API to translate a sentence from Spanish, French, German, Russian, Yoruba and Chinese into English."
                        link="/OurKontinent"
                        buttonclick={toggle}
                        techUsed={[
                          "Node.js",
                          "Express",
                          "Boostrap",
                          "Google Translate API",
                        ]}
                      />
                      <CardItemMobile
                        picture="/PortfolioThumbnail/youtube-downloader.png"
                        title="Youtube Downloader"
                        description="A simple Backend Web API for Downloading Youtube Videos"
                        link="https://youtube-downloader-cli-app.onrender.com/"
                        buttonclick={toggle}
                        techUsed={["NodeJS", "Express", "youtubeDL"]}
                      />
                      <CardItemMobile
                        picture="/PortfolioThumbnail/sentimental.png"
                        title="Sentimental"
                        description="Sentimental is Node.js and ExpressJS Application that uses Natural Language Processing to determine the level of sentiment on a piece of text"
                        link="https://sentimental-mx56.onrender.com"
                        buttonclick={toggle}
                        techUsed={["Node.js", "Express", "Boostrap", "NLP"]}
                      />
                      <CardItemMobile
                        picture="/PortfolioThumbnail/hospital-app.png"
                        title="Hospital Listing Application"
                        description="A CRUD application, that allows users to list and see Hospitals around Nigeria"
                        link="https://hospital-listing-app-backend.onrender.com/api/v1/hospital"
                        buttonclick={toggle}
                        techUsed={["Node.js", "Express", "MongoDB", "Mongoose"]}
                      />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>The Fullstack realm Here</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
            <div className="flex fixed flex-col w-fit h-fit top-[78%] left-[81%] md:left-[86%] z-50">
              <Link
                href="#main"
                onClick={scrollToTop}
                className={`flex items-center justify-center w-[53px] h-[52px] rounded-full py-2.5 px-4 bg-[#0C0D0F]`}
              >
                <FaArrowUpLong className="text-skyblue text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkPage;
