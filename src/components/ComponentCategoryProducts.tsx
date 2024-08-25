"use client";
import React, { FC } from "react";
import { useEffect, useState } from "react";
import Pagination from "@/shared/Pagination/Pagination";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import SectionSliderCollections from "@/components/SectionSliderLargeProduct";
import SectionPromo1 from "@/components/SectionPromo1";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/data";
import TabFilters from "@/components/TabFilters";
import { fetchDataCategory } from "../app/services/ProductServices";
import ReactPaginate from "react-paginate";

const ComponentCategoryProducts = (props: any) => {
  const cat = props.cat.id;

  const pageSize = 16;

  // const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);

  const [data, setData] = useState([]); //khởi tạo

  useEffect(() => {
    fetchData(cat, page, pageSize); // Gọi ngay lần đầu để không phải chờ
  }, [page]);

  //   useEffect(() => {
  //     getData(pageSize, 6);
  //   }, []);
  const total = 128;

  const pageCount = total / pageSize; //số trang

  const fetchData = async (c: any, skip: any, max: any) => {
    const res = await fetchDataCategory(cat, skip, max);
    setData(res.items);
  };

  const handlePageClick = (event: any) => {
    //console.log(event);
    const t = +event.selected * +1 * pageSize;
    // console.log(t);
    setPage(t);
    //getData(t, 2);
  };
  return (
    <main>
      {/* TABS FILTER */}
      <TabFilters />

      {/* LOOP ITEMS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
        {data.map((item, index) => (
          <ProductCard data={item} key={index} />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
        <nav aria-label="Page navigation example">
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName=""
            pageLinkClassName="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
            previousClassName=""
            previousLinkClassName="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
            nextClassName=""
            nextLinkClassName="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
            breakLabel="..."
            breakClassName=""
            breakLinkClassName="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
            containerClassName="inline-flex items-center -space-x-px"
            activeClassName="active rounded-full bg-primary-100"
            renderOnZeroPageCount={null}
          />
        </nav>
        {/* <Pagination /> */}
        <ButtonPrimary loading>Xem tất cả Sản phẩm, Dịch vụ</ButtonPrimary>
      </div>
    </main>
  );
};

export default ComponentCategoryProducts;
