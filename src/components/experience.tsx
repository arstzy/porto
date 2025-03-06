export default function Experience() {
  return (
    <div className="lg:mt-16 mt-10 mx-auto lg:px-80 px-6 lg:pb-64 pb-20">
      <h2 className="lg:text-5xl text-4xl font-bold mb-8">Experience</h2>
      <div className="space-y-8">
        <div className="group">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium">Google</h3>
            <div className="text-right">
              <div className="text-base font-medium">UI Designer</div>
              <div className="text-sm text-gray-500">2017</div>
            </div>
          </div>
          <div className="mt-2 h-px bg-gray-200 group-hover:bg-gray-300 transition-colors" />
        </div>

        <div className="group">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium">Spotify</h3>
            <div className="text-right">
              <div className="text-base font-medium">UI Designer</div>
              <div className="text-sm text-gray-500">2019</div>
            </div>
          </div>
          <div className="mt-2 h-px bg-gray-200 group-hover:bg-gray-300 transition-colors" />
        </div>

        <div className="group">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium">Freelance</h3>
            <div className="text-right">
              <div className="text-base font-medium">Digital Designer</div>
              <div className="text-sm text-gray-500">2021</div>
            </div>
          </div>
          <div className="mt-2 h-px bg-gray-200 group-hover:bg-gray-300 transition-colors" />
        </div>
      </div>
    </div>
  )
}