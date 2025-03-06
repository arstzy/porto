import { Badge, Card } from "./ui";
import Image from "next/image";

export default function Project() {
  return (
    <div className="pt-16 px-10 pb-40">
      <h2 className="text-6xl font-bold mb-8">Projects</h2>
      <div className="space-y-8">

        <Card className="group overflow-hidden bg-black rounded-lg">
          <div className="relative">
            <Image
              src="https://dummyimage.com/1140x600/000/fff&text=Project+1"
              alt="Andrea Project"
              width={1140}
              height={600}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="space-y-2">
                <Badge variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/20">
                  Framer Website
                </Badge>
                <h3 className="text-2xl font-semibold text-white">Andrea</h3>
              </div>
            </div>
          </div>
        </Card>

        <Card className="group overflow-hidden bg-black rounded-lg">
          <div className="relative">
            <Image
              src="https://dummyimage.com/1140x600/000/fff&text=Project+2"
              alt="Cyber Project"
              width={1140}
              height={600}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="space-y-2">
                <Badge variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/20">
                  Framer Website
                </Badge>
                <h3 className="text-2xl font-semibold text-white">Cyber</h3>
              </div>
            </div>
          </div>
        </Card>

        <Card className="group overflow-hidden bg-black rounded-lg">
          <div className="relative">
            <Image
              src="https://dummyimage.com/1140x600/000/fff&text=Project+3"
              alt="CRN Project"
              width={1140}
              height={600}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="space-y-2">
                <Badge variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/20">
                  Framer Website
                </Badge>
                <h3 className="text-2xl font-semibold text-white">CRN</h3>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}