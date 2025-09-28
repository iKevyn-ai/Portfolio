import SocialLinks from './SocialLinks'

function Contact() {
  return (
    <div className="p-8 relative h-full">
      <h2 className="text-3xl font-pixel mb-6 md:relative md:top-[6vh]">Contact me</h2>
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <div className="max-w-md text-center">
          <p className="text-xl font-pixel mb-4 md:text-4xl md:relative md:top-[8vh] lg:text-2xl">
            Feel free to reach out to me through any of the social media platforms below.
          </p>
          <p className="text-xl font-pixel md:text-4xl md:relative md:top-[8vh] lg:text-2xl">
            I'm always open to new opportunities and collaborations.
          </p>
        </div>
      </div>
      <div className="absolute w-full bottom-0">
        <SocialLinks />
      </div>
    </div>
  )
}

export default Contact 