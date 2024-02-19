import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:-12 lg:px-20 xl:px-48 text-l">
    {/* Hero container - image */} 
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
       <Image src="/hero.png" alt="" fill className="object-contain"/>
      </div>
    {/* Texto */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-6 items-center justify-center">
    {/* Title */}
      <h1 className="text-xl md:text-4xl font-semibold">From Historian to HTML: My Web Journey</h1>
    {/* Descripciçon */}
      <p className="md:text-l">Portfolio dedicado a demostrar mis habilidades técnicas y creativas, mostrando proyectos personales y ejercicios prácticos que reflejan mi dedicación reciente por la programación y mi compromiso con el aprendizaje continuo en el campo del desarrollo web.</p>
    {/* Buttons */}
        <div className="flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-pink-300 bg-pink-300 text-black">View my work</button>
          <button className="p-4 rounded-lg ring-1 ring-pink-300 bg-pink-300 text-black">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
