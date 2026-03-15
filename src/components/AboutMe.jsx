import Heading from "./Heading";
export default function AboutMe() {
  return (
    <section id="about" className="min-h-dvh bg-bgGreen-200 p-8">
      <Heading
        sub={"Get to know me"}
        smallTextColor={"text-gray-100"}
        heading={"About me"}
        textColor={"text-gray-100"}
      />
      <div className="container flex max-w-6xl mx-auto w-1/2 items-center gap-15 mb-0 max-sm:flex-col max-sm:w-full max-sm:gap-0">
        <div className="circle absolute w-70 h-70 left-81 bottom-[-540px] bg-gray-300 rounded-full max-sm:hidden [@media(min-width:768px)_and_(max-width:1024px)]:hidden"></div>
        <img
          src="/images/photo-2.webp"
          alt="Kenneth Kafunya"
          className="w-full h-80 object-cover mx-auto z-10 rounded-full max-sm:hidden [@media(min-width:768px)_and_(max-width:1024px)]:hidden "
        />

        <div className="copy flex flex-col max-sm:mt-6 [@media(min-width:768px)_and_(max-width:1024px)]:mt-6">
          <p className="text-gray-50 text-lg">
            <span className="text-5xl">"I</span> am a Product Designer with 3+
            years of experience, specialising in bridging the gap between design
            and code. I am currently honing my frontend development skills by
            building my online portfolio with React, treating the platform as a
            live practice project to ensure my designs are as technically
            feasible."
          </p>
        </div>
      </div>
    </section>
  );
}
