import React, { FC } from "react";
import facebook from "@/images/socials/facebook.svg";
import twitter from "@/images/socials/twitter.svg";
import telegram from "@/images/socials/telegram.svg";
import youtube from "@/images/socials/youtube.svg";
import Image from "next/image";

export interface SocialsListProps {
  className?: string;
  itemClass?: string;
}

const socialsDemo = [
  {
    name: "Facebook",
    icon: facebook,
    href: "https://www.facebook.com/tienpmath",
  },
  {
    name: "Twitter",
    icon: twitter,
    href: "https://www.facebook.com/tienpmath",
  },
  {
    name: "Youtube",
    icon: youtube,
    href: "https://www.facebook.com/tienpmath",
  },
  {
    name: "Telegram",
    icon: telegram,
    href: "https://www.facebook.com/tienpmath",
  },
];

const SocialsList: FC<SocialsListProps> = ({
  className = "",
  itemClass = "block w-6 h-6",
}) => {
  return (
    <nav
      className={`nc-SocialsList flex space-x-2.5 text-2xl text-neutral-6000 dark:text-neutral-300 ${className}`}
    >
      {socialsDemo.map((item, i) => (
        <a
          key={i}
          className={`${itemClass}`}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
        >
          <Image sizes="40px" src={item.icon} alt="" />
        </a>
      ))}
    </nav>
  );
};

export default SocialsList;
