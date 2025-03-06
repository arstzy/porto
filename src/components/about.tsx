import clsx from "clsx";
import { Badge } from "./ui";

export default function About({ className }: { className?: string }) {
  return (
    <div className={clsx("mt-8", className)}>
      <div className=" lg:mb-6 mb-4">
        <Badge variant="outline" className="px-3 hidden lg:block py-1 rounded-lg text-lg font-medium border">
          ABOUT
        </Badge>
        <h2 className="text-4xl font-bold text-center block lg:hidden">
          About
        </h2>
      </div>
      <div className="space-y-6 text-black text-base">
        <p>
          I am Alex Morgan, a passionate Web Designer & Developer residing in the dynamic city of Berlin, Germany.
          My expertise lies at the intersection of visual design and technical implementation.
        </p>
        <p>
          With over 5 years of experience in creating visually stunning and user-centric websites, I&apos;ve honed my
          skills in both front-end and back-end development.
        </p>
      </div>
    </div>
  )
}