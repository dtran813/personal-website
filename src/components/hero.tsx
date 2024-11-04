import SplitText from "@/components/UI/splitText";

const Hero = () => (
  <section id="hero" className="h-screen">
    <div className="relative flex h-full items-center justify-center text-center">
      <div className="mb-32">
        <h1
          className="name text-5xl font-black tracking-wide text-white md:text-7xl"
          role="heading"
          aria-label="Hoa Tran"
          aria-level={1}
        >
          <SplitText text={"Hoa Tran"} />
        </h1>
        <p className="mt-4 text-xl text-gray-300 md:text-2xl">
          I am a Full Stack Developer & Designer
        </p>
        <button className="mt-6 rounded bg-blue-500 px-6 py-3 font-bold text-white">
          Learn More About Me
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
