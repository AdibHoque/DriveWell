import {Button} from "../ui/button";

function Hero() {
  return (
    <div className="md:mt-2 relative bg-[url('/images/banner/5.jpg')] bg-cover bg-center md:rounded-xl h-[88vh]">
      <div className="md:rounded-xl absolute inset-0 bg-gradient-to-r from-[rgb(21,21,21)] to-[rgb(21,21,21)] lg:via-[rgba(21,21,21,0.60)] lg:to-[rgba(21,21,21,0)] opacity-70 lg:opacity-100"></div>
      <div className="relative flex flex-col items-center text-center lg:text-start lg:items-start justify-center p-4 gap-5 lg:justify-evenly h-full lg:w-1/2 lg:p-20 lg:pr-0 text-white">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
          Affordable Price For Car Servicing
        </h1>
        <p>
          Get top-notch car servicing at prices that won’t break the bank. We
          combine quality, efficiency, and affordability to ensure your vehicle
          gets the care it deserves without compromising your budget.
        </p>
        <div className="flex gap-5">
          <Button>Discover More</Button>
          <Button variant="outline" className="text-black">
            Latest Project
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
