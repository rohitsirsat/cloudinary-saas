import { ImageIcon, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-base-200">
      {/* Header Section */}
      <header className="navbar text-primary-content p-4 flex justify-between flex-wrap">
        <div className="flex items-center justify-center py-2 gap-x-2">
          <a href="/" className="btn btn-lg btn-primary ">
            <h1 className="text-xl">ProfileSet </h1>
            <ImageIcon className="w-8 h-8 md:w-10 md:h-10 text-black" />
          </a>
        </div>

        {/* Sign-in/Sign-up Buttons */}
        <div className="flex items-center justify-center gap-2 mt-4 md:mt-0 flex-wrap">
          <a href="/sign-in" className="btn btn-outline btn-white mx-1 md:mx-2">
            Sign In
          </a>
          <a href="/sign-up" className="btn btn-outline btn-white mx-1 md:mx-2">
            Sign Up
          </a>
        </div>
      </header>
      <hr />

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center flex-grow p-4">
        <div className="text-5xl font-bold text-center mb-4 flex justify-center items-center gap-x-1">
          <h1>Welcome to</h1>
          <div className="flex items-center justify-center py-2 gap-x-2">
            <a href="/" className="btn btn-lg btn-primary ">
              <h1 className="text-xl">ProfileSet </h1>
              <ImageIcon className="w-8 h-8 md:w-10 md:h-10 text-black" />
            </a>
          </div>
        </div>
        <p className="text-lg text-center max-w-xl mb-8">
          Upload your image and select the aspect ratio to get the perfect
          profile or cover image. Or upload any type of video and download the
          compressed in size video without compromising on quality of the video.
        </p>
        <a href="/home" className="btn btn-lg btn-white border">
          Get Startedd <ArrowRight />
        </a>
      </main>
      <hr />

      {/* Footer Section */}
      <footer className="footer items-center p-4  text-neutral-content">
        <div className="flex items-center justify-between w-full">
          <p>© 2024 ProfileSet. All rights reserved.</p>
          <div>
            <a href="/privacy" className="link link-hover mx-2">
              Privacy Policy
            </a>
            <a href="/terms" className="link link-hover mx-2">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
