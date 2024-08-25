import React, { FC } from "react";
import NcImage from "@/shared/NcImage/NcImage";
import SocialsShare from "@/shared/SocialsShare/SocialsShare";
import { imgHigtQualitys, _getTitleRd } from "@/contains/fakeData";
import PostCardMeta from "@/components/PostCardMeta/PostCardMeta";
import Link from "next/link";

export interface Card12Props {
  data: any;
  className?: string;
}

const Card12: FC<Card12Props> = ({ data, className = "h-full" }) => {
  console.log(data);
  return (
    <div className={`nc-Card12 group relative flex flex-col ${className}`}>
      <Link
        href={{
          pathname: "/blog/" + data.slug,
        }}
        className="block flex-shrink-0 flex-grow relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden"
      >
        <NcImage
          src={
            "https://admin.raovatlamdong.vn/api/cms-kit/media/" +
            data.coverImageMediaId
          }
          containerClassName="absolute inset-0"
          alt={"title"}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </Link>

      <SocialsShare className="absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300" />

      <div className=" mt-8 pr-10 flex flex-col">
        <h2
          className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl`}
        >
          <Link
            href={{
              pathname: "/blog/" + data.slug,
            }}
            className="line-clamp-2 capitalize"
            title={data.title}
          >
            {data.title}
          </Link>
        </h2>
        <span className="hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400">
          <span className="line-clamp-2">{data.shortDescription}</span>
        </span>
        <PostCardMeta className="mt-5" />
      </div>
    </div>
  );
};

export default Card12;
