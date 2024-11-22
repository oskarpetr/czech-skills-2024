import { IMenuItem } from "@/types/MenuItem.types";
import Icon from "../common/Icon";
import Link from "next/link";

export default function About() {
  return (
    <div
      id="about"
      className="bg-black -mt-20 px-24 py-40 flex items-center gap-16 h-screen"
    >
      <iframe
        src="https://www.youtube.com/embed/sBgNFl3jYPs?autoplay=1&mute=1"
        // style={{
        //   position: "absolute",
        //   top: 0,
        //   left: 0,
        //   width: "100%",
        //   height: "100%",
        // }}
        className="w-1/2 h-[25rem]"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      />

      <div className="w-1/2 my-6 flex flex-col gap-8">
        <div className="text-white text-5xl font-semibold">Annapurna.</div>
        <div className="text-white opacity-50 w-3/5">
          Established in 2016, Annapurna Interactive works with game creators
          from around the world, helping them create and release personal
          experiences for everyone. The company is a division of Annapurna
          Pictures.
        </div>

        <SocialMedia />
      </div>
    </div>
  );
}

function SocialMedia() {
  const socialMedias: IMenuItem[] = [
    {
      icon: "TwitterLogo",
      link: "https://x.com/AnnapurnaPics",
    },
    {
      icon: "FacebookLogo",
      link: "https://www.facebook.com/AnnapurnaPics/",
    },
    {
      icon: "InstagramLogo",
      link: "https://www.instagram.com/annapurnapics",
    },
    {
      icon: "YoutubeLogo",
      link: "https://www.youtube.com/annapurnachannel",
    },
  ];

  return (
    <div className="flex gap-4">
      {socialMedias.map((media) => (
        <Link
          href={media.link}
          key={`socialMedia_${media.icon}`}
          target="_blank"
          className="group"
        >
          <Icon
            name={media.icon!}
            color="white"
            weight="fill"
            className="group-hover:opacity-80 opacity-50 transition-all"
          />
        </Link>
      ))}
    </div>
  );
}
