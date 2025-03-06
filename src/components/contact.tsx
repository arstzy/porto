import { Dribbble, Github, Instagram, Mail } from "lucide-react";
import { Button } from "./ui";


export default function Contact() {
  return (
    <div className="mx-auto h-dvh relative">
      <div className="flex flex-col items-center px-3 justify-center h-full space-y-4">
        <h2 className="lg:text-4xl text-2xl font-semibold">
          Wanna work <span className="text-gray-400">with me?</span>
        </h2>
        <div className="mt-2">
          <div className="bg-black text-white rounded-full cursor-pointer py-3 px-5 h-auto flex lg:items-end items-center transition transform hover:-translate-y-1 duration-300 ease-in-out">
            <Button variant="default" className=" text-white lg:text-lg text-sm cursor-pointer rounded-full p-0 h-auto">
              atlas.design@example.com
            </Button>
            <Mail className="lg:w-6 lg:h-6 w-[19px] h-[19px] pt-0.5 lg:p-0 lg:ml-2 ml-2" />
          </div>
        </div>
      </div>

      <footer className="mt-32 pb-10 absolute bottom-0 w-full lg:px-10 px-4">
        <div className="flex justify-between items-center">
          <div className="lg:text-2xl text-lg font-medium">Atlas</div>
          <hr className="border border-t-2 w-full mx-5 rounded-xs border-black" />
          <div className="flex items-center lg:gap-4 gap-2">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Behance">
              <Github className="lg:w-7 lg:h-7 w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Dribbble">
              <Dribbble className="lg:w-7 lg:h-7 w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Instagram">
              <Instagram className="lg:w-7 lg:h-7 w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}