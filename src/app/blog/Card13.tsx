import React, { FC } from "react";
import NcImage from "@/shared/NcImage/NcImage";
import { _getImgRd, _getTitleRd } from "@/contains/fakeData";
import PostCardMeta from "@/components/PostCardMeta/PostCardMeta";
import Link from "next/link";

export interface Card13Props {
  data: any;
  className?: string;
}

const Card13: FC<Card13Props> = ({ data, className = "" }) => {
  return (
    <div className={`nc-Card13 relative flex ${className}`} data-nc-id="Card13">
      <div className="flex flex-col h-full py-2">
        <h2 className={`nc-card-title block font-semibold text-base`}>
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
        <span className="hidden sm:block my-3 text-slate-500 dark:text-slate-400 ">
          <span className="line-clamp-2">{data.description}</span>
        </span>
        <span className="mt-4 block sm:hidden text-sm text-slate-500 ">
          {data.creationTime} · 2 min read
        </span>
        <div className="mt-auto hidden sm:block">
          <PostCardMeta />
        </div>
      </div>

      <Link
        href={{
          pathname: "/blog/" + data.slug,
        }}
        className={`block relative h-full flex-shrink-0 w-2/5 sm:w-1/3 ml-3 sm:ml-5`}
      >
        <NcImage
          alt=""
          src={
            "https://admin.raovatlamdong.vn/api/cms-kit/media/" +
            data.coverImageMediaId
          }
          containerClassName="absolute inset-0"
          className="object-cover w-full h-full rounded-xl sm:rounded-3xl"
          sizes="400px"
          fill
        />
      </Link>
    </div>
  );
};

export default Card13;
