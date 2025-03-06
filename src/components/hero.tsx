import About from "./about"
import ProfileCard from "./profile-card"


export default function Hero() {
  return (
    <div className="max-w-4xl mx-auto h-dvh py-28">
      <ProfileCard />
      <About />
    </div>
  )
}

