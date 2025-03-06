import { Badge } from "./ui";

export default function About() {
  return (
    <div className="mt-8">
      <div className="inline-block mb-6">
        <Badge variant="outline" className="px-4 py-1.5 text-lg font-medium border-2">
          ABOUT
        </Badge>
      </div>
      <div className="space-y-6 text-black text-xl">
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