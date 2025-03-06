import { Dribbble, Github, Instagram, Mail } from "lucide-react";
import { Button } from "./ui";


export default function Contact() {
  return (
    <div className="mx-auto h-dvh relative">
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <h2 className="text-4xl font-bold">
          Wanna work <span className="text-gray-400">with me?</span>
        </h2>
        <div className="mt-2">
          <Button variant="default" className="bg-black hover:bg-gray-800 text-white rounded-full py-3 px-5 h-auto">
            atlas.design@example.com
            <Mail className="w-4 h-4 ml-4" />
          </Button>
        </div>
      </div>

      <footer className="mt-32 pb-10 absolute bottom-0 w-full px-10">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-medium">Atlas</div>
          <hr className="border border-t-2 w-full mx-5 rounded-xs border-black" />
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Behance">
              <Github className="w-7 h-7" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Dribbble">
              <Dribbble className="w-7 h-7" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Instagram">
              <Instagram className="w-7 h-7" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}