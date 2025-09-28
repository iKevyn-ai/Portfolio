function Cases() {
  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-pixel mb-4 md:mb-6 md:relative md:top-[5.5vh]">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="bg-white rounded-lg shadow-lg p-6 md:relative md:left-[27vh] md:top-[15vh] lg:left-[10vh]">
          <h3 className="text-xl font-pixel mb-2">E-commerce Platform</h3>
          <p className="text-gray-600 mb-4">A full-stack e-commerce solution with user authentication, product management, and payment integration.</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Node.js</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">MongoDB</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 md:relative md:left-[5vh] md:top-[15vh] lg:left-[5vh]">
          <h3 className="text-xl font-pixel mb-2">Task Management App</h3>
          <p className="text-gray-600 mb-4">A collaborative task management application with real-time updates and team features.</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Vue.js</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Firebase</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Tailwind</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 md:relative md:left-[-15vh] md:top-[15vh] lg:left-[10vh]">
          <h3 className="text-xl font-pixel mb-2">Portfolio Website</h3>
          <p className="text-gray-600 mb-4">A responsive portfolio website showcasing projects and skills with modern design.</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Tailwind</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Framer Motion</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cases 