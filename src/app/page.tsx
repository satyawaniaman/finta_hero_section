import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-150">
      <div className="max-w-5xl mx-auto absolute inset-0 h-full w-full">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-slate-300/80 to-slate-200/0" />
        <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-slate-300/50 to-slate-200/0" />
      </div>
      <Container>
        <Navbar />
        <Hero />
      </Container>
      <div className="relative w-full">
        {/* Horizontal line */}
        <div className="h-px w-full absolute inset-x-0 z-0 bg-slate-300/50" />
        <div className="max-w-5xl mx-auto p-4">
          <Image
            src={"/screen.webp"}
            alt="screen"
            width={1000}
            height={1000}
            className="rounded-xl w-full object-cover object-left-top border-neutral-200 shadow-md mask-b-from-20% to-40%"
          />
        </div>
      </div>
    </div>
  );
}
