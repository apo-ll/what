import  HomeCarousel from "@/components/carousel-home";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <main className="">
      <div className="border-2 border-black w-full h-[600px] rounded-3xl mb-16">

      </div>
      <section className="flex flex-col gap-5 mb-20 py-6 bg-[#F9F7F5]">
        
        <HomeCarousel />
      </section>

      
    </main>
    </>
  )
}
