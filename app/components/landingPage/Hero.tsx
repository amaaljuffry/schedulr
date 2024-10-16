import Image from "next/image";
import HeroImage from "@/public/better.png";
import { AuthModal } from "./AuthModal";
import { AvatarCirclesDemo } from "./AvatarCircles";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center">
      <div className="relative items-center w-full py-12 lg:py-20">
        <div className="text-center">
          <span className="text-sm font-bold tracking-tight bg-primary/10 px-4 py-2 rounded-full dark:bg-primary-dark/50">
            Introducing Schedulr 1.0
          </span>
          <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none text-primary">
            Scheduling made{" "}
            <span className="block">super easy!</span>
          </h1>
          <p className="max-w-xl mx-auto mt-4 lg:text-lg font-semibold">
            Schedulr simplifies meeting scheduling, making it easy for clients to connect with you.
          </p>
          <p className="mt-4 text-center text-sm">
            <span>Trusted by 6000+ users </span>
            <span>that use Schedulr to manage their schedules seamlessly.</span>
          </p>
          <div className="mt-5 mb-6 flex flex-col items-center">
            <div className="flex flex-col items-center mb-4 ">
              <AvatarCirclesDemo />
            </div>
            <AuthModal />
          </div>
        </div>
        <div className="relative items-center w-full py-12 mx-auto mt-12">
          <svg
            className="absolute inset-0 -mt-24 blur-3xl"
            style={{ zIndex: -1 }}
            fill="none"
            viewBox="0 0 400 400"
            height="100%"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_10_20)">
              <g filter="url(#filter0_f_10_20)">
                <path
                  d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
                  fill="#03FFE0"
                ></path>
                <path
                  d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
                  fill="#7C87F8"
                ></path>
                <path
                  d="M320 400H400V78.75L106.2 134.75L320 400Z"
                  fill="#4C65E4"
                ></path>
                <path
                  d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
                  fill="#043AFF"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="720.666"
                id="filter0_f_10_20"
                width="720.666"
                x="-160.333"
                y="-160.333"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_10_20"
                  stdDeviation="80.1666"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
          <Image
            src={HeroImage}
            alt="Hero image"
            priority
            className="relative object-cover w-full border rounded-lg shadow-2xl lg:rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
