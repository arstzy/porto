import { Badge } from "./ui"

export default function Skill() {
  return (
    <div className="text-center px-4 sm:px-6 lg:px-8 pt-28 pb-20">
      <h2 className="text-6xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center px-56 gap-3 md:gap-4">
        <Badge variant="outline" className="px-4 py-2 text-base font-normal rounded-full border-gray-300">
          User-Centered Design (UCD)
        </Badge>
        <Badge variant="outline" className="px-4 py-2 text-base font-normal rounded-full border-gray-300">
          Wireframing and Prototyping
        </Badge>
        <Badge variant="outline" className="px-4 py-2 text-base font-normal rounded-full border-gray-300">
          Typography
        </Badge>
        <Badge variant="outline" className="px-4 py-2 text-base font-normal rounded-full border-gray-300">
          Visual Hierarchy
        </Badge>
        <Badge variant="outline" className="px-4 py-2 text-base font-normal rounded-full border-gray-300">
          Responsive Design
        </Badge>
        <Badge variant="outline" className="px-4 py-2 text-base font-normal rounded-full border-gray-300">
          Interaction Design
        </Badge>
        <Badge variant="outline" className="px-4 py-2 text-base font-normal rounded-full border-gray-300">
          Color Theory
        </Badge>
        <Badge variant="outline" className="px-4 py-2 text-base font-normal rounded-full border-gray-300">
          Graphic Design
        </Badge>
        <Badge variant="outline" className="px-4 py-2 text-base font-normal rounded-full border-gray-300">
          UI Design Tools
        </Badge>
        <Badge variant="outline" className="px-4 py-2 text-base font-normal rounded-full border-gray-300">
          Coding Basics
        </Badge>
      </div>
    </div>
  )
}