function About() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-pixel mb-6">About me</h2>
      <div className="max-w-4xl">
        <p className="text-xl font-pixel w-full sm:w-[500px] px-4 leading-tight md:relative md:px-0 lg:text-2xl lg:left-[35vh] lg:top-[15vh]">
          Hello, my name is Ziad. I'm a 18 year old student from Egypt. I'm a front-end developer, still in the learning process. I'm actively learning new things and improving my skills.
        </p>
        <img className="relative left-[140vh] bottom-[30vh] rounded-full w-[240px] h-[240px]" src="/src/assets/SelfImg.jpg" alt="Image.jpg" />
      </div>
    </div>
  )
}

export default About 