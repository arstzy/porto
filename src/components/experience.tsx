export default function Experience() {
  return (
    <div className="mt-16 mx-auto px-80 pb-64">
      <h2 className="text-6xl font-bold mb-8">Experience</h2>
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