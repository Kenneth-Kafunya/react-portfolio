import LargeBtn from "./LargeBtn";

export default function Hero() {
  return (
    <section className="flex h-dvh justify-center items-center">
      <div className="flex flex-col w-1/2">
        <h1 className="text-8xl font-bold tracking-tighter">
          Hey, Kenneth here —{" "}
        </h1>
        <span className="text-6xl tracking-tight pt-1">
          <span className="bg-amber-400 px-2">Product designer</span> and almost{" "}
          <span className="">Web dev</span>.{" "}
        </span>
        <p className="text-xl pt-4">
          For founders, startups and next-gen Brands.
        </p>
        <div className="button flex flex-row gap-4">
          <LargeBtn title={"Download CV"} />
          <LargeBtn title={"Let's Work"} />
        </div>
      </div>
    </section>
  );
}
