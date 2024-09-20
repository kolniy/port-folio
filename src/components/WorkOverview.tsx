"use client";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";
import { FaArrowLeftLong, FaArrowUpLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiLoader2Line } from "react-icons/ri";

const WorkOverview = (props: any) => {
  const [design, setDesign] = useState(false);

  const swipe = design ? "" : "-translate-x-full";
  const buttonSwipe = design ? "opacity-100" : "opacity-0";

  useEffect(() => {
    setDesign(true);
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

  const [load, setLoad] = useState(false);
  const LoadEffect = load ? "hidden" : "flex";
  const loadImage = load ? "grid" : "hidden";

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 4000);
  }, []);

  return (
    <>
      <div className="w-full h-full overflow-hidden">
        <div className="flex w-full h-full bg-bgBlack px-5 md:px-20 lg:px-[100px] 2xl:px-80 pb-14 overflow-hidden">
          <div className="fixed inset-x-0 w-full h-14 bg-bgBlack z-50" />
          <div className="flex flex-col w-full">
            <div className="fixed flex w-[100vw] inset-x-0 top-8 md:top-12 h-fit bg-bgBlack z-50 px-5 md:px-20 lg:px-[100px] 2xl:px-80">
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
                        <span className="inline-flex font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
                          <Link href="/Home">Home</Link>
                        </span>
                        <span className="inline-flex font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
                          <Link href="/About">About</Link>
                        </span>
                        <span className="inline-flex font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
                          <Link href="/Projects">Projects</Link>
                        </span>
                        <span className="inline-flex font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
                          <Link href="/Contact">Contact</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex w-full items-center justify-end gap-[75px]">
                  <div className="flex gap-5 items-center">
                    <span className="font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
                      <Link href="/Home">Home</Link>
                    </span>
                    <span className="font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
                      <Link href="/About">About</Link>
                    </span>
                    <span className="font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
                      <Link href="/Projects">Projects</Link>
                    </span>
                    <span className="font-poppins font-medium text-white text-base hover:text-skyblue cursor-pointer">
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
            <div className="flex lg-hidden w-full h-16" />
            <div
              id="main"
              className="fixed flex w-full h-12 md:h-20 inset-x-0 inset-y-[78px] md:inset-y-[90px] items-center my-2 gap-6 overflow-hidden z-30 bg-bgBlack px-5 md:px-20 lg:px-[100px] 2xl:px-80"
            >
              <Link href="/Projects">
                <div
                  className={`flex w-[31px] h-[31px] md:w-[53px] items-center justify-center md:h-[52px] rounded-full bg-[#0C0D0F] ${buttonSwipe} motion-reduce:transition-opacity ease-in delay-500`}
                >
                  <FaArrowLeftLong className="text-skyblue text-base md:text-2xl" />
                </div>
              </Link>
              <div
                className={`inline-flex w-fit font-bold font-poppins text-skyblue text-xl md:text-[40px] ${swipe} duration-300`}
              >
                Projects
              </div>
            </div>

            <div className="flex mt-20 w-full lg:px-[120px]">
              <div className="flex flex-col w-full gap-6">
                <div className="flex flex-col gap-2.5">
                  <div className="font-poppins font-semibold text-[#F2F2F2] text-[22px] lg:text-[26px]">
                    {props?.title}
                  </div>
                  <div className="font-poppins font-normal text-[#F2F2F2] text-sm md:text-base">
                    {props?.description}
                  </div>
                  <div className="flex gap-2.5">
                    <div
                      className={`flex items-center bg-textback p-2 rounded-[5px] h-[20px]`}
                    >
                      <div className="font-poppins font-normal text-skyblue text-xs">
                        {props?.subtitle}
                      </div>
                    </div>
                    <div
                      className={`flex items-center bg-textback p-2 rounded-[5px] h-[20px]`}
                    >
                      <div className="font-poppins font-normal text-skyblue text-xs">
                        {props?.subtitle2}
                      </div>
                    </div>
                    {props?.subtitle3 ? (
                      <div
                        className={`flex items-center bg-textback p-2 rounded-[5px] h-[20px]`}
                      >
                        <div className="font-poppins font-normal text-skyblue text-xs">
                          {props?.subtitle3}
                        </div>
                      </div>
                    ) : null}
                    {props?.subtitle4 ? (
                      <div
                        className={`flex items-center bg-textback p-2 rounded-[5px] h-[20px]`}
                      >
                        <div className="font-poppins font-normal text-skyblue text-xs">
                          {props?.subtitle4}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div
                  className={`${LoadEffect} h-[600px] w-full items-center justify-center transition-all ease-out`}
                >
                  <RiLoader2Line className="animation-spin animate-pulse text-2xl text-skyblue" />
                </div>
                <div
                  className={`${loadImage} w-full grid-cols-1 gap-[22px] transition-all ease-in`}
                >
                  <img className="w-full" src={`${props?.image1}`} alt="" />

                  <img className="w-full" src={`${props?.image2}`} alt="" />

                  {props?.image3 ? (
                    <img className="w-full" src={`${props?.image3}`} alt="" />
                  ) : null}

                  {props?.image4 ? (
                    <img className="w-full" src={`${props?.image4}`} alt="" />
                  ) : null}
                  {props?.image5 ? (
                    <img className="w-full" src={`${props?.image5}`} alt="" />
                  ) : null}

                  {props?.image6 ? (
                    <img className="w-full" src={`${props?.image6}`} alt="" />
                  ) : null}

                  {props?.image7 ? (
                    <img className="w-full" src={`${props?.image7}`} alt="" />
                  ) : null}

                  {props?.image8 ? (
                    <img className="w-full" src={`${props?.image8}`} alt="" />
                  ) : null}

                  {props?.image9 ? (
                    <img className="w-full" src={`${props?.image9}`} alt="" />
                  ) : null}
                  {props?.image10 ? (
                    <img className="w-full" src={`${props?.image10}`} alt="" />
                  ) : null}
                  {props?.image11 ? (
                    <img className="w-full" src={`${props?.image11}`} alt="" />
                  ) : null}
                  {props?.image12 ? (
                    <img className="w-full" src={`${props?.image12}`} alt="" />
                  ) : null}

                  {props?.image13 ? (
                    <img className="w-full" src={`${props?.image13}`} alt="" />
                  ) : null}
                  {props?.image14 ? (
                    <img className="w-full" src={`${props?.image14}`} alt="" />
                  ) : null}
                  {props?.image15 ? (
                    <img className="w-full" src={`${props?.image15}`} alt="" />
                  ) : null}
                  {props?.image16 ? (
                    <img className="w-full" src={`${props?.image16}`} alt="" />
                  ) : null}
                </div>
              </div>
              <div className="flex fixed flex-col w-fit h-fit top-[80%] left-[82%] md:left-[86%]">
                <Link
                  href="#main"
                  className={`flex items-center justify-center w-[53px] h-[52px] rounded-full py-2.5 px-4 bg-[#0C0D0F]`}
                >
                  <FaArrowUpLong className="text-skyblue text-2xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default WorkOverview;
