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
    heading: "Rao vặt Lâm Đồng",
    subHeading: "Sàn giao dịch mua bán online 🔥",
    btnText: "Mua bán",
    btnLink: "/",
  },
  {
    image: imageRightPng3,
    heading: "Tiết kiệm thời gian của mỗi người",
    subHeading: "Chỉ cần đăng bán, tìm kiếm và liên hệ 🔥",
    btnText: "Rao vặt",
    btnLink: "/",
  },
  {
    image: imageRightPng,
    heading: "Liên hệ 0944838788",
    subHeading: "Hớp tác cùng phát triển 🔥",
    btnText: "Hợp tác",
    btnLink: "/",
  },
];
