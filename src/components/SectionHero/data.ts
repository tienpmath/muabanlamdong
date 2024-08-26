import Image, { StaticImageData } from "next/image";
import { Route } from "@/routers/types";
import imageRightPng from "@/images/hero-right.png";
import imageRightPng2 from "@/images/hero-right-2.png";
import imageRightPng3 from "@/images/hero-right-3.png";

interface Hero2DataType {
  image: StaticImageData | string;
  heading: string;
  subHeading: string;
  btnText: string;
  btnLink: Route;
}

export const HERO2_DEMO_DATA: Hero2DataType[] = [
  {
    image: imageRightPng2,
    heading: "Rao vặt",
    subHeading: "Sàn mua bán online 🔥",
    btnText: "Mua bán",
    btnLink: "/",
  },
  {
    image: imageRightPng3,
    heading: "Tiết kiệm",
    subHeading: "Chỉ cần đăng bán🔥",
    btnText: "Rao vặt",
    btnLink: "/",
  },
  {
    image: imageRightPng,
    heading: "0944838788",
    subHeading: "Hớp tác 🔥",
    btnText: "Hợp tác",
    btnLink: "/",
  },
];
