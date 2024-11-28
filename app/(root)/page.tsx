import Hero from "@/components/shared/Hero";
import Services from "@/components/shared/Services";

export default function Home() {
  return (
    <div className="wrapper flex flex-col gap-y-[70px] md:gap-y-[100px] lg:gap-y-[130px]">
      <Hero />
      <Services />
    </div>
  );
}
