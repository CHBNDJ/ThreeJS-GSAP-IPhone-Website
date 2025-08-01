import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to(".hero-title", {
      opacity: 1,
      delay: 1.5,
    });
    gsap.to("#cta", {
      opacity: 1,
      delay: 2,
      y: -50,
    });
  }, []);
  return (
    <section className="w-full nav-height bg-black relative md:mt-12 mt-24">
      <div className="h-5/6 w-full flex-center flex-col flex">
        <p className="hero-title">IPhone 16 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none pb-18"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        <div
          id="cta"
          className="flex flex-col items-center opacity-0 text-center"
        >
          <a href="#highlights" className="btn">
            Buy
          </a>
          <p className="font-medium text-xl">
            From $999 or $41.62/mo. for 24 mo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
