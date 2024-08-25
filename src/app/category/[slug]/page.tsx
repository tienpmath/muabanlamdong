import React, { FC } from "react";
import Pagination from "@/shared/Pagination/Pagination";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import SectionSliderCollections from "@/components/SectionSliderLargeProduct";
import SectionPromo1 from "@/components/SectionPromo1";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/data";
import TabFilters from "@/components/TabFilters";
import ComponentCategoryProducts from "@/components/ComponentCategoryProducts";

const PageCategory = async (props: any) => {
  const slug = props.params.slug;
  //console.log(props);
  const resCat = await fetch(
    `https://admin.raovatlamdong.vn/api/app/category/category?slug=${slug}`,
    {
      method: "GET",
      next: { revalidate: 10000 },
    }
  );
  const cat = await resCat.json();

  //lấy product theo cat;

  return (
    <div className={`nc-PageCollection`}>
      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
        <div className="space-y-10 lg:space-y-14">
          {/* HEADING */}
          <div className="max-w-screen-sm">
            <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
              {cat.name}
            </h2>
            <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">
              {cat.description}
            </span>
          </div>

          <hr className="border-slate-200 dark:border-slate-700" />
          <ComponentCategoryProducts cat={cat} />
        </div>

        {/* === SECTION 5 === */}
        <hr className="border-slate-200 dark:border-slate-700" />

        <SectionSliderCollections />
        <hr className="border-slate-200 dark:border-slate-700" />

        {/* SUBCRIBES */}
        <SectionPromo1 />
      </div>
    </div>
  );
};

export default PageCategory;
