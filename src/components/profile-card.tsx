import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { Badge, Button, Card } from "./ui";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <Card className="flex-1 p-6 bg-white shadow-sm">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
          <div className="w-full md:w-1/3">
            <Image
              src="https://dummyimage.com/180x193/000/fff.png"
              alt="Profile"
              width={200}
              height={210}
              className="rounded-md w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-2 lg:space-y-1">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Hello I&apos;m</h1>
              <h2 className="text-2xl font-semibold text-gray-900">Alex Morgan</h2>
            </div>
            <p className="text-lg text-gray-600">Web Designer, Content Creator & writer.</p>
            <div className="inline-block">
              <Badge
                variant="outline"
                className="px-3 py-1 border-green-200 bg-green-50 text-green-800 flex items-center gap-2"
              >
                <span className="relative flex items-center">
                  <span className="absolute inline-flex h-2 w-2 rounded-full bg-green-500 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>

                Available for work
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={18} className="text-gray-400" />
              <span>Berlin, Germany</span>
            </div>
          </div>
          <div className="flex-1 space-y-2 block lg:hidden">
            <div className="flex items-center gap-3 text-gray-700">
              <Globe size={18} className="text-gray-500" />
              <span>InstantDesign.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Phone size={18} className="text-gray-500" />
              <span>1356-77882-0082</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Mail size={18} className="text-gray-500" />
              <span>Instant@gmail.com</span>
            </div>
            <Button variant="outline" className="w-full cursor-pointer">
              Download CV
            </Button>
            <Button className="w-full bg-gray-900 hover:bg-gray-800 cursor-pointer">Contact Me</Button>
          </div>
        </div>
      </Card>

      {/* Contact Card */}
      <Card className="md:w-80 p-6 bg-white shadow-sm hidden lg:block">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-700">
            <Globe size={18} className="text-gray-500" />
            <span>InstantDesign.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Phone size={18} className="text-gray-500" />
            <span>1356-77882-0082</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Mail size={18} className="text-gray-500" />
            <span>Instant@gmail.com</span>
          </div>
          <Button variant="outline" className="w-full cursor-pointer">
            Download CV
          </Button>
          <Button className="w-full bg-gray-900 hover:bg-gray-800 cursor-pointer">Contact Me</Button>
        </div>
      </Card>
    </div>
  )
}