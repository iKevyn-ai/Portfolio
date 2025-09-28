import React from 'react'
function Skills() {
  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-pixel mb-4 md:mb-6 md:relative md:top-[5.5vh]">Skills & Certificates</h2>
      <div className="max-w-4xl">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
            <h3 className="text-lg md:text-3xl font-pixel md:relative md:left-[5vh] md:top-[8vh] lg:relative lg:left-[35vh] lg:top-[9vh]">Frontend Development</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-pixel md:relative md:left-[4vh] md:top-[8vh] md:text-xl hover:bg-black hover:text-white lg:relative lg:left-[35vh] lg:top-[9vh] lg:text-xl">HTML</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-pixel md:relative md:left-[4vh] md:top-[8vh] md:text-xl hover:bg-black hover:text-white lg:relative lg:left-[35vh] lg:top-[9vh] lg:text-xl">CSS</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-pixel md:relative md:left-[4vh] md:top-[8vh] md:text-xl hover:bg-black hover:text-white lg:relative lg:left-[35vh] lg:top-[9vh] lg:text-xl">JavaScript</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-pixel md:relative md:left-[4vh] md:top-[8vh] md:text-xl hover:bg-black hover:text-white lg:relative lg:left-[35vh] lg:top-[9vh] lg:text-xl">React</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-pixel md:relative md:left-[4vh] md:top-[8vh] md:text-xl hover:bg-black hover:text-white lg:relative lg:left-[35vh] lg:top-[9vh] lg:text-xl">Tailwind CSS</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
            <h3 className="text-lg md:text-3xl font-pixel md:relative md:left-[5vh] md:top-[8vh] lg:relative lg:left-[35vh] lg:top-[9vh]">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-pixel md:relative md:left-[5vh] md:top-[8vh] md:text-xl hover:bg-black hover:text-white lg:relative lg:left-[35vh] lg:top-[9vh] lg:text-xl">Git</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-pixel md:relative md:left-[5vh] md:top-[8vh] md:text-xl hover:bg-black hover:text-white lg:relative lg:left-[35vh] lg:top-[9vh] lg:text-xl">VS Code</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-pixel md:relative md:left-[5vh] md:top-[8vh] md:text-xl hover:bg-black hover:text-white lg:relative lg:left-[35vh] lg:top-[9vh] lg:text-xl">Figma</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-0">
        <h2 className="text-2xl md:text-3xl font-pixel md:relative md:left-[24vh] md:top-[16vh] lg:relative lg:left-[72vh] lg:top-[13vh]">Certificates</h2>
        <div className="flex flex-col items-center p-4">
      <div className="relative bottom-[-12vh] group">
        <img
          src="./src/assets/Certificate.png"
          alt="Certificate"
          className="w-96 h-[30vh] object-cover object-top shadow-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t-2 border-gray-300 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 origin-bottom">
          <div className="p-3 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Certificate</span>
            <a href="./src/assets/Certificate.pdf" target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-4 h-4 text-blue-600 hover:text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p className="mt-2 text-gray-600">Click the certificate to view PDF</p>
    </div>
      </div>
    </div>
  )
}

export default Skills 