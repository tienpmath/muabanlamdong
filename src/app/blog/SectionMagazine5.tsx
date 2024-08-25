import React, { FC } from "react";
import Card12 from "./Card12";
import Card13 from "./Card13";

export interface SectionMagazine5Props {}

const SectionMagazine5: FC<SectionMagazine5Props> = async () => {
  const res = await fetch(
    `https://admin.raovatlamdong.vn/api/cms-kit-public/blog-posts/default`,
    {
      method: "GET",
      next: { revalidate: 10000 },
    }
  );
  const data = await res.json();
  var result = data.items[0];

  //
  return (
    <div className="nc-SectionMagazine5">
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        <Card12 data={result} />
        <div className="grid gap-6 md:gap-8">
          {data.items.map((item: any, index: any) => (
            <Card13 data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine5;
