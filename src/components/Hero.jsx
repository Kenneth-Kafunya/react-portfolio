import LargeBtn from "./LargeBtn";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-dvh my-11 justify-center items-center"
    >
      <div className="flex flex-col w-1/2 max-sm:w-full max-sm:px-6 max-md:text-center ">
        <h1 className="text-green-900 text-8xl max-lg:text-6xl max-md:text-6xl max-sm:text-6xl font-bold -tracking-normal">
          Hey, Kenneth here —{" "}
        </h1>
        <div className="descriptionHeader text-green-900 max-sm:pt-3 max-sm:w-1/2 flex mx-auto pt-4">
          <span className="text-6xl max-lg:text-4xl max-sm:text-xl tracking-tight pt-1">
            <span className="">Product designer</span> and almost{" "}
            <span className="">Web dev</span>.{" "}
          </span>
        </div>

        <p className="subText text-gray-500 text-xl max-sm:text-[1rem] pt-2">
          For founders, startups and next-gen Brands.
        </p>
        <div className="button flex gap-6 mt-11 flex-row max-md:items-center max-md:flex-col">
          <LargeBtn title={"Download CV"} />
          <LargeBtn title={"Let's Work"} BtnStyle={true} emailBtn={true} />
        </div>
      </div>
    </section>
  );
}
