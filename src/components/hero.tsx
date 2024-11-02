import SplitText from "@/components/UI/splitText";

const Hero = () => (
  <section id="hero" className="h-screen">
    <div className="relative flex items-center justify-center h-full text-center">
      <div className="mb-32">
        <h1
          className="name text-4xl md:text-6xl text-white font-bold"
          role="heading"
          aria-label="Hoa Tran"
          aria-level={1}
        >
          <SplitText text={"Hoa Tran"} />
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-4">
          I am a Full Stack Developer & Designer
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded">
          Learn More About Me
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
