import Image from "next/image";
import Hero from "./components/home/Hero";
import Inte from "./components/home/Inte";
import Different from "./components/home/Different";
import Work from "./components/home/Work";
import Whatsapp from "./components/home/Whatsapp";
export default function Home() {
  return (
    <main className='flex flex-col xl:gap-[160px] md:gap-[120px] gap-20   '>
      <Hero />
      <Inte />
      <Different />
      <Work />
      <Whatsapp />
    </main>
  );
}
