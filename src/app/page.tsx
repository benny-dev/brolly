import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="relative hero h-screen">
        {/* <Image src={"/hero.jpg"} alt={"an image"} width={"100"} height={"100"} /> */}
        <img src={"/hero.jpg"} alt="full moon" className="w-full h-full -z-50 absolute object-cover" />
        <div className="md:w-4/5 md:m-auto">
          <div className="flex justify-between p-4 items-center">
            <Image src="/vercel.svg" alt={"Logo"} width={100} height={100} style={{ color: "white" }} />
            <button>
              <svg className="w-6 h-6 text-white dark:text-white block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
              </svg>
            </button>
          </div>
          <div className="w-4/5 mx-auto pt-[200px] md:w-1/2">
            <p className="font-bold text-white w-full text-3xl md:text-[50px] md:font-extrabold md:tracking-wide">We build AI applications</p>
            <p className=" text-white pt-4 text-sm pb-4 md:text-2xl font-thin md:pt-8 md:tracking-wide">We are a Toronto based studio specializing in the use of deep learning to launch cutting edge computer vision, predictive analytics and machine learning applications</p>
            <button className="rounded-full px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white text-xs w-[40%] font-semibold m-auto block md:w-[25%] md:py-4">GET IN TOUCH</button>
            <div className="m-auto  bottom-0 w-8 h-8 mt-14">
              <svg className="w-full h-full text-white m-auto dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m19 9-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:flex">
        <section className="md:order-2 md:items-center md:w-1/2">
          <img src="/float.png" alt="apple device" className="w-full h-full" />
        </section>
        <section className="w-11/12 m-auto h-96 p-6 md:w-1/2 md:p-14">
          <p className="text-4xl font-bold text-center opacity-60">Computer Vision</p>
          <p className="pt-6 text-xl text-center opacity-50 px-4 md:px-48">Extract, analyze and understand the visuals of your industry,</p>
          <button className="p-1 w-[158px] rounded-full bg-gradient-to-r from-orange-500 to-pink-600 m-auto mt-6">
            <span className="w-full text-xs font-bold p-2 px-3 bg-white rounded-full">VIEW CASE STUDY</span>
          </button>
        </section>
      </div>
    </main>
  );
}
