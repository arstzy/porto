import { Experience, Contact, Hero, Project, Skill } from "@/components";

export default function Home() {

  return (
    <div className="min-h-screen">
      <div className="relative w-full">
        <div className="w-full bg-cultured mx-auto h-dvh sticky top-0 z-10">
          <Hero />
        </div>
        <div className="bg-white relative z-10">
          <Skill />
          <Experience />
        </div>
      </div>
      <div className="relative w-full">
        <div className="bg-white relative z-10">
          <Project />
        </div>
        <div className="bg-cultured w-full sticky bottom-0">
          <Contact />
        </div>
      </div>
    </div>
  );
}
