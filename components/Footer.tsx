import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Feel free to reach out to me to{" "}
          <span className="text-purple">develop web application projects</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I would love to help build & develop your dream web app
        </p>
        <a href="mailto:muhamadhanifhafizhan@gmail.com">
          <MagicButton
            title="Contact Me!"
            icon={<FaLocationArrow />}
            position="left"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Envoy Dev
        </p>
        <div className="flex items-center md:gap-3 gap-6 mt-5 md:mt-0">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="cursor-pointer w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={profile.img} alt={profile.img} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
