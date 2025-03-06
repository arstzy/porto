import About from "./about"
import ProfileCard from "./profile-card"


export default function Hero() {
  return (
    <div className="max-w-4xl mx-auto h-dvh px-4 py-4 lg:pt-48 lg:pb-28">
      <ProfileCard />
      <About className="lg:block hidden" />
    </div>
  )
}

