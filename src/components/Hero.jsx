import LargeBtn from "./LargeBtn";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section
        id="home"
        className="h-dvh flex items-center justify-center mt-11 px-6
[@media(min-width:768px)_and_(max-width:1024px)]:min-h-dvh [@media(min-width:768px)_and_(max-width:1024px)]:mb-11
"
      >
        <div className="flex flex-col w-1/2 mx-auto my-11 mt-5xl max-sm:w-2xl max-sm:px-6 max-md:text-center max-xl:py-8 ">
          <h1 className="text-green-900 text-8xl max-md:text-6xl max-sm:text-6xl font-bold -tracking-normal">
            Hey, Kenneth here —{" "}
          </h1>
          <div className="descriptionHeader text-green-900 max-sm:pt-3 max-sm:w-full flex mx-auto py-auto max-sm:justify-center max-sm:flex-col max-sm:gap-3 [@media(min-width:768px)_and_(max-width:1024px)]:w-full [@media(min-width:768px)_and_(max-width:1024px)]:gap-3">
            <span className="text-6xl max-lg:text-4xl max-sm:text-xl tracking-tight pt-1 max-sm:w-full ">
              <span className="">3+ years</span> of experience as a{" "}
              <span className="">Product designer.</span>{" "}
              <span className="font-bold">Ship now, Animations later</span>
              .{" "}
            </span>
          </div>

          <p className="subText text-gray-500 text-xl max-sm:text-[1rem] pt-2">
            For founders, startups and next-gen Brands.
          </p>
          <div className="button flex gap-6 mt-11 flex-row max-md:items-center max-md:flex-col">
            <LargeBtn title={"Download CV"} />
            <LargeBtn
              title={"Let’s get to work"}
              BtnStyle={true}
              emailBtn={true}
            />
          </div>
        </div>
      </section>
    </>
  );
}
